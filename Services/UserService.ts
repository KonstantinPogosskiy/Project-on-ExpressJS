import {IUser} from "../Interfaces/IUser";
import {IUserService} from "../Interfaces/IUserService";
import UserRepository from "../Repositories/UserRepository";
import {IUserPayload} from "../Interfaces/IUserPayload";

class UserService implements IUserService {
    private readonly userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository;
    }

    public createUser(payload: IUserPayload): number {
        return this.userRepository.createUser(payload);
    }

    public getUserById(id: number): IUser {
        return this.userRepository.getUserById(id);
    }

    public checkName(login: string): IUser {
        return <IUser>this.userRepository.checkName(login)
    }
}

export default new UserService();