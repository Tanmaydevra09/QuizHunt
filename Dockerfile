FROM node:18-alpine

WORKDIR /app

# Install dependencies exclusively 
COPY package*.json ./
RUN npm install

# Bind all frontend static assets and server logic
COPY . .

# Expose HTTP port seamlessly matching service node mappings
EXPOSE 80

# Execute server dynamically linking telemetry metrics
CMD ["node", "server.js"]
