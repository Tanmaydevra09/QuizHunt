# ──────────────────────────────────────────────────────────────
# QuizHunt — Terraform Outputs
# ──────────────────────────────────────────────────────────────

output "instance_public_ip" {
  description = "Public IP address of the QuizHunt EC2 instance"
  value       = aws_instance.quizhunt_server.public_ip
}

output "app_url" {
  description = "URL to access the QuizHunt application"
  value       = "http://${aws_instance.quizhunt_server.public_ip}"
}

output "ssh_command" {
  description = "SSH command to connect to the instance"
  value       = "ssh -i ${var.ssh_private_key_path} ubuntu@${aws_instance.quizhunt_server.public_ip}"
}

output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.quizhunt_server.id
}
