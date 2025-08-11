import { Router } from "express";
import { CategoryController } from "presentation/controllers/category.controller";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();
    const categoryController = new CategoryController();

    // routes

    router.get("/", categoryController.getCategory);
    router.get("/:id", categoryController.getCategoryById);
    // router.get("/:id", categoryController.getCategory);

    return router;
  }
}
