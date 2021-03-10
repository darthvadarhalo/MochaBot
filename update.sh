#!/bin/bash

# Load nvm
. ~/.nvm/nvm.sh

# Run update
nvm use
git pull
cd backend
rm -rf dist node_modules
npm ci
npm run migrate-dev
npm run build
cd ../dashboard
rm -rf dist node_modules
npm ci
npm run build
cd ..
pm2 restart process-api.json
pm2 restart process-bot.json
