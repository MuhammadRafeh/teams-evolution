FROM node:14.17.6-alpine

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]