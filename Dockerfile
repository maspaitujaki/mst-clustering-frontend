FROM node:16-alpine

ENV BACKEND_API_URL=http://localhost:9000

RUN mkdir /app

COPY . /app

RUN yarn --cwd /app install

CMD ["yarn", "--cwd","/app","start"]