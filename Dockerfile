FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install @react-icons/all-files
RUN npm install next-auth
RUN npm install firebase
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]