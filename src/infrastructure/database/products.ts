import { ProductItf } from "application/interfaces/product.interface";
import { categoryData } from "./category";

const products: ProductItf[] = [
  {
    id: 1,
    name: "Polo estilo pro",
    price: 25.6,
    color: "Blue",
    size: "M",
    manufacturingDate: new Date(),
    category: categoryData[0],
  },
  {
    id: 2,
    name: "Pantalon Inca Fenix",
    price: 25.6,
    color: "Blue",
    size: "S",
    manufacturingDate: new Date(),
    category: categoryData[0],
  },
];

export { products };
