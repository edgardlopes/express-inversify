import * as bodyParser from 'body-parser';
import express from 'express'
import "reflect-metadata";
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils';
// import { FooService } from './fooService';
// import { FooServiceImpl } from './fooServiceImpl';
import "./controller/UserController";

import { TYPES } from './types';
import { SaveUser } from './domain/usecase/SaveUser.usecase';
import { UserRepository } from './domain/interface/User.repository';
import { UserMemoryRepository } from './repository/UserMemory.repository';
const port = 5000

const container = new Container();
// container.bind<FooService>('FooService').to(FooServiceImpl).inSingletonScope()
container.bind<SaveUser>('SaveUser').to(SaveUser)
container.bind<UserRepository>('UserRepository').to(UserMemoryRepository).inSingletonScope()

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
      // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
})


const app = server.build();


export {app}

app.listen(port, () => console.log(`Running on port ${port}`))