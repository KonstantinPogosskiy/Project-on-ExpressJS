import {Request, Response} from "express";
import PostLikeService from "../Services/PostLikeService";

class LikeController {

    addLike (req: Request, res: Response) {
        try {
            const like = PostLikeService.addLike(req.body)
            return res.json(like)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    removeLike (req: Request, res: Response) {
        try {
            const like = PostLikeService.removeLike(req.body)
            return res.json(like)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    getLikesPostById (req: Request, res: Response) {
        const like = PostLikeService.getLikesPostById(req.body.post_id)
        return res.json(like)
    }
}

export default new LikeController();