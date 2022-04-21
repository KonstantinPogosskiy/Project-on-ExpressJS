import {IPostLike} from "../Interfaces/IPostLike";
import {IPostLikePayload} from "../Interfaces/IPostLikePayload";

class PostLikeRepository {
    private likes: IPostLike[];
    constructor() {
        this.likes = [];
    }

    public addLike(payload: IPostLikePayload): void {
        this.likes.push({
            ...payload,
        });
    }

    public removeLike(payload: IPostLikePayload): void {
        const index = this.likes.findIndex(p => p.user_id === payload.user_id);
        if (index !== -1) {
            this.likes.splice(index, 1);
        }
    }

    public getLikesPostById(id: number): IPostLike {
        return <IPostLike><unknown>this.likes.filter(like => like.user_id === id)
    }
}

export default PostLikeRepository;