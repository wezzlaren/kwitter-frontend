FROM node:13.12.0-alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN rm -rf build || true
ONBUILD COPY ./package.json /usr/src/app
ONBUILD RUN npm install

ONBUILD COPY ./public /usr/src/app/public
ONBUILD COPY ./src /usr/src/app/src
ONBUILD RUN npm run build
# COPY /src /app/src
# COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g react-scripts
RUN npm install --silent && mv node_modules ../

# Uses port which is used by the actual application
EXPOSE 3000

# start app
CMD ["npm", "start"]