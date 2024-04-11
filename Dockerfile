FROM node:18-alpine

WORKDIR /code

COPY ./package.json ./package.json

RUN npm install --loglevel warn --unsafe-perm

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]