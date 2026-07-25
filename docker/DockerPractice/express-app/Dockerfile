FROM node:22

WORKDIR /app

COPY package*.json .

RUN npm ci express@4.19.2 body-parser@1.20.2

COPY src/index.js index.js

EXPOSE 3000

CMD ["node", "index.js"]