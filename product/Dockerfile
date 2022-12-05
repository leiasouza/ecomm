FROM node

WORKDIR /app

RUN npm config set strict-ssl=false

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

ENTRYPOINT npm start
