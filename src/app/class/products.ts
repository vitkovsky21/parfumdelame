import { Categories } from "./categories";

export class Products {
    id: number;
    name: string;
    image: string;
    price: string;
    about: string;
    category: Categories

    constructor(id: number, name: string, image: string, price: string, about: string, category: Categories) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.category = category;
        this.about = about;
    }
}