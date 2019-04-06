sudo docker build -t rend-system/src .
sudo docker run -it -p 8080:8080 --rm --name src1 rent-system/src
