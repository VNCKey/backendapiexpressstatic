import { CategoryItf } from "./category.interface";

interface ProductItf {
  id: number;
  code?: number;
  name: string;
  brand?: string;
  price: number;
  fabric?: string;
  model?: string;
  edition?: string;
  start?: number;
  images?: string[];
  color: string;
  size: "S" | "M" | "L" | "XL";
  discount?: number;
  manufacturingDate: Date;
  category: CategoryItf;
}

export { ProductItf };
