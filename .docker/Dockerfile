FROM node:16-alpine

RUN npm install -g nodemon ts-node
RUN npm install -g typescript

WORKDIR /code

CMD [ "tsc", "--watch" ]