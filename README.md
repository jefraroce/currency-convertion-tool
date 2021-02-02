# Currency Convertion APP

Application to convert colombian pesos to united states dollars.

## Run locally with Docker

```shell
cd currency-convertion-tool
docker-compose up
```

This will be turned on on localhost:3000 by default

## Run locally without Docker

1. First you need to enable a mongodb server instance on the localhost:27017 or set the path to it at `server/config.js` file.

2. You have to turn on the Server App on put it on localhost:3001 port

```shell
cd currency-convertion-tool/server
npm install
node index.js
```

This will be turned on on localhost:3001 by default

3. Finally you have to turn on the Front App

```shell
cd currency-convertion-tool/gui
npm install
npm run start
```

This will be turned on on localhost:3000 by default
