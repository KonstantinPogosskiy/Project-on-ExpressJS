import {Request, Response} from "express";
import AuthorizationService from "../Services/AuthorizationService";

class AuthController {

    singIn (req: Request, res: Response) {
        try {
            const user = AuthorizationService.singIn(req.body)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    singUp (req: Request, res: Response) {
        try {
            const user = AuthorizationService.singUp(req.body)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    // logOut(req: Request, res: Response) {
    //
    // };
}

export default new AuthController();