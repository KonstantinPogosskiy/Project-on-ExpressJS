import {IPost} from "../Interfaces/IPost";
import {IPostService} from "../Interfaces/IPostService";
import PostRepository from "../Repositories/PostRepository";
import {IPostPayload} from "../Interfaces/IPostPayload";
import {PostPhotoRepository} from "../Repositories/PostPhotoRepository";
import {IPostPhotoPayload} from "../Interfaces/IPostPhotoPayload";

class PostService implements IPostService {
    private readonly postRepository: PostRepository;
    private readonly postPhotoRepository: PostPhotoRepository;
    constructor() {
        this.postRepository = new PostRepository;
        this.postPhotoRepository = new PostPhotoRepository;
    };

    public createPost(payload: IPostPayload): number {
        return this.postRepository.createPost(payload);
    };

    public getPostById(id: number): IPost {
        return this.postRepository.getPostById(id);
    };

    public changePost(id: number, title?: string, description?: string): void {
        this.postRepository.changePost(id, title, description)
    };

    public deletePost(id: number): void {
        this.postRepository.deletePost(id)
    };

    public addPhoto(payload: IPostPhotoPayload): void {
        this.postPhotoRepository.addPhoto(payload);
    };

    // public editPostPhoto(post_id: number, dimension: number): void {
    //     this.postPhotoRepository.editPostPhoto(post_id, dimension)
    // };
}

export default new PostService();