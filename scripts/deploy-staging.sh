#!/bin/bash

# Configuration
STAGING_IP="10.0.0.5"
APP_NAME="portfolio"
IMAGE_NAME="portfolio-staging"
DEPLOY_DIR="~/deploy-portfolio"

echo "🚀 Starting deployment to staging ($STAGING_IP)..."

# 1. Build the image locally
echo "🏗️ Building Docker image..."
docker build -t $IMAGE_NAME .

# 2. Prepare the staging server
echo "📁 Preparing staging server..."
ssh $STAGING_IP "mkdir -p $DEPLOY_DIR"
scp docker-compose.staging.yml $STAGING_IP:$DEPLOY_DIR/docker-compose.yml

# 3. Transfer and Load the image
echo "🚚 Transferring image (this might take a while)..."
docker save $IMAGE_NAME | ssh $STAGING_IP "docker load"

# 4. Restart the service
echo "🔄 Restarting service on staging..."
ssh $STAGING_IP "cd $DEPLOY_DIR && docker compose up -d --force-recreate"

echo "✅ Deployment complete!"
echo "Check it out at http://$STAGING_IP:3000"
