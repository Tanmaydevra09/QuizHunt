# ──────────────────────────────────────────────────────────────
# QuizHunt — Remote State Management (Optional)
#
# Uncomment the block below to store Terraform state in S3.
# This enables team collaboration and state locking via DynamoDB.
#
# Prerequisites:
#   1. Create an S3 bucket (e.g., "quizhunt-terraform-state")
#   2. Create a DynamoDB table (e.g., "quizhunt-terraform-locks")
#      with a partition key named "LockID" (String)
# ──────────────────────────────────────────────────────────────

# terraform {
#   backend "s3" {
#     bucket         = "quizhunt-terraform-state"
#     key            = "quizhunt/terraform.tfstate"
#     region         = "us-east-1"
#     encrypt        = true
#     dynamodb_table = "quizhunt-terraform-locks"
#   }
# }
