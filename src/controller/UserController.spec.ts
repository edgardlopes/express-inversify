import "reflect-metadata";
import { Container } from "inversify";
import { cleanUpMetadata, InversifyExpressServer } from "inversify-express-utils";
import supertest from "supertest";
import "./UserController";


describe('UserController UnitTest', () => {
    
    beforeEach((done) => {
        cleanUpMetadata();
        done();
    });
    
    it("should work for async controller methods", (done) => {

        let server: InversifyExpressServer;
        let container: Container = new Container();
        server = new InversifyExpressServer(container);


        supertest(server.build())
            .get("/users")
            .expect(200, "GET", done);
    });
})