import Router from 'express';
import UserController from "../controllers/UserController";
import PostController from "../controllers/PostController";
import ProfileController from "../controllers/ProfileController";
import LikeController from "../controllers/LikeController";
import AuthController from "../controllers/AuthController";

const router = Router()
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.post('/posts', PostController.createPost);
router.get('/posts/:id', PostController.getPostById);
router.patch('/posts/:id', PostController.changePost);
router.delete('/posts/:id', PostController.deletePost);
router.post('/profiles', ProfileController.createProfile);
router.get('/profiles/:id', ProfileController.getProfileById);
router.patch('/profiles/:id', ProfileController.updateProfile);
router.post('/likes', LikeController.addLike);
router.delete('/likes', LikeController.removeLike);
router.get('/likes/:id', LikeController.getLikesPostById);
router.post('/auth', AuthController.singIn);
router.post('/reg', AuthController.singUp);

export default router;