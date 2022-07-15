# How to build an image

In order to build an image, run the following commands

### Build the image using the following commands

```bash
docker build .
```

docker build . - build docker from the current directory - where dockerfile resides

#FROM reactnativecommunity/react-native-android
#COPY . /app
#WORKDIR /app
#CMD node app/app.js

#!------ ORDER OF THE FOLLOWING LINES OF CODE MATTERS!! DO NOT CHANGE THE ORDER ------------!#

##FROM node:12.0.0
##WORKDIR /app
#Copy the contents of the package file into the image in the /app directory in the container
#package.json is in the same directory as the docker file  
##COPY package.json /app
#Install all the packages in the container
##RUN npm install
#Copy all the files into the /app directory in the container
##COPY . /app
#Expose the port the app is running from
##EXPOSE 3000
#CMD ["node","--openssl-legacy-provider", "./node_modules/.bin/gatsby", "build"]
##CMD ["npm","ci"]
##CMD ["npm","run","start"]

#Pulling node image from docker hub
FROM node:14.1-alpine AS builder
#Set the working directory of the container - /opt/web directory exists in the container
WORKDIR /opt/web

COPY package.json package-lock.json ./
RUN npm install
RUN npx browserslist@latest --update-db
RUN npm install react-select
RUN npm install reactstrap
RUN npm i react-bootstrap@0.33.1

ENV PATH="./node_modules/.bin:$PATH"

COPY . .
RUN npm run build

CMD ["npm","run","start"]

# How to build an image

## Pre-Requisites

    1. Install docker
        1. Windows - https://docs.docker.com/desktop/windows/install/
        2. Mac Book - https://docs.docker.com/desktop/mac/install/
    2. Login
        ```bash
        docker login --username pramah2022 --password Success@2022
        ```

## Building the image

Only continue with this step after completing the pre-requisites

### Build the image using the following commands

```bash
docker build -t jipe-web .
```

The above command builds docker from the current directory - where dockerfile resides and names the image as jipe-web-app

## Running the image as a container

Before running docker image as a container, obtain the docker image by running the command below

```bash
docker image ls
```

Take a note of the image ID

Run the following command to run the container. Monitor terminal output for a successful run

```bash
docker run -it -p 3000:3000 image-id-from-above
```

The above command runs the container in the interactive mode and the -p flag dictates the port we are going to be sending traffict to.

```bash
docker run -d -p 3000:3000 --name jipe-web-application image-id-from-above
```

The above commands runs the container in the background and prints the container id. -p flag dictates the port we are going to be sending traffic to. From the port on the local machine to the port on the container.

Run the following on your web browser and the application should be up - http://localhost:3000/

##
