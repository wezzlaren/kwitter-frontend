FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN rm -rf node_modules
RUN npm install
RUN rm -rf node_modules
RUN npm install -g react-scripts@3.4.0
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]