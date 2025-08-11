import { Router } from "express";
import { ProductRoutes } from "./presentation/routes/product.routes";
import { CategoryRoutes } from "./presentation/routes/category.routes";

export class AppRouter {
  static get router(): Router {
    const router = Router();

    //Routes
    router.use("/api/products", ProductRoutes.routes);
    router.use("/api/category", CategoryRoutes.routes);
    return router;
  }
}
