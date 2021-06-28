import "reflect-metadata";
import { cleanUpMetadata } from "inversify-express-utils";
import supertest from "supertest";

import { app } from "../index";


describe('UserController UnitTest', () => {
    
    beforeEach((done) => {
        cleanUpMetadata();
        done();
    });

    it("should work for async controller methods", (done) => {
        
        supertest(app)
            .post("/users")
            .send({name: "edgard", age: 25})
            .expect(201, "Created", done);

    });
})