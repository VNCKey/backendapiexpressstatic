import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();
    const categoryController = new CategoryController();

    // routes

    router.get("/", categoryController.getCategory);
    router.get("/:id", categoryController.getCategoryById);

    router.post("/", categoryController.postCategory);

    router.put("/:id", categoryController.putCategory);
    router.delete("/:id", categoryController.deleteCategory);

    return router;
  }
}
