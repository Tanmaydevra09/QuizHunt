const cloudQuiz = [
  {
    question: "Which AWS service provides resizable compute capacity in the cloud?",
    options: ["S3", "EC2", "RDS", "Lambda"],
    answer: "EC2"
  },
  {
    question: "What does IaaS stand for?",
    options: [
      "Internet as a Service",
      "Infrastructure as a Service",
      "Integration as a Service",
      "Instances as a Service"
    ],
    answer: "Infrastructure as a Service"
  },
  {
    question: "Which command initializes a Terraform working directory?",
    options: ["terraform start", "terraform init", "terraform apply", "terraform plan"],
    answer: "terraform init"
  },
  {
    question: "What is the purpose of a Dockerfile?",
    options: [
      "To define a CI/CD pipeline",
      "To provision cloud infrastructure",
      "To build a Docker container image",
      "To configure Kubernetes pods"
    ],
    answer: "To build a Docker container image"
  },
  {
    question: "In Kubernetes, what is the smallest deployable unit?",
    options: ["Node", "Cluster", "Pod", "Deployment"],
    answer: "Pod"
  },
  {
    question: "What does kubectl apply -f do?",
    options: [
      "Deletes a Kubernetes resource",
      "Applies a configuration file to the cluster",
      "Scales a deployment",
      "Fetches logs from a pod"
    ],
    answer: "Applies a configuration file to the cluster"
  },
  {
    question: "Which tool is used for configuration management in the QuizHunt DevOps stack?",
    options: ["Chef", "Puppet", "Ansible", "SaltStack"],
    answer: "Ansible"
  },
  {
    question: "What AWS service type is EC2?",
    options: ["SaaS", "PaaS", "IaaS", "FaaS"],
    answer: "IaaS"
  },
  {
    question: "What does CI/CD stand for?",
    options: [
      "Continuous Integration / Continuous Deployment",
      "Cloud Infrastructure / Cloud Deployment",
      "Centralized Integration / Centralized Delivery",
      "Continuous Inspection / Continuous Distribution"
    ],
    answer: "Continuous Integration / Continuous Deployment"
  },
  {
    question: "Which Terraform command shows what changes will be made before applying?",
    options: ["terraform apply", "terraform init", "terraform plan", "terraform validate"],
    answer: "terraform plan"
  },
  {
    question: "What is Docker Hub?",
    options: [
      "A cloud VM service",
      "A registry for Docker container images",
      "A Kubernetes orchestration tool",
      "A CI/CD pipeline tool"
    ],
    answer: "A registry for Docker container images"
  },
  {
    question: "What does a Kubernetes Deployment ensure?",
    options: [
      "Data is persisted across pod restarts",
      "A specified number of pod replicas are always running",
      "Network traffic is encrypted",
      "Containers share the same storage volume"
    ],
    answer: "A specified number of pod replicas are always running"
  },
  {
    question: "In an Ansible playbook, what does 'become: yes' mean?",
    options: [
      "Run tasks interactively",
      "Run tasks with sudo/root privileges",
      "Skip failed tasks",
      "Run tasks in parallel"
    ],
    answer: "Run tasks with sudo/root privileges"
  },
  {
    question: "What port does HTTP traffic use by default?",
    options: ["443", "22", "80", "3000"],
    answer: "80"
  },
  {
    question: "Which Kubernetes object exposes a Deployment to external traffic?",
    options: ["Pod", "ConfigMap", "Service", "Ingress"],
    answer: "Service"
  },
  {
    question: "What is Prometheus used for?",
    options: [
      "Container orchestration",
      "Infrastructure provisioning",
      "Metrics collection and monitoring",
      "Log aggregation"
    ],
    answer: "Metrics collection and monitoring"
  },
  {
    question: "What does 'terraform destroy' do?",
    options: [
      "Deletes the terraform state file",
      "Destroys all infrastructure managed by Terraform",
      "Removes the Terraform binary",
      "Resets provider configuration"
    ],
    answer: "Destroys all infrastructure managed by Terraform"
  },
  {
    question: "Which AWS instance type was used for QuizHunt deployment?",
    options: ["t2.micro", "t3.small", "m5.large", "c5.xlarge"],
    answer: "t3.small"
  },
  {
    question: "What is the role of Grafana in a monitoring stack?",
    options: [
      "Collects metrics from applications",
      "Visualizes metrics data through dashboards",
      "Manages container networking",
      "Provisions cloud resources"
    ],
    answer: "Visualizes metrics data through dashboards"
  },
  {
    question: "Which Kubernetes command scales a deployment to 4 replicas?",
    options: [
      "kubectl set replicas deployment/app 4",
      "kubectl scale deployment app --replicas=4",
      "kubectl update deployment app --count=4",
      "kubectl resize deployment app 4"
    ],
    answer: "kubectl scale deployment app --replicas=4"
  }
];
