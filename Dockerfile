FROM nginx:alpine

# set working directory
RUN apt install nodejs
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g react-scripts
RUN npm install --silent && mv node_modules ../

# Uses port which is used by the actual application
EXPOSE 3000

# start app
CMD ["npm", "start"]