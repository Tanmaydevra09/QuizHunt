#!/bin/bash
# ──────────────────────────────────────────────────────────────
# QuizHunt — One-Command Cloud Deployment Script
#
# This script automates the full deployment:
#   1. Terraform provisions AWS EC2 infrastructure
#   2. Ansible configures the server and deploys the app
#
# Prerequisites:
#   - AWS CLI configured (aws configure)
#   - Terraform installed (v1.0+)
#   - Ansible installed
#   - terraform.tfvars file configured
#
# Usage:
#   chmod +x deploy.sh
#   ./deploy.sh
# ──────────────────────────────────────────────────────────────

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}"
echo "╔══════════════════════════════════════════════════╗"
echo "║     🎯 QuizHunt Cloud Deployment                ║"
echo "║     Terraform + Ansible Automation              ║"
echo "╚══════════════════════════════════════════════════╝"
echo -e "${NC}"

# ─── Pre-flight Checks ───────────────────────────────────────
echo -e "${YELLOW}🔍 Running pre-flight checks...${NC}"

check_command() {
    if ! command -v "$1" &> /dev/null; then
        echo -e "${RED}❌ $1 is not installed. Please install it first.${NC}"
        exit 1
    fi
    echo -e "${GREEN}  ✓ $1 found${NC}"
}

check_command terraform
check_command ansible-playbook
check_command aws

# Verify AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS credentials not configured. Run 'aws configure' first.${NC}"
    exit 1
fi
echo -e "${GREEN}  ✓ AWS credentials valid${NC}"

# Check for terraform.tfvars
if [ ! -f "terraform/terraform.tfvars" ]; then
    echo -e "${RED}❌ terraform/terraform.tfvars not found!${NC}"
    echo -e "${YELLOW}   Copy the example and fill in your values:${NC}"
    echo -e "   cp terraform/terraform.tfvars.example terraform/terraform.tfvars"
    exit 1
fi
echo -e "${GREEN}  ✓ terraform.tfvars found${NC}"
echo ""

# ─── Phase 1: Terraform ──────────────────────────────────────
echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"
echo -e "${CYAN}  Phase 1: Provisioning Infrastructure (Terraform) ${NC}"
echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"

cd terraform

echo -e "${YELLOW}📦 Initializing Terraform...${NC}"
terraform init

echo -e "${YELLOW}📋 Planning infrastructure...${NC}"
terraform plan -out=tfplan

echo -e "${YELLOW}🚀 Applying infrastructure...${NC}"
terraform apply -auto-approve tfplan

# Capture outputs
EC2_IP=$(terraform output -raw instance_public_ip)
APP_URL=$(terraform output -raw app_url)
SSH_CMD=$(terraform output -raw ssh_command)

echo -e "${GREEN}✅ Infrastructure provisioned!${NC}"
echo -e "   EC2 IP: ${CYAN}${EC2_IP}${NC}"

cd ..

# ─── Phase 2: Wait for EC2 ───────────────────────────────────
echo ""
echo -e "${YELLOW}⏳ Waiting for EC2 instance to be fully ready (60s)...${NC}"
sleep 60

# Test SSH connectivity
echo -e "${YELLOW}🔗 Testing SSH connectivity...${NC}"
MAX_RETRIES=5
RETRY_COUNT=0
while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 -o BatchMode=yes \
        -i "$(grep ansible_ssh_private_key_file ansible/inventory.ini | head -1 | sed 's/.*ansible_ssh_private_key_file=//')" \
        ubuntu@${EC2_IP} "echo connected" &> /dev/null; then
        echo -e "${GREEN}  ✓ SSH connection established${NC}"
        break
    fi
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo -e "${YELLOW}  Retry ${RETRY_COUNT}/${MAX_RETRIES}...${NC}"
    sleep 15
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo -e "${RED}❌ Could not establish SSH connection after ${MAX_RETRIES} attempts.${NC}"
    exit 1
fi

# ─── Phase 3: Ansible ────────────────────────────────────────
echo ""
echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"
echo -e "${CYAN}  Phase 2: Configuring Server (Ansible)            ${NC}"
echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"

cd ansible

echo -e "${YELLOW}🔧 Running Ansible playbook...${NC}"
ansible-playbook -i inventory.ini playbook.yml

cd ..

# ─── Deployment Complete ─────────────────────────────────────
echo ""
echo -e "${GREEN}"
echo "╔══════════════════════════════════════════════════╗"
echo "║     🎉 Deployment Complete!                     ║"
echo "╠══════════════════════════════════════════════════╣"
echo "║                                                  ║"
echo "║  🌐 App URL:  ${APP_URL}"
echo "║  🖥️  EC2 IP:   ${EC2_IP}"
echo "║  🔑 SSH:      ${SSH_CMD}"
echo "║                                                  ║"
echo "╚══════════════════════════════════════════════════╝"
echo -e "${NC}"
echo -e "${YELLOW}To destroy infrastructure:${NC}"
echo -e "  cd terraform && terraform destroy"
