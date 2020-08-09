# Use alpine linux with node (11.15.0)
FROM node:11.15.0-alpine

# working directory is /app in container
WORKDIR /app

# add node_modules to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]
