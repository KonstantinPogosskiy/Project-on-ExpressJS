import {IAuthorizationService} from "../Interfaces/IAuthorizationService";
import {IUserPayload} from "../Interfaces/IUserPayload";
import UserRepository from "../Repositories/UserRepository";
import ProfileRepository from "../Repositories/ProfileRepository";
import UserService from "./UserService";
import ProfileService from "./ProfileService";
import {IAuthorization} from "../Interfaces/IAuthorization";
import {IProfile} from "../Interfaces/IProfile";

class AuthorizationService implements IAuthorizationService {
    private readonly userRepository: UserRepository;
    private readonly profileRepository: ProfileRepository;
    private readonly userService;
    private readonly profileService;
    constructor() {
        this.userRepository = new UserRepository;
        this.profileRepository = new ProfileRepository;
        this.userService = UserService;
        this.profileService = ProfileService;
    };

    public singIn(auth: IAuthorization): IProfile | string {
        const login = this.userService.checkName(auth.login)
        const password = this.profileService.checkPassword(auth.password)
        console.log(login, password)
        if(login.userName === auth.login && password.password === auth.password) {
            return this.profileService.accessToProfile(password.password);
        } else {
            return "Profile not found"
        }
    };

    public singUp(payload: IUserPayload): void {
        this.userService.createUser(payload);
    };

    // public logOut(user_id: number): void {
    //
    // };
}

export default new AuthorizationService();