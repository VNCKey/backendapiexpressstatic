import { Router } from "express";
import { ProductController } from "../controllers/producto.controller";

export class ProductRoutes {
  static get routes(): Router {
    const router = Router();
    const productController = new ProductController();

    //Routes

    router.get("/", productController.getProducts);
    router.get("/:id", productController.getProductById);
    router.put("/:id", productController.updateProduct);
    return router;
  }
}
