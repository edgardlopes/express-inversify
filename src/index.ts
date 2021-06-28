import * as bodyParser from 'body-parser';
import "reflect-metadata";
import { InversifyExpressServer } from 'inversify-express-utils';
// import { FooService } from './fooService';
// import { FooServiceImpl } from './fooServiceImpl';
import "./controller/UserController";
import { container } from './inversify.config';
const port = 5000


const server = new InversifyExpressServer(container);
server.setConfig((app) => {
      // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
})

const app = server.build();

export { app }

app.listen(port, () => console.log(`Running on port ${port}`))