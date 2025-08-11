import {
  CategoryItf,
  GenderCategoryEnum,
} from "application/interfaces/category.interface";

const categoryData: CategoryItf[] = [
  {
    id: 1,
    name: "Polo",
    gender: GenderCategoryEnum.MAN,
  },
  {
    id: 2,
    name: "Pantalon",
    gender: GenderCategoryEnum.MAN,
  },
  {
    id: 3,
    name: "Camisa",
    gender: GenderCategoryEnum.MAN,
  },
];

export { categoryData };
