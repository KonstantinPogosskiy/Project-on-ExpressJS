import {IUser} from "./IUser";
import {IUserPayload} from "./IUserPayload";

export interface IUserService {
    createUser(payload: IUserPayload): number;
    getUserById(user_id: number): IUser;
    checkName(userName: string): IUser;
}