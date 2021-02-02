FROM node:14.15.4

COPY [ "./package.json", "./package-lock.json", "/src/usr/" ]

WORKDIR /usr/src

RUN npm install

COPY ["./", "/usr/src/"]

EXPOSE 3000

CMD ["npm", "run", "start"]
