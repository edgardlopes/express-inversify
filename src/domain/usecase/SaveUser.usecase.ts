import { inject, injectable } from "inversify";
import { UserRepository } from "../interface/User.repository";
import { User } from "../model/User";

@injectable()
export class SaveUser {
    constructor( @inject("UserRepository") private repository: UserRepository){}

    async execute(user: User): Promise<void> {
        await this.repository.save(user);
    }
}