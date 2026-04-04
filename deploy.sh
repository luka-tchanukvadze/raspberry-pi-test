#!/bin/bash
cd ~/Desktop/projects/raspberry-pi-test || exit

while true
do
  git pull
  pm2 restart server
  sleep 10
done
