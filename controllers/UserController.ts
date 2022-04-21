import UserService from "../Services/UserService";
import {Response, Request} from "express";

class UserController {

    createUser (req: Request, res: Response) {
        try {
            const createdUser = UserService.createUser(req.body)
            return res.json(createdUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    getUserById (req: Request, res: Response) {
        try {
            const user = UserService.getUserById(+req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController();

