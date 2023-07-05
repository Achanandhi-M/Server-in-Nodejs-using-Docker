FROM node:18

WORKDIR /home/achanandhi/Server-in-Nodejs


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]














