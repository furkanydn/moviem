FROM node:12.18-alpine
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . .
CMD ["yarn", "run", "start"]
