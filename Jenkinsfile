pipeline {
    agent any

    environment {
        APP_NAME = 'quizhunt-app'
        DEPLOYMENT_NAME = 'quizhunt-deployment'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out QuizHunt repository natively from GitHub...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Dynamically mapping container layers natively (Node.js & Telemetry)...'
                // Rebuilds caching explicitly 
                sh "docker build -t ${APP_NAME}:latest ."
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Connecting securely mapping existing cluster parameters...'
                // Pings the active Kubernetes Daemon natively issuing a zero-downtime deployment rollout
                sh "kubectl rollout restart deployment ${DEPLOYMENT_NAME}"
            }
        }
    }

    post {
        success {
            echo 'Deployment mapped natively! Prometheus and Grafana dynamically tracking new rollout constraints.'
        }
        failure {
            echo 'Pipeline execution failure. Review Docker Daemon mapping or Kubernetes configurations locally.'
        }
    }
}
