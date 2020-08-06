FROM node:12 

COPY . /

RUN npm ci --production

EXPOSE 4000

CMD node /dist/server.js