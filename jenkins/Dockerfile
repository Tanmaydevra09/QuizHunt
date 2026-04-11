FROM jenkins/jenkins:lts

# Drop permissions to execute root installations natively
USER root

# Clean out keys and install prerequisite systems
RUN apt-get update && \
    apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    docker.io

# Fetch explicit kubectl binary mapped from identical stable streams
RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && \
    chmod +x kubectl && \
    mv kubectl /usr/local/bin/

# We'll maintain `USER root` explicitly within the container so that mapping the Desktop mac OS `.kube` logic 
# and passing `.sock` protocols avoids obscure permission blocks when interacting internally from the Node!
