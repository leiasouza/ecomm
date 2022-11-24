FROM node

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]
