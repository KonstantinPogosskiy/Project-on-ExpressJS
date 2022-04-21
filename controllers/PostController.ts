import PostService from "../Services/PostService";
import {Request, Response} from "express";

class PostController {

    createPost (req: Request, res: Response) {
        try {
            const createdPost = PostService.createPost(req.body)
            return res.json(createdPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    getPostById (req: Request, res: Response) {
        try {
            const post = PostService.getPostById(+req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    changePost (req: Request, res: Response) {
        try {
            const post = PostService.changePost(+req.params.id, req.body.title, req.body.description)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    deletePost (req: Request, res: Response) {
        try {
            const post = PostService.deletePost(+req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();