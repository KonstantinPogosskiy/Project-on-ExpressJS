import {IPost} from "../Interfaces/IPost";
import {IPostPayload} from "../Interfaces/IPostPayload";

class PostRepository {
    private id: number;
    private posts: IPost[];
    publishDate: string;
    constructor() {
        this.id = 1;
        this.posts = [];
        this.publishDate = new Date().toLocaleDateString();
    }

    public createPost(payload: IPostPayload): number {
        const postId = this.id
        this.posts.push({
            post_id: postId,
            publishDate: this.publishDate,
            ...payload,
        });
        this.id = this.id + 1;
        return postId
    }

    public getPostById(id: number): IPost {
        return <IPost>this.posts.find((post) => post.post_id === id);
    }

    public changePost(id: number, title?: string, description?: string): void {
        this.posts.forEach(el => {
            if(el.post_id === id) {
                el.title = <string>title
                el.description = <string>description
            }
        })
    }

    public deletePost(id: number): void {
        const index = this.posts.findIndex(p => p.post_id === id);
        if (index !== -1) {
            this.posts.splice(index, 1);
        }
    }
}

export default PostRepository;