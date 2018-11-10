# livechat-apollo

## getting started
This project is using a prisma database to have a rapid prototyping backend

### Spinup Backend (DB)
  1. make sure you have [docker](https://www.docker.com) installed
  2. install prisma globally `yarn global add prisma` or `npm i -g prisma`
  3. Spinup database and prototyping backend `cd db && prisma deploy`
  4. Check if Backend is online under `localhost:4422`
  
### Spinup Frontend
  1. make sure you have [Node](https://nodejs.org) installed
  2. install project dependencies `cd web && yarn` or `cd web && npm i`
  3. Spinup frontend `yarn start` or `npm start`
  4. App should be accessable under `localhost:3000`
