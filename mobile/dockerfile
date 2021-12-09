FROM node:14-alpine

WORKDIR /app/

COPY ./app.json .
COPY ./package.json .
COPY ./yarn.lock .

RUN yarn
RUN yarn global add expo-cli


COPY . .

CMD ["yarn", "start:server"]

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002