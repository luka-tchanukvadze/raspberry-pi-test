#!/bin/bash

# Go to project folder (stop script if it fails)
cd ~/Desktop/projects/raspberry-pi-test || exit

# Get latest code from GitHub
echo "🔄 Pulling latest code..."
git pull

# Restart server with PM2 so new code is loaded
echo "♻️ Restarting server..."
pm2 restart server

echo "✅ Deploy complete"
