import {IPostLikePayload} from "./IPostLikePayload";
import {IPostLike} from "./IPostLike";

export interface IPostLikeService {
    addLike(payload: IPostLikePayload): void;
    removeLike(payload: IPostLikePayload): void;
    getLikesPostById(id: number): IPostLike;
}