FROM node:10.24.1-alpine3.11 AS build

WORKDIR /app/

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build --prod

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
