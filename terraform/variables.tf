# ──────────────────────────────────────────────────────────────
# QuizHunt — Terraform Variables
# ──────────────────────────────────────────────────────────────

variable "aws_region" {
  description = "AWS region to deploy the infrastructure"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.small"
}

variable "key_name" {
  description = "Name of an existing AWS EC2 key pair for SSH access"
  type        = string
}

variable "ssh_private_key_path" {
  description = "Local path to the SSH private key file (for Ansible inventory)"
  type        = string
  default     = "~/.ssh/id_rsa"
}

variable "docker_image" {
  description = "Docker image name (without the Docker Hub username prefix)"
  type        = string
  default     = "quizhunt-app"
}

variable "dockerhub_username" {
  description = "Docker Hub username (used as image prefix)"
  type        = string
}
