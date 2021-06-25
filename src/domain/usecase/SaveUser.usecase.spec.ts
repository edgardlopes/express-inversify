import { SaveUser } from "./SaveUser.usecase";
import { UserRepository } from "../interface/User.repository";
import { User } from "../model/User";

describe('SaveUser.usecase UnitTest', () => {
    const setup = () => {
        const repository: UserRepository = {
            save: jest.fn()
        };
        const usecase = new SaveUser(repository);

        return {repository, usecase};
    }
    
    it('Deve chamar o repository uma vez', () => {

        const { usecase, repository } = setup();

        const user: User = {
            name: 'cris ronaldo',
            age: 35
        };

        usecase.execute(user);

        expect(repository.save).toHaveBeenCalledTimes(1);
        
    });

    it('Deve chamar o repository com o usuario corretamente', () => {

        const { usecase, repository } = setup();

        const user: User = {
            name: 'cris ronaldo',
            age: 35
        };

        usecase.execute(user);

        expect(repository.save).toHaveBeenCalledWith({
            name: 'cris ronaldo',
            age: 35
        });

    });
});
