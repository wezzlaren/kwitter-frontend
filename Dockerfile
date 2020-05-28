FROM nginx:alpine

# set working directory

RUN apt-get update
RUN apt-get install -qq curl

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 8.4.0

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz"

RUN tar -zxvf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 \
    && rm "node-v$NODE_VERSION-linux-x64.tar.gz" \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs

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
# RUN npm install -g react-scripts
# RUN npm install --silent && mv node_modules ../

# Uses port which is used by the actual application
EXPOSE 3000

# start app
CMD ["npm", "start"]