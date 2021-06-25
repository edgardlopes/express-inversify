import { injectable } from "inversify";
import { User } from "../domain/model/User";
import { UserRepository } from "../domain/interface/User.repository";

@injectable()
export class UserMemoryRepository implements UserRepository {
    constructor(private users: User[] = []) {}

    save(user: User): Promise<void> {
        console.log(this.users)
        this.users.push(user);
        return;
    }

}