pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        APP_NAME = 'quizhunt-app'
        DEPLOYMENT_NAME = 'quizhunt-deployment'
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Checking out QuizHunt repository from GitHub...'
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Running static code analysis using SonarQube...'
                
                withSonarQubeEnv('SonarQube') {
                    withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
                        script {
                            def scannerHome = tool 'SonarScanner'

                            sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=quizhunt \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://host.docker.internal:9000 \
                            -Dsonar.login=${SONAR_TOKEN}
                            """
                        }
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image for QuizHunt...'
                sh "docker build -t ${APP_NAME}:latest ."
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Deploying updated image to Kubernetes cluster...'
                sh "kubectl rollout restart deployment ${DEPLOYMENT_NAME}"
            }
        }
    }

    post {
        success {
            echo 'Deployment successful! Monitoring via Prometheus and Grafana is active.'
        }
        failure {
            echo 'Pipeline failed. Please check logs for Docker/Kubernetes/SonarQube errors.'
        }
    }
}