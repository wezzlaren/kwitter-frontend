FROM node:13.12.0-alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@3.4.0 -g

COPY . /usr/src/app

RUN npm run build

# Uses port which is used by the actual application
EXPOSE 80 443 3000

# start app
CMD ["npm", "start"]