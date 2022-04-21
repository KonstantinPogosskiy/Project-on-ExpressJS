import {IPost} from "./IPost";
import {IPostPhotoPayload} from "./IPostPhotoPayload";
import {IPostPayload} from "./IPostPayload";

export interface IPostService {
    createPost(payload: IPostPayload): number;
    getPostById(post_id: number): IPost;
    changePost(post_id: number, title?: string, description?: string): void;
    deletePost(post_id: number): void;
    addPhoto(payload: IPostPhotoPayload): void;
    // editPostPhoto(post_id: number, dimension: number): void;
}