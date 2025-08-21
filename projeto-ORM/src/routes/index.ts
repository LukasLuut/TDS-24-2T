import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { PostController } from '../controllers/PostController';
import { ProductController } from '../controllers/ProductController';
import { CategoryController } from '../controllers/CategoryController';

const routes = Router();
const userController = new UserController();
const postController = new PostController();
const productController= new ProductController();
const categoryController = new CategoryController();

routes.get('/users', userController.list);
routes.post('/users', userController.create);
routes.post('/posts', postController.create);

routes.get('/products', productController.list)
routes.post('/products', productController.create);

routes.get('/category', categoryController.list)
routes.post('/category', categoryController.create);

export default routes;