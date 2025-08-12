import { Request, Response } from "express";
import { categoryData } from "../../infrastructure/database/category";
import { CategoryItf } from "../../application/interfaces/category.interface";

export class CategoryController {
  constructor() {}

  public getCategory(_req: Request, res: Response) {
    res.json(categoryData);
  }

  public getCategoryById(req: Request, res: Response) {
    const id = +req.params["id"];
    if (isNaN(id)) {
      res.status(400).json({
        error: "Se tiene que enviar un id",
      });
      return;
    }

    const data = categoryData.find((value) => value.id === id);

    data
      ? res.json(data)
      : res.status(404).json({
          error: "Categoría no encontrada",
        });
  }
  public postCategory(req: Request, res: Response): Response {
    const { name, gender }: CategoryItf = req.body;
    if (!name) {
      return res.status(400).json({ error: "El nombre es requerido" });
    }
    if (!gender) {
      return res.status(400).json({ error: "El género es requerido" });
    }

    categoryData.push({
      id: categoryData.length + 1,
      name,
      gender,
    });
    return res.json({
      id: categoryData.length + 1,
      name,
      gender,
    });
  }

  public putCategory(req: Request, res: Response) {
    const id = +req.params["id"];
    if (isNaN(id)) {
      res.status(400).json({
        error: "Se tiene que enviar un id",
      });
      return;
    }
    const data = categoryData.find((value) => value.id === id);

    if (!data) {
      return res.status(404).json({
        error: "Categoría no encontrada",
      });
    }

    const { name, gender } = req.body;

    if (!name) {
      return res.status(400).json({ error: "El nombre es requerido" });
    }
    if (!gender) {
      return res.status(400).json({ error: "El género es requerido" });
    }

    data.name = name;
    data.gender = gender;

    return res.json(data);
  }

  public deleteCategory(req: Request, res: Response) {
    const id = +req.params["id"];
    if (isNaN(id)) {
      return res.status(400).json({ error: "Se tiene que enviar un id" });
    }

    const index = categoryData.findIndex((value) => value.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }
    categoryData.splice(index, 1);

    return res.status(204).send();
  }
}
