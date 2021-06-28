import * as express from "express";
import { interfaces, controller, httpPost, response, requestBody } from "inversify-express-utils";
import { inject } from "inversify";
import { SaveUser } from "../domain/usecase/SaveUser.usecase";
import { User } from "../domain/model/User";

@controller("/users")
export class SaveUserController implements interfaces.Controller {

    constructor(@inject("SaveUser") private saveUser: SaveUser ) {}

    @httpPost("/")
    async create(@requestBody() user: User, @response() res: express.Response): Promise<void> {
        try {
            await this.saveUser.execute(user);
            res.sendStatus(201);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

}