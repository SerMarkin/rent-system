#!/bin/bash
# This is a comment
git pull
sudo npm run build
sudo rm -rf /var/www/html/*
sudo mv ./dist/* /var/www/html/
sudo /etc/init.d/apache2 restart
