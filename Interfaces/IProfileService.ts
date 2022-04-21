import {IProfile} from "./IProfile";
import {IProfilePayload} from "./IProfilePayload";

export interface IProfileService {
    createProfile(payload: IProfilePayload): void
    updateProfile(id: number, firstName?: string, lastName?: string): void;
    getProfileById(id: number): IProfile;
    accessToProfile(login: string, password: string): IProfile;
    checkPassword(password: string): IProfile;
}