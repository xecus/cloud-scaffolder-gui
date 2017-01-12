
FROM node:7.4.0

WORKDIR /app
COPY . /app

RUN npm install

# You should not
EXPOSE 8080
CMD npm run dev
