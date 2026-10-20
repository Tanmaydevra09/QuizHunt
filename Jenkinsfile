pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        APP_NAME        = 'quizhunt-app'
        DOCKERHUB_REPO  = 'tanmaydevra09/quizhunt-app'
        DEPLOYMENT_NAME = 'quizhunt-deployment'
        CONTAINER_NAME  = 'quizhunt'
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
                catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
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
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image for QuizHunt...'
                sh "docker build -t ${DOCKERHUB_REPO}:latest -t ${DOCKERHUB_REPO}:${BUILD_NUMBER} ."
            }
        }

        stage('Push to DockerHub') {
            steps {
                echo 'Pushing Docker image to DockerHub registry...'
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${DOCKERHUB_REPO}:latest
                        docker push ${DOCKERHUB_REPO}:${BUILD_NUMBER}
                        docker logout
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying updated image to production server...'
                sh """
                    docker stop ${APP_NAME} || true
                    docker rm ${APP_NAME} || true
                    docker pull ${DOCKERHUB_REPO}:latest
                    docker run -d --name ${APP_NAME} -p 80:80 ${DOCKERHUB_REPO}:latest
                    echo 'Deployment complete! App running at port 80.'
                """
            }
        }
    }

    post {
        success {
            echo "Deployment successful! Build #${BUILD_NUMBER} is live. Monitoring via Prometheus and Grafana is active."
        }
        failure {
            echo 'Pipeline failed. Please check logs for Docker/Kubernetes/SonarQube errors.'
        }
    }
}