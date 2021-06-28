import { Container } from "inversify";
import { UserRepository } from "./domain/interface/User.repository";
import { SaveUser } from "./domain/usecase/SaveUser.usecase";
import { UserMemoryRepository } from "./repository/UserMemory.repository";

const container = new Container();
// container.bind<FooService>('FooService').to(FooServiceImpl).inSingletonScope()
container.bind<SaveUser>('SaveUser').to(SaveUser)
container.bind<UserRepository>('UserRepository').to(UserMemoryRepository).inSingletonScope()

export { container };