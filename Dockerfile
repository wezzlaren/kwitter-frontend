FROM node:13.12.0-alpine

# set working directory
RUN apk update
RUN apk upgrade
RUN apk add bash
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent && mv node_modules ../

# Uses port which is used by the actual application
EXPOSE 3000

# start app
CMD ["npm", "start"]