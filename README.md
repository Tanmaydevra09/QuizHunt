# 🎯 QuizHunt — Cloud-Native Programming Quiz Platform

![Node.js](https://img.shields.io/badge/Node.js-v22-339933?style=flat-square&logo=nodedotjs)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-326CE5?style=flat-square&logo=kubernetes)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=flat-square&logo=terraform)
![Ansible](https://img.shields.io/badge/Ansible-Automated-EE0000?style=flat-square&logo=ansible)
![AWS](https://img.shields.io/badge/AWS-EC2%20Deployed-FF9900?style=flat-square&logo=amazonaws)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=flat-square&logo=jenkins)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=flat-square&logo=prometheus)

> **QuizHunt** is an interactive, cloud-native web platform for technical quizzes across 16+ programming and CS domains — deployed on AWS using a full DevOps pipeline: Docker → Kubernetes → Jenkins CI/CD → Terraform IaC → Ansible → Prometheus + Grafana.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Quiz Categories](#-quiz-categories)
- [Local Development](#-local-development)
- [Docker](#-docker)
- [Kubernetes](#-kubernetes)
- [Terraform — IaC](#-infrastructure--terraform-iac)
- [Ansible — Config Management](#-configuration--ansible)
- [Jenkins — CI/CD Pipeline](#️-cicd--jenkins-pipeline)
- [Prometheus & Grafana — Monitoring](#-monitoring--prometheus--grafana)
- [Full Cloud Deployment](#-full-cloud-deployment)
- [Environment Variables](#-environment-variables)
- [Performance & Scalability](#-performance--scalability)

---

## 🌐 Overview

QuizHunt eliminates manual, error-prone deployment by implementing a fully automated DevOps pipeline. Every `git push` flows through:

```
Developer → GitHub → Jenkins CI/CD → SonarQube Analysis
         → Docker Build → Docker Hub → Terraform (AWS EC2)
         → Ansible (Server Config) → Kubernetes (Orchestration)
         → Prometheus + Grafana (Monitoring)
```

### Cloud Service Model

| Layer | Tool | Model |
|-------|------|-------|
| Infrastructure | AWS EC2, Security Groups | **IaaS** |
| Orchestration | Kubernetes | **PaaS-like** |
| Application | QuizHunt via Node.js | **SaaS-like** |
| CI/CD | Jenkins Pipeline | **PaaS-like** |
| Monitoring | Prometheus + Grafana | **SaaS-like** |

---

## 🛠 Tech Stack

### Application
| Technology | Purpose |
|------------|---------|
| HTML5, CSS3, Bootstrap 4 | Frontend UI |
| Vanilla JavaScript | Quiz engine & dynamic rendering |
| Node.js + Express | Backend server & `/metrics` endpoint |
| `prom-client` | Prometheus metrics instrumentation |

### DevOps & Cloud
| Technology | Version | Purpose |
|------------|---------|---------|
| **Docker** | v20+ | Containerization (Node Alpine image) |
| **Kubernetes** | v1.36+ | Orchestration, scaling, self-healing |
| **Jenkins** | Latest | CI/CD pipeline automation |
| **SonarQube** | Latest | Static code analysis & security |
| **Terraform** | v1.0+ | Infrastructure as Code (AWS ~5.0) |
| **Ansible** | v2.9+ | Server configuration management |
| **AWS EC2** | t3.small | Cloud compute (Ubuntu 22.04 LTS) |
| **Prometheus** | Latest | Metrics collection (15s interval) |
| **Grafana** | Latest | Metrics visualization & dashboards |
| **Docker Hub** | — | Container image registry |

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    DEVELOPER WORKFLOW                        │
│  Code Change → git push → GitHub (main branch)              │
└────────────────────────────┬────────────────────────────────┘
                             │ triggers
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                  JENKINS CI/CD PIPELINE                      │
│                                                             │
│  Stage 1: Checkout Code      (git clone from GitHub)        │
│  Stage 2: SonarQube Analysis (bugs, security, code smells)  │
│  Stage 3: Docker Build       (docker build -t quizhunt)     │
│  Stage 4: Deploy to K8s      (kubectl rollout restart)      │
└────────────────────────────┬────────────────────────────────┘
                             │
            ┌────────────────┴─────────────────┐
            ▼                                  ▼
┌───────────────────────┐      ┌───────────────────────────────┐
│      DOCKER HUB       │      │      TERRAFORM (IaC)          │
│                       │      │                               │
│  tanmaydevra09/       │      │  AWS EC2 (t3.small)           │
│  quizhunt-app:latest  │      │  Ubuntu 22.04 LTS AMI         │
│  quizhunt-app:<sha>   │      │  Security Group:              │
└───────────────────────┘      │   - Port 22  (SSH)            │
                               │   - Port 80  (HTTP)           │
                               │   - Port 3000 (App alt)       │
                               │  20GB gp3 EBS volume          │
                               │  Auto-generates inventory.ini │
                               └───────────────┬───────────────┘
                                               │ provisions
                                               ▼
                               ┌───────────────────────────────┐
                               │        ANSIBLE ROLES          │
                               │                               │
                               │  common → system updates      │
                               │  docker → install Docker      │
                               │  app    → pull image & run    │
                               └───────────────┬───────────────┘
                                               │ configures
                                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   KUBERNETES CLUSTER                         │
│                                                             │
│   Deployment: quizhunt-deployment                           │
│   ├── Pod 1: quizhunt:latest (port 80) ← Running           │
│   └── Pod 2: quizhunt:latest (port 80) ← Running (HA)      │
│                                                             │
│   Service: quizhunt-service (NodePort 30007)                │
└────────────────────────────┬────────────────────────────────┘
                             │ scraped every 15s
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    MONITORING STACK                          │
│                                                             │
│  Prometheus → scrapes /metrics endpoint                     │
│  Alert Rules:                                               │
│    • HighCPUUsage    (process_cpu > 0.5 for 1m) — warning  │
│    • AppDown         (up == 0 for 30s)          — critical  │
│    • HighLatency     (p95 > 1s for 1m)          — warning  │
│                                                             │
│  Grafana → visualizes Prometheus metrics as dashboards      │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
QuizHunt/
│
├── index.html                    # App homepage
├── server.js                     # Express server + Prometheus /metrics
├── package.json                  # Node.js dependencies
├── Dockerfile                    # Container image definition
├── Jenkinsfile                   # CI/CD pipeline stages
├── k8s-deployment.yaml           # Kubernetes Deployment + Service
├── deploy.sh                     # One-command full cloud deploy
│
├── pages/                        # Quiz pages
│   ├── cloud.html                # ✨ Cloud & DevOps Quiz
│   ├── python.html
│   ├── java.html
│   └── ... (16 total)
│
├── quizzes/                      # Quiz question data (JS arrays)
│   ├── cloudquiz.js              # ✨ 20 Cloud/DevOps MCQs
│   └── ... (15 other quiz files)
│
├── scripts/
│   ├── quiz-engine.js            # Core quiz rendering logic
│   └── quiz-metadata.js          # Quiz registry (titles, icons, URLs)
│
├── styles/                       # CSS stylesheets
│
├── terraform/                    # Infrastructure as Code
│   ├── main.tf                   # EC2, Security Groups, AMI lookup
│   ├── variables.tf              # Input variables
│   ├── outputs.tf                # Public IP, SSH command, App URL
│   ├── backend.tf                # S3 remote state (optional)
│   └── terraform.tfvars.example  # Variable template
│
├── ansible/                      # Configuration Management
│   ├── playbook.yml              # Main orchestration playbook
│   ├── inventory.ini             # Auto-generated by Terraform
│   └── roles/
│       ├── common/tasks/main.yml
│       ├── docker/tasks/main.yml
│       └── app/tasks/main.yml
│
├── jenkins/
│   ├── Dockerfile                # Jenkins with Docker-in-Docker
│   └── docker-compose.yaml       # Jenkins + SonarQube stack
│
└── monitoring/                   # K8s monitoring manifests
    ├── prometheus-config.yaml    # ConfigMap + alert rules
    ├── prometheus-deployment.yaml
    ├── prometheus-service.yaml
    ├── grafana-deployment.yaml
    └── grafana-service.yaml
```

---

## 🧩 Quiz Categories

| # | Category | Tag | Questions |
|---|----------|-----|-----------|
| 1 | ☁️ **Cloud & DevOps** | Cloud | 20 |
| 2 | 🖥 C Language | C | 30+ |
| 3 | ➕ C++ | C++ | 30+ |
| 4 | ☕ Java | Java | 30+ |
| 5 | 🐍 Python | Python | 20+ |
| 6 | 🌐 JavaScript | JS | 30+ |
| 7 | 🐘 PHP | PHP | 30+ |
| 8 | 🌳 Data Structures | DSA | 30+ |
| 9 | 💻 Operating Systems | OS | 30+ |
| 10 | 🗄 Database (DBMS) | DBMS | 30+ |
| 11 | 🤖 Machine Learning | AI/ML | 20+ |
| 12 | 🐧 Linux | Linux | 30+ |
| 13 | 🌐 Computer Networks | Networking | 30+ |
| 14 | 🔐 Cyber Security | Security | 30+ |
| 15 | 🔧 Computer Architecture | COA | 30+ |
| 16 | 🏆 Mega Technical Quiz | Mixed | 50+ |

---

## 💻 Local Development

```bash
# Clone the repo
git clone https://github.com/Tanmaydevra09/QuizHunt.git
cd QuizHunt

# Install dependencies
npm install

# Run the app → http://localhost:80
sudo node server.js

# Or just open index.html in browser (static mode, no server needed)
```

---

## 🐳 Docker

### Build & Run

```bash
# Build the Docker image
docker build -t quizhunt:latest .

# Run container (host port 8080 → container port 80)
docker run -d -p 8080:80 --name quizhunt quizhunt:latest

# Visit http://localhost:8080

# Show running containers
docker ps

# Stream live container logs
docker logs -f quizhunt

# Stop / Start / Remove
docker stop quizhunt
docker start quizhunt
docker rm quizhunt
```

### Dockerfile Explained

```dockerfile
FROM node:18-alpine        # Lightweight Linux base (~50MB)
WORKDIR /app               # Set working directory inside container
COPY package*.json ./      # Copy dependency manifest first (layer caching)
RUN npm install            # Install all production dependencies
COPY . .                   # Copy application source code
EXPOSE 80                  # Declare the container listens on port 80
CMD ["node", "server.js"]  # Start the Express server
```

### Push to Docker Hub

```bash
docker tag quizhunt:latest tanmaydevra09/quizhunt-app:latest
docker push tanmaydevra09/quizhunt-app:latest
```

---

## ☸️ Kubernetes

### Deploy to Cluster

```bash
# Apply Deployment + Service
kubectl apply -f k8s-deployment.yaml

# Verify pods running
kubectl get pods

# Verify all resources
kubectl get deployments,services

# Access the app → http://localhost:30007
```

### Key Operations

```bash
# Detailed pod view (node assignment, IP)
kubectl get pods -o wide

# View pod logs
kubectl logs <pod-name>

# Delete pod → K8s auto-restarts (self-healing demo!)
kubectl delete pod <pod-name>
kubectl get pods -w           # Watch new pod spin up

# Scale to 4 replicas (horizontal scaling demo)
kubectl scale deployment quizhunt-deployment --replicas=4
kubectl get pods              # See 4 pods running

# Scale back to 2
kubectl scale deployment quizhunt-deployment --replicas=2

# Zero-downtime rolling update
kubectl rollout restart deployment quizhunt-deployment
kubectl rollout status deployment quizhunt-deployment

# Tear down
kubectl delete -f k8s-deployment.yaml
```

### Deploy Monitoring Stack on K8s

```bash
kubectl apply -f monitoring/prometheus-config.yaml
kubectl apply -f monitoring/prometheus-deployment.yaml
kubectl apply -f monitoring/prometheus-service.yaml
kubectl apply -f monitoring/grafana-deployment.yaml
kubectl apply -f monitoring/grafana-service.yaml
```

---

## 🏗 Infrastructure — Terraform (IaC)

### Resources Provisioned

| Resource | Details |
|----------|---------|
| EC2 Instance | t3.small, Ubuntu 22.04 LTS |
| AMI | Latest Canonical Ubuntu (auto-fetched) |
| EBS Storage | 20GB gp3 root volume |
| Security Group | Port 22 (SSH), 80 (HTTP), 3000 (alt) |
| Ansible Inventory | Auto-generated with EC2 public IP |

### Commands

```bash
cd terraform

# Step 1: Configure AWS
aws configure   # Enter Access Key, Secret Key, Region (us-east-1)

# Step 2: Setup variables
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars:
#   key_name             = "project"
#   ssh_private_key_path = "/path/to/key.pem"
#   dockerhub_username   = "tanmaydevra09"
#   instance_type        = "t3.small"

# Step 3: Initialize Terraform
terraform init

# Step 4: Preview changes (dry run — no real resources created)
terraform plan

# Step 5: Provision infrastructure
terraform apply

# Step 6: View outputs
terraform output
# instance_public_ip = "x.x.x.x"
# app_url            = "http://x.x.x.x"
# ssh_command        = "ssh -i key.pem ubuntu@x.x.x.x"

# Tear down (avoid AWS charges)
terraform destroy
```

---

## 🔧 Configuration — Ansible

After Terraform provisions EC2, Ansible SSHes into it and configures everything automatically.

### Playbook

```yaml
- name: Deploy QuizHunt Application
  hosts: quizhunt_servers
  become: yes          # Run as sudo
  roles:
    - common           # System updates, prerequisites
    - docker           # Install Docker Engine
    - app              # Pull image from Hub, run container
```

### Role Breakdown

| Role | What It Does |
|------|-------------|
| `common` | `apt update`, install curl, git, python3 |
| `docker` | Install Docker CE, enable service, add user to docker group |
| `app` | `docker pull tanmaydevra09/quizhunt-app:latest`, `docker run -d -p 80:80` |

### Run Ansible

```bash
cd ansible

# Full playbook
ansible-playbook -i inventory.ini playbook.yml

# Dry run (no changes made)
ansible-playbook -i inventory.ini playbook.yml --check

# Run specific role only
ansible-playbook -i inventory.ini playbook.yml --tags docker
```

---

## ⚙️ CI/CD — Jenkins Pipeline

### Pipeline Stages

```
┌─────────────────────────────────────────────────────┐
│  Stage 1: Checkout Code                             │
│    └── git clone from GitHub (checkout scm)         │
├─────────────────────────────────────────────────────┤
│  Stage 2: SonarQube Analysis                        │
│    └── sonar-scanner -Dsonar.projectKey=quizhunt    │
│    └── Reports: bugs, vulnerabilities, code smells  │
├─────────────────────────────────────────────────────┤
│  Stage 3: Build Docker Image                        │
│    └── docker build -t quizhunt-app:latest .        │
├─────────────────────────────────────────────────────┤
│  Stage 4: Deploy to Kubernetes                      │
│    └── kubectl rollout restart deployment           │
│    └── Zero-downtime rolling update                 │
└─────────────────────────────────────────────────────┘
```

### Start Jenkins + SonarQube Locally

```bash
cd jenkins
docker-compose up -d

# Jenkins UI  → http://localhost:8080
# SonarQube   → http://localhost:9000
```

### Required Jenkins Credentials

| ID | Type | Purpose |
|----|------|---------|
| `sonarqube-token` | Secret Text | SonarQube auth |
| `DOCKERHUB_USERNAME` | Secret Text | Docker Hub login |
| `DOCKERHUB_TOKEN` | Secret Text | Docker Hub push |
| `AWS_ACCESS_KEY_ID` | Secret Text | AWS access |
| `AWS_SECRET_ACCESS_KEY` | Secret Text | AWS secret |
| `EC2_SSH_PRIVATE_KEY` | SSH Key | EC2 access |

---

## 📊 Monitoring — Prometheus & Grafana

### Live Metrics Endpoint

The app exposes real-time Prometheus metrics:

```
http://localhost/metrics          (local Node server)
http://localhost:30007/metrics    (Kubernetes NodePort)
http://<EC2_IP>/metrics          (AWS cloud)
```

**Metrics collected:**
- `http_request_duration_seconds` — Request durations (method, route, status)
- `process_cpu_seconds_total` — Node.js CPU usage
- `process_resident_memory_bytes` — Memory usage
- Default Node.js runtime metrics

### Alert Rules

| Alert | Expression | Severity |
|-------|-----------|----------|
| `HighCPUUsage` | `process_cpu_seconds_total > 0.5` for 1m | ⚠️ Warning |
| `AppDown` | `up{job="quizhunt-app"} == 0` for 30s | 🔴 Critical |
| `HighRequestLatency` | p95 latency > 1s for 1m | ⚠️ Warning |

### Access Dashboards

```
Prometheus → http://localhost:9090
Grafana    → http://localhost:3000   (default: admin / admin)
```

---

## 🚀 Full Cloud Deployment

### One-Command

```bash
chmod +x deploy.sh
./deploy.sh
```

### Step-by-Step

```bash
# 1. Configure AWS credentials
aws configure

# 2. Create EC2 key pair
aws ec2 create-key-pair --key-name quizhunt-key \
  --query 'KeyMaterial' --output text > ~/.ssh/quizhunt-key.pem
chmod 400 ~/.ssh/quizhunt-key.pem

# 3. Configure Terraform variables
cd terraform
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your values

# 4. Provision AWS infrastructure
terraform init && terraform plan && terraform apply

# 5. Configure server & deploy app
cd ../ansible
ansible-playbook -i inventory.ini playbook.yml

# 6. Get the app URL
cd ../terraform && terraform output app_url

# 7. Tear down (avoid charges)
terraform destroy
```

---

## 🔐 Environment Variables

| Variable | File | Description |
|----------|------|-------------|
| `aws_region` | `terraform.tfvars` | AWS region (`us-east-1`) |
| `instance_type` | `terraform.tfvars` | EC2 instance (`t3.small`) |
| `key_name` | `terraform.tfvars` | AWS EC2 key pair name |
| `ssh_private_key_path` | `terraform.tfvars` | Path to `.pem` file |
| `dockerhub_username` | `terraform.tfvars` | Docker Hub username |
| `docker_image` | `terraform.tfvars` | Docker image name |

> ⚠️ Never commit `terraform.tfvars` or `.pem` key files — they are in `.gitignore`.

---

## 📈 Performance & Scalability

| Metric | Value |
|--------|-------|
| Container startup | ~2 seconds |
| K8s pod self-heal time | ~5 seconds |
| Horizontal scaling | `kubectl scale --replicas=N` (instant) |
| Zero-downtime deploy | Rolling update via `kubectl rollout` |
| Metrics scrape interval | 15 seconds |
| EC2 instance | t3.small (2 vCPU, 2GB RAM) |
| Storage | 20GB gp3 EBS |
| Active K8s replicas | 2 (High Availability) |

---

## 🤝 Contributing

Want to add quiz questions? See [CONTRIBUTE.md](./CONTRIBUTE.md) for guidelines.

---

<div align="center">
  <strong>Built for developers, by developers. Powered by DevOps. 🚀</strong><br/>
  <sub>Docker · Kubernetes · Jenkins · Terraform · Ansible · AWS · Prometheus · Grafana</sub>
</div>
