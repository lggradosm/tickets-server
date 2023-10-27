FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

RUN npm install

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm","start"]