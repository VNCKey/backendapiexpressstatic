import { products } from "infrastructure/database/products";
import { ProductItf } from "application/interfaces/product.interface";
import { Request, Response } from "express";

export class ProductController {
  //Dependency Inyections
  constructor() {}

  public getProducts = (_req: Request, res: Response) => {
    res.json(products);
  };

  public getProductById = (req: Request, res: Response) => {
    const id = +req.params["id"];

    if (isNaN(id)) res.status(400).json({ error: `Dato invalido pendejo` });

    const value = products.find((i) => i.id === id);
    value
      ? res.json(value)
      : res
          .status(404)
          .json({ error: `Error compa ese puto id no existe papi ${id}` });
  };

  public createProduct = (req: Request, res: Response) => {
    const body: ProductItf = req.body;
    if (!body.name) {
      res.status(400).json({ error: `Enviar el name` });
      return;
    }

    const newProduct: ProductItf = body;
    products.push(newProduct);
    res.json({
      Message: "Aparentemente todo bien",
    });
  };

  public updateProduct = (req: Request, res: Response) => {
    const id = +req.params["id"];
    if (isNaN(id)) res.status(400).json({ error: `Dato invalido pendejo` });

    const todo = products.find((i) => i.id === id);

    if (!todo) {
      res.status(404).json({ error: "No se encontro el id" });
      return;
    }

    const { name } = req.body;

    todo["name"] = name;

    res.json(todo);
  };
}
