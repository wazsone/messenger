FROM node:12 

COPY . ./

RUN npm ci && npm install typescript -g

EXPOSE 4000

CMD npm run build:prod && tsc /server.ts --outDir /dist && node /dist/server.js