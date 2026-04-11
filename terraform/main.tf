# ──────────────────────────────────────────────────────────────
# QuizHunt — Terraform Infrastructure
# Provisions an AWS EC2 instance for the QuizHunt application
# ──────────────────────────────────────────────────────────────

terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# ─── Provider ─────────────────────────────────────────────────
provider "aws" {
  region = var.aws_region
}

# ─── Data: Latest Ubuntu 22.04 LTS AMI ───────────────────────
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

# ─── Security Group ──────────────────────────────────────────
resource "aws_security_group" "quizhunt_sg" {
  name        = "quizhunt-sg"
  description = "Security group for QuizHunt application server"

  # SSH Access
  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTP Access
  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Application Alternate Port
  ingress {
    description = "App Port 3000"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow all outbound traffic
  egress {
    description = "All outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name    = "QuizHunt-SG"
    Project = "QuizHunt"
  }
}

# ─── EC2 Instance ────────────────────────────────────────────
resource "aws_instance" "quizhunt_server" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.quizhunt_sg.id]

  root_block_device {
    volume_size = 20
    volume_type = "gp3"
  }

  tags = {
    Name    = "QuizHunt-Server"
    Project = "QuizHunt"
  }

  # Auto-generate Ansible inventory after instance creation
  provisioner "local-exec" {
    command = <<-EOT
      echo "[quizhunt_servers]" > ../ansible/inventory.ini
      echo "${self.public_ip} ansible_user=ubuntu ansible_ssh_private_key_file=${var.ssh_private_key_path}" >> ../ansible/inventory.ini
      echo "" >> ../ansible/inventory.ini
      echo "[quizhunt_servers:vars]" >> ../ansible/inventory.ini
      echo "docker_image=${var.dockerhub_username}/${var.docker_image}:latest" >> ../ansible/inventory.ini
    EOT
  }
}
