FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm","start"]