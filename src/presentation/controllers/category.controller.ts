import { Request, Response } from "express";
import { categoryData } from "../../infrastructure/database/category";

export class CategoryController {
  constructor() {}

  public getCategory(_req: Request, res: Response) {
    res.json(categoryData);
  }

  public getCategoryById(req: Request, res: Response) {
    const id = +req.params["id"];
    if (!id) {
      res.status(404).json({
        error: "Se tiene que enviar un id",
      });
      return;
    }

    const data = categoryData.find((value) => value.id === id);

    res.json({
      id: id,
      data: data,
    });
  }
}
