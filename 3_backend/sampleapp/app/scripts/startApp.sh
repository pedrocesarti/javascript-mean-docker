#!/bin/bash 

cd /app
npm install
/app/node_modules/pm2/bin/pm2 start index.js
