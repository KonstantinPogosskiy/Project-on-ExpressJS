import {IProfile} from "../Interfaces/IProfile";
import {IProfilePayload} from "../Interfaces/IProfilePayload";

class ProfileRepository {
    private id: number;
    private profiles: IProfile[];
    constructor() {
        this.id = 1;
        this.profiles = [];
    }

    public createProfile(payload: IProfilePayload): void {
        this.profiles.push({
            profile_id: this.id,
            ...payload,
        });
        this.id = this.id + 1;
    }

    public getProfileById(id: number): IProfile {
        return <IProfile>this.profiles.find((profile) => profile.user_id === id);
    }

    public updateProfile(id: number, firstName?: string, lastName?: string): void {
        this.profiles.forEach(el => {
            if(el.user_id === id) {
                el.firstName = <string>firstName
                el.lastName = <string>lastName
            }
        })
    }

    public checkPassword(password: string): IProfile {
        return <IProfile>this.profiles.find(user => user.password === password);
    }

    public accessToProfile(password: string): IProfile {
        return <IProfile>this.profiles.find(user => user.password === password);
    }
}

export default ProfileRepository;