const quizData = [
  {
    question: "Which AWS service provides resizable compute capacity in the cloud?",
    a: "S3",
    b: "EC2",
    c: "RDS",
    d: "Lambda",
    correct: "b",
    explanation: "EC2 (Elastic Compute Cloud) provides scalable, resizable compute capacity in the AWS cloud, letting you launch virtual servers on demand."
  },
  {
    question: "What does IaaS stand for?",
    a: "Internet as a Service",
    b: "Infrastructure as a Service",
    c: "Integration as a Service",
    d: "Instances as a Service",
    correct: "b",
    explanation: "IaaS stands for Infrastructure as a Service — a cloud model where the provider manages hardware, storage, and networking while users manage the OS and applications."
  },
  {
    question: "Which command initializes a Terraform working directory?",
    a: "terraform start",
    b: "terraform apply",
    c: "terraform init",
    d: "terraform plan",
    correct: "c",
    explanation: "'terraform init' downloads required provider plugins and initializes the backend, preparing the working directory for use."
  },
  {
    question: "What is the purpose of a Dockerfile?",
    a: "To define a CI/CD pipeline",
    b: "To provision cloud infrastructure",
    c: "To configure Kubernetes pods",
    d: "To build a Docker container image",
    correct: "d",
    explanation: "A Dockerfile is a text script containing instructions for assembling a Docker image layer by layer."
  },
  {
    question: "In Kubernetes, what is the smallest deployable unit?",
    a: "Node",
    b: "Cluster",
    c: "Pod",
    d: "Deployment",
    correct: "c",
    explanation: "A Pod is the smallest deployable unit in Kubernetes. It can hold one or more tightly coupled containers sharing the same network namespace."
  },
  {
    question: "What does 'kubectl apply -f <file>' do?",
    a: "Deletes a Kubernetes resource",
    b: "Applies a configuration file to the cluster",
    c: "Scales a deployment",
    d: "Fetches logs from a pod",
    correct: "b",
    explanation: "'kubectl apply -f' reads a YAML/JSON manifest and creates or updates the described Kubernetes resources in the cluster."
  },
  {
    question: "Which tool is used for configuration management in the QuizHunt DevOps stack?",
    a: "Chef",
    b: "Puppet",
    c: "SaltStack",
    d: "Ansible",
    correct: "d",
    explanation: "Ansible is an agentless configuration-management and automation tool that uses YAML playbooks to provision and configure systems."
  },
  {
    question: "What AWS service type is EC2?",
    a: "SaaS",
    b: "PaaS",
    c: "IaaS",
    d: "FaaS",
    correct: "c",
    explanation: "EC2 is an IaaS offering — AWS manages the physical hardware and hypervisor, while you manage the virtual machine OS and above."
  },
  {
    question: "What does CI/CD stand for?",
    a: "Cloud Infrastructure / Cloud Deployment",
    b: "Continuous Integration / Continuous Deployment",
    c: "Centralized Integration / Centralized Delivery",
    d: "Continuous Inspection / Continuous Distribution",
    correct: "b",
    explanation: "CI/CD automates the build, test, and release process. Continuous Integration merges code frequently; Continuous Deployment ships it automatically."
  },
  {
    question: "Which Terraform command shows what changes will be made before applying?",
    a: "terraform apply",
    b: "terraform init",
    c: "terraform validate",
    d: "terraform plan",
    correct: "d",
    explanation: "'terraform plan' performs a dry-run and shows an execution plan of what Terraform intends to add, change, or destroy."
  },
  {
    question: "What is Docker Hub?",
    a: "A cloud VM service",
    b: "A Kubernetes orchestration tool",
    c: "A registry for Docker container images",
    d: "A CI/CD pipeline tool",
    correct: "c",
    explanation: "Docker Hub is a cloud-based registry where developers store, share, and pull Docker images publicly or privately."
  },
  {
    question: "What does a Kubernetes Deployment ensure?",
    a: "Data is persisted across pod restarts",
    b: "A specified number of pod replicas are always running",
    c: "Network traffic is encrypted",
    d: "Containers share the same storage volume",
    correct: "b",
    explanation: "A Deployment controller continuously watches the cluster and reconciles the actual replica count to match the desired state."
  },
  {
    question: "In an Ansible playbook, what does 'become: yes' mean?",
    a: "Run tasks interactively",
    b: "Skip failed tasks",
    c: "Run tasks with sudo/root privileges",
    d: "Run tasks in parallel",
    correct: "c",
    explanation: "'become: yes' tells Ansible to use privilege escalation (e.g., sudo) when executing tasks on the remote host."
  },
  {
    question: "What port does HTTP traffic use by default?",
    a: "443",
    b: "22",
    c: "3000",
    d: "80",
    correct: "d",
    explanation: "HTTP uses TCP port 80 by default. HTTPS uses port 443. Port 22 is SSH and port 3000 is a common development server port."
  },
  {
    question: "Which Kubernetes object exposes a Deployment to external traffic?",
    a: "Pod",
    b: "ConfigMap",
    c: "Service",
    d: "Ingress",
    correct: "c",
    explanation: "A Kubernetes Service provides a stable endpoint and load-balances traffic to a set of pods, exposing them inside or outside the cluster."
  },
  {
    question: "What is Prometheus used for?",
    a: "Container orchestration",
    b: "Infrastructure provisioning",
    c: "Metrics collection and monitoring",
    d: "Log aggregation",
    correct: "c",
    explanation: "Prometheus is an open-source monitoring system that scrapes and stores time-series metrics, often paired with Grafana for visualisation."
  },
  {
    question: "What does 'terraform destroy' do?",
    a: "Deletes the terraform state file",
    b: "Destroys all infrastructure managed by Terraform",
    c: "Removes the Terraform binary",
    d: "Resets provider configuration",
    correct: "b",
    explanation: "'terraform destroy' tears down every resource tracked in the state file, the reverse of 'terraform apply'."
  },
  {
    question: "Which AWS instance type was used for the QuizHunt deployment?",
    a: "t2.micro",
    b: "t3.small",
    c: "m5.large",
    d: "c5.xlarge",
    correct: "b",
    explanation: "QuizHunt was deployed on a t3.small EC2 instance — a burstable compute type well-suited for lightweight web applications."
  },
  {
    question: "What is the role of Grafana in a monitoring stack?",
    a: "Collects metrics from applications",
    b: "Manages container networking",
    c: "Provisions cloud resources",
    d: "Visualizes metrics data through dashboards",
    correct: "d",
    explanation: "Grafana is an open-source analytics and visualization platform that reads from data sources like Prometheus to render rich, interactive dashboards."
  },
  {
    question: "Which kubectl command scales a deployment to 4 replicas?",
    a: "kubectl set replicas deployment/app 4",
    b: "kubectl update deployment app --count=4",
    c: "kubectl scale deployment app --replicas=4",
    d: "kubectl resize deployment app 4",
    correct: "c",
    explanation: "'kubectl scale deployment <name> --replicas=<n>' updates the Deployment's desired replica count, and the controller reconciles the actual pods."
  }
];
