FROM node:18
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3210
USER node
CMD ["node", "-r", "newrelic", "index.js"]