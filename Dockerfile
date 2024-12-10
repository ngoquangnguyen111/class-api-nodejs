FROM node:18.1-alpine

ENV PORT=3000

COPY . /home/nodejs

WORKDIR /home/nodejs

RUN npm install

EXPOSE 3001

CMD ["node", "src/server.js"]