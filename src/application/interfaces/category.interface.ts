
enum GenderCategoryEnum {
    MAN = "Man",
    WOMAN = "Woman",
    BOY = "Boy",
    GIRL = "Girl",
    BABY = "Baby",
}

interface CategoryItf{
    id:number;
    name:string;
    gender:GenderCategoryEnum;
}


export {
    CategoryItf,
    GenderCategoryEnum
}