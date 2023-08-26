FROM node:10.24.1-alpine3.11 AS build

WORKDIR /app/

RUN npm install -g @angular/cli@^7.3.10

COPY package*.json ./

RUN npm i

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
