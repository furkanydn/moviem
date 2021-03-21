FROM node:12.18-alpine
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm cache clean --force && rm -rf node_modules && npm install
COPY . .
EXPOSE 3000:3000
CMD ["npm", "start", "production"]
