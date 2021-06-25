import { User } from "../model/User";

export interface UserRepository {
    save(user: User): Promise<void>;
}