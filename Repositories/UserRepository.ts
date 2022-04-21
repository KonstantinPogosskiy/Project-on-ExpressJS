import {IUser} from "../Interfaces/IUser";
import {IUserPayload} from "../Interfaces/IUserPayload";

class UserRepository {
    private id: number;
    users: IUser[];
    constructor() {
        this.id = 1;
        this.users = [];
    }

    public createUser(payload: IUserPayload): number {
        const userId = this.id
        this.users.push({
            user_id: userId,
            ...payload,
        });
        this.id = this.id + 1;
        return userId
    }

    public getUserById(id: number): IUser {
        return <IUser>this.users.find(user => user.user_id === id);
    }

    public checkName(login: string): IUser {
        return <IUser>this.users.find(user => user.userName === login);
    }
}

export default UserRepository;



