import  {IProfile} from "../Interfaces/IProfile";
import {IProfileService} from "../Interfaces/IProfileService";
import {IProfilePayload} from "../Interfaces/IProfilePayload";
import ProfileRepository from "../Repositories/ProfileRepository";
import {mailOptions, transporter} from "../nodemailler";

class ProfileService implements IProfileService {
    private readonly profileRepository: ProfileRepository;
    constructor() {
        this.profileRepository = new ProfileRepository;
    }

    public createProfile(payload: IProfilePayload): void {
        this.profileRepository.createProfile(payload);
    }

    public getProfileById(id: number): IProfile {
        return this.profileRepository.getProfileById(id);
    }

    public updateProfile(id: number, firstName?: string, lastName?: string): void {
        this.profileRepository.updateProfile(id, firstName, lastName);
        const profile = this.profileRepository.getProfileById(id)
        mailOptions.to = profile.email
        mailOptions.text = "Your profile was changed"
        transporter.sendMail(mailOptions, function (err: any, info: any) {
            if(err)
                console.log(err)
            else
                console.log(info);
        });
    };

    public checkPassword(password: string): IProfile {
        return this.profileRepository.checkPassword(password);
    };

    public accessToProfile(password: string): IProfile {
        return this.profileRepository.accessToProfile(password)
    }
}

export default new ProfileService();