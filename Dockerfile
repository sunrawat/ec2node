FROM node:14.17.3
RUN mkdir /usr/src/Backend
WORKDIR /usr/src/Backend
COPY package.json /usr/src/Backend/
RUN npm install
COPY . /usr/src/Backend/
EXPOSE 3000
CMD ["npm", "start"]
