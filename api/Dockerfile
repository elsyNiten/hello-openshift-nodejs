FROM bitnami/node:8

COPY package.json ./package.json

RUN npm install npm@5.3.0 -g
RUN npm install --production

COPY . .

CMD npm start
