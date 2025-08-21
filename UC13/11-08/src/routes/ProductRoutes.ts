import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

const controller = new ProductController();

router.get('/product', controller.listAllProducts);
router.post('/product', controller.createProduct);
router.put('/product/:id', controller.updateProduct);
router.delete('/product/:id', controller.deleteProduct);

export default router;