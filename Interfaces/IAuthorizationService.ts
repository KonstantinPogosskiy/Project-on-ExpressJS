import {IUserPayload} from "./IUserPayload";
import {IAuthorization} from "./IAuthorization";
import {IProfile} from "./IProfile";

export interface IAuthorizationService {
    singIn(auth: IAuthorization): IProfile | string;
    singUp(payload: IUserPayload): void;
    // logOut(user_id: number): void;
}