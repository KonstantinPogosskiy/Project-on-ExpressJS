import {IPostLikeService} from "../Interfaces/IPostLikeService";
import PostLikeRepository from "../Repositories/PostLikeRepository";
import {IPostLikePayload} from "../Interfaces/IPostLikePayload";
import {IPostLike} from "../Interfaces/IPostLike";
import {mailOptions, transporter} from "../nodemailler";
import ProfileService from "./ProfileService";

class PostLikeService implements IPostLikeService {
    private readonly postLikeRepository: PostLikeRepository;
    private readonly profileService;
    constructor() {
        this.postLikeRepository = new PostLikeRepository;
        this.profileService = ProfileService;
    };

    public addLike(payload: IPostLikePayload): void {
        this.postLikeRepository.addLike(payload)
        const profile = this.profileService.getProfileById(payload.user_id)
        mailOptions.to = profile.email
        mailOptions.text = "You have a new like"
        transporter.sendMail(mailOptions, function (err: any, info: any) {
            if(err)
                console.log(err)
            else
                console.log(info);
        });
    };

    public removeLike(payload: IPostLikePayload): void {
        this.postLikeRepository.removeLike(payload)
    };

    public getLikesPostById (id: number): IPostLike {
        return this.postLikeRepository.getLikesPostById(id)
    }
}

export default new PostLikeService();