# 🐳 QuizHunt: Docker & Kubernetes Implementation

This guide explains how we have modernized **QuizHunt** by containerizing it with Docker and preparing it for cloud-scale orchestration using Kubernetes.

## 1. Dockerization (The Image)
We created a `Dockerfile` that uses an industry-standard **Nginx** server to host the quiz platform. This makes the app portable—it will run exactly the same on any machine.

### Key Files Created:
- **`Dockerfile`**: Instructions to build the container image.
- **`.dockerignore`**: Ensures only necessary code is sent to the image (keeping it fast and small).

### 🚀 How to Run in Docker:
1. Open a terminal in the project folder.
2. Build the image:
   ```bash
   docker build -t quizhunt-app .
   ```
3. Run the container:
   ```bash
   docker run -d -p 8080:80 --name quizhunt-container quizhunt-app
   ```
4. Access at: `http://localhost:8080`

---

## 2. Kubernetes Orchestration (Scaling)
To show "production-ready" implementation, we've created a Kubernetes manifest. This handles:
- **Self-healing**: If a container crashes, Kubernetes restarts it.
- **Scaling**: We have configured **2 replicas** (instances) of the app.
- **Load Balancing**: The `Service` distributes traffic between the instances.

### Key File Created:
- **`k8s-deployment.yaml`**: Defines the deployment strategy and networking.

### 🎡 How to Deploy to K8s:
1. Ensure your Kubernetes cluster (like Docker Desktop K8s or Minikube) is running.
2. Apply the configuration:
   ```bash
   kubectl apply -f k8s-deployment.yaml
   ```
3. Check the status:
   ```bash
   kubectl get pods
   kubectl get service quizhunt-service
   ```
4. The app will be available at port **30007** on your machine.

---

## 💡 What this shows your Mam:
1. **Modern DevOps Workflow**: Moving from a simple folder of HTML files to a containerized microservice.
2. **Infrastructure as Code (IaC)**: Using YAML files to define exactly how the website should be hosted.
3. **Scalability**: Demonstrating how the app can handle more users by simply changing the `replicas` number in the YAML.
