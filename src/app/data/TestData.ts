import { Categories } from "../class/categories";
import { HomeSlide } from "../class/home-slide";
import { Products } from "../class/products";

export class TestData {

    static homeSlides: HomeSlide[] = 
     [ 
       { id: 1, image: "../assets/home-slide-1.jpg", text: "Бутик для души и тела" },
       { id: 2, image: "../assets/home-slide-2.jpg", text: "Натуральная косметика" },
       { id: 3, image: "../assets/home-slide-3.jpg", text: "Изысканные ароматы для дома" },
     ]

     static categories: Categories[] = [
       { id: 1, name: "Парфюмерия", image: "../assets/icon-1.png" },
       { id: 2, name: "Благовония", image: "../assets/icon-2.png" },
       { id: 3, name: "Свечи ароматические", image: "../assets/icon-3.png" },
       { id: 4, name: "Диффузоры", image: "../assets/icon-4.png" },
       { id: 5, name: "Масла косметические", image: "../assets/icon-5.png" },
       // { id: 6, name: "Эфирные масла", image: "../assets/icon-6.png" },
     ]

     static products: Products[] = [
       { 
         id: 1, 
         name: "Ароматическая Свеча «LEMON CURD»", 
         image: "../assets/img-1.jpg",
         price: "800р",
         category: TestData.categories[2],
         about: "Селективный аромат от мануфактуры Евгения Гора для настоящих гурманов!" 
       },
       { 
        id: 2, 
        name: "Свеча Французский сад", 
        image: "../assets/img-2.jpg",
        price: "800р",
        category: TestData.categories[2],
        about: "Вдохновленный романтическими садами Франции, аромат переносит вас в самое сердце благоухающего рая." 
      },
      { 
        id: 3, 
        name: "Портативный диффузор Drop", 
        image: "../assets/img-3.jpg",
        price: "800р",
        category: TestData.categories[3],
        about: "Идеальный спутник дома, на работе и в машине. Интенсивное увлажнение скрасит долгую дорогу или напряженный рабочий день." 
      },
       
     ]
}