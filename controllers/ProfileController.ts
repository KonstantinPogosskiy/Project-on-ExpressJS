import ProfileService from "../Services/ProfileService";
import {Response, Request} from "express";

class ProfileController {

    createProfile (req: Request, res: Response) {
        try {
            const createdProfile = ProfileService.createProfile(req.body);
            return res.json(createdProfile)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    getProfileById (req: Request, res: Response) {
        try {
            const profile = ProfileService.getProfileById(+req.params.id)
            return res.json(profile)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    updateProfile (req: Request, res: Response) {
        try {
            const profile = ProfileService.updateProfile(+req.params.id, req.body.firstName, req.body.lastName)
            return res.json(profile)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new ProfileController();