FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY server.js ./

EXPOSE 8002

CMD ["npm", "start"]