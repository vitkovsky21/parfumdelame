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
        id: 4, 
        name: "Парфюмерная вода Enfes XXVIII", 
        image: "../assets/parfume/enfes-28.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "Вода по мотивам Hayati Attar Collection Unisex. Hayati Attar Collection — это аромат для мужчин и женщин, он принадлежит к группе цветочные фруктовые.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642674%2Fquery" 
      },
      { 
        id: 5, 
        name: "Парфюмерная вода Enfes XXVII", 
        image: "../assets/parfume/enfes-27.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "Вода по мотивам Tiffany & Love For Her Tiffany Women. Аромат голубой секвойи, лежащей в основании композиции начинает сильно ярко звучать, постепенно раскрываясь.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642661%2Fquery"
      },
      { 
        id: 6, 
        name: "Парфюмерная вода Enfes XXV", 
        image: "../assets/parfume/enfes-25.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Jo Malone Wood Sage & Sea Salt Unisex. Wood Sage & Sea Salt Jo Malone London — это аромат для мужчин и женщин, он принадлежит к группе фужерные. Wood Sage & Sea Salt выпущен в 2014 году.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642654%2Fquery"
      },
      { 
        id: 7, 
        name: "Парфюмерная вода Enfes XXIV", 
        image: "../assets/parfume/enfes-24.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "Вода по мотивам Shaik Opulent Shaik Classic №77 Men. Shaik Opulent Classik— это аромат для мужчин, он принадлежит к группе восточные.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642647%2Fquery"
      },
      { 
        id: 8, 
        name: "Парфюмерная вода Enfes XXI", 
        image: "../assets/parfume/enfes-21.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Kilian Angels Share Unisex. Angels' Share By Kilian — это аромат для мужчин и женщин, он принадлежит к группе восточные гурманские. Парфюмер: Benoist Lapouza.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642628%2Fquery"
      },
      { 
        id: 9, 
        name: "Парфюмерная вода Enfes XX", 
        image: "../assets/parfume/enfes-20.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Parfums de Marly Delina Women. Delina Parfums de Marly — это аромат для женщин, он принадлежит к группе цветочные. Парфюмер: Benoist Lapouza.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642620%2Fquery"
      },
      { 
        id: 10, 
        name: "Парфюмерная вода Enfes XVI", 
        image: "../assets/parfume/enfes-16.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Vertus Narcos'is Unisex. Загадочная и манящая восточно-фруктовая ароматическая композиция. Narcos'is Vertus — это аромат для мужчин и женщин. Narcos'is выпущен в 2017 году.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642612%2Fquery"
      },
      { 
        id: 11, 
        name: "Парфюмерная вода Enfes XV", 
        image: "../assets/parfume/enfes-15.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Cedre Atlas Atelier Cologne. Cedre Atlas Atelier Cologne — это аромат для мужчин и женщин, он принадлежит к группе древесные. Парфюмер: Jérôme Epinette.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642603%2Fquery"
      },
      { 
        id: 12, 
        name: "Парфюмерная вода Enfes XI", 
        image: "../assets/parfume/enfes-11.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Killian Good Girl Gone Bad. Good Girl Gone Bad By Kilian — это аромат для женщин, он принадлежит к группе цветочные фруктовые. Good Girl Gone Bad выпущен в 2012 году.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642690%2Fquery"
      },
      { 
        id: 13, 
        name: "Парфюмерная вода Enfes VIII", 
        image: "../assets/parfume/enfes-8.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Kilian Black Phantom. Black Phantom By Kilian — это аромат для мужчин и женщин, он принадлежит к группе восточные гурманские. Black Phantom выпущен в 2017 году.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642782%2Fquery"
      },
      { 
        id: 14, 
        name: "Парфюмерная вода Enfes VII", 
        image: "../assets/parfume/enfes-7.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Ex Nihilo Fleur Narcotique. Fleur Narcotique Ex Nihilo — это аромат для мужчин и женщин, он принадлежит к группе цветочные фруктовые.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642464%2Fquery"
      },
      { 
        id: 15, 
        name: "Парфюмерная вода Enfes VI", 
        image: "../assets/parfume/enfes-6.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Tom Ford Tobacco Vanille. Tobacco Vanille Tom Ford — это аромат для мужчин и женщин, он принадлежит к группе восточные пряные. Парфюмер: Olivier Gillotin.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642460%2Fquery"
      },
      { 
        id: 16, 
        name: "Парфюмерная вода Enfes IV", 
        image: "../assets/parfume/enfes-4.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Tom Ford Lost Cherry. Активизирует неутолимое желание и будоражит воображение, завершаясь царственно интенсивным шлейфом из изысканных нот перуанского бальзама.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642428%2Fquery"
      },
      { 
        id: 17, 
        name: "Парфюмерная вода Enfes II", 
        image: "../assets/parfume/enfes-2.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Tiziana Terenzi Kirke. Это аромат для мужчин и женщин, он принадлежит к группе шипровые фруктовые. Kirke выпущен в 2015 году. Парфюмер: Paolo Terenzi.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642406%2Fquery"
      },
      { 
        id: 18, 
        name: "Парфюмерная вода Enfes I", 
        image: "../assets/parfume/enfes-1.jpg",
        price: "1290₽",
        category: TestData.categories[0],
        about: "По мотивам Baccarat Rouge 540 Extrait. Это аромат для мужчин и женщин, он принадлежит к группе восточные цветочные. Baccarat Rouge 540 Extrait de Parfum выпущен в 2017 году.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_6642356%2Fquery"
      },
      { 
        id: 19, 
        name: "Санталь нуар, 30 мл", 
        image: "../assets/parfume/santal-1.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Санталь нуар — это аромат, сотканный из свежести зелёных нот, играющих в сердце мягкой, волнующей сладостью кокоса и элегантный шлейф из благородного сантала.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270370%2Fquery"
      },
      { 
        id: 20, 
        name: "Санталь нуар, 10 мл", 
        image: "../assets/parfume/santal-2.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Санталь нуар — это аромат, сотканный из свежести зелёных нот, играющих в сердце мягкой, волнующей сладостью кокоса и элегантный шлейф из благородного сантала.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270354%2Fquery"
      },
      { 
        id: 100, 
        name: "Ароматическая Свеча «LEMON CURD»", 
        image: "../assets/img-1.jpg",
        price: "800₽",
        category: TestData.categories[2],
        about: "Селективный аромат от мануфактуры Евгения Гора для настоящих гурманов!",
        link: "https://vk.com/market-161123001?q=lemon&w=product-161123001_6579847%2Fquery"
      },
      { 
       id: 101, 
       name: "Свеча Французский сад", 
       image: "../assets/img-2.jpg",
       price: "800₽",
       category: TestData.categories[2],
       about: "Вдохновленный романтическими садами Франции, аромат переносит вас в самое сердце благоухающего рая.",
       link: "https://vk.com/market-161123001?q=%D1%81%D0%B0%D0%B4&w=product-161123001_6622410%2Fquery"
      },
      { 
        id: 102, 
        name: "Портативный диффузор Drop", 
        image: "../assets/img-3.jpg",
        price: "800₽",
        category: TestData.categories[3],
        about: "Идеальный спутник дома, на работе и в машине. Интенсивное увлажнение скрасит долгую дорогу или напряженный рабочий день.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6617564%2Fquery" 
      },
      { 
        id: 21, 
        name: "Нюд, 10 мл", 
        image: "../assets/parfume/note-1.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Деликатное звучание дарит ассоциации с букетами королевских роз, купленных на одной из улочек Парижа и хрупких женских рук в перчатках из тончайшей замши, обнимающих эти цветы.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270351%2Fquery"
      },
      { 
        id: 22, 
        name: "Нюд, 30 мл", 
        image: "../assets/parfume/note-2.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Деликатное звучание дарит ассоциации с букетами королевских роз, купленных на одной из улочек Парижа и хрупких женских рук в перчатках из тончайшей замши, обнимающих эти цветы.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270350%2Fquery"
      },
      { 
        id: 23, 
        name: "Секрет, 30 мл", 
        image: "../assets/parfume/secret-1.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Женственный, благородный и очень деликатный фруктово-карамельный букет. Секрет, это аромат, который будет хранить тайну вашей женственности и притягательности.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270346%2Fquery"
      },
      { 
        id: 24, 
        name: "Секрет, 10 мл", 
        image: "../assets/parfume/secret-2.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Женственный, благородный и очень деликатный фруктово-карамельный букет. Секрет, это аромат, который будет хранить тайну вашей женственности и притягательности.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270345%2Fquery"
      },
      { 
        id: 25, 
        name: "Хрустальный янтарь, 10 мл", 
        image: "../assets/parfume/yantar-1.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Горячий, сладостный, искрящийся. Это аромат настоящей роскоши и достатка. Звучание его начнется с изысканного сочетания пряного шафрана, томного османтуса и теплоты древесных нот.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270342%2Fquery"
      },
      { 
        id: 26, 
        name: "Хрустальный янтарь, 30 мл", 
        image: "../assets/parfume/yantar-2.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Горячий, сладостный, искрящийся. Это аромат настоящей роскоши и достатка. Звучание его начнется с изысканного сочетания пряного шафрана, томного османтуса и теплоты древесных нот.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270341%2Fquery"
      },
      { 
        id: 27, 
        name: "Арабская ночь, 30 мл", 
        image: "../assets/parfume/night-1.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Этот насыщенный, гурманский и потрясающе жизнерадостный парфюм, раскроется звучанием шелковой мякоти персика, сочностью красных ягод и карамели.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270338%2Fquery"
      },
      { 
        id: 27, 
        name: "Арабская ночь, 10 мл", 
        image: "../assets/parfume/night-2.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Этот насыщенный, гурманский и потрясающе жизнерадостный парфюм, раскроется звучанием шелковой мякоти персика, сочностью красных ягод и карамели.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270337%2Fquery"
      },
      { 
        id: 27, 
        name: "Искушение, 10 мл", 
        image: "../assets/parfume/temptation-1.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Искушение это история об аромате ранней майской розы, чувственного жасмина и османтуса, но как у любого из нас, у композиции есть внутренняя, скрытая сторона.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270335%2Fquery"
      },
      { 
        id: 28, 
        name: "Искушение, 30 мл", 
        image: "../assets/parfume/temptation-2.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Искушение это история об аромате ранней майской розы, чувственного жасмина и османтуса, но как у любого из нас, у композиции есть внутренняя, скрытая сторона.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270334%2Fquery"
      },
      { 
        id: 29, 
        name: "Балийская плюмерия, 30 мл", 
        image: "../assets/parfume/bali-1.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Это аромат незабываемых путешествий по живописному серпантину и горным дорогам в сопровождении удивительных цитрусовых садов и тенистых узоров тиковых деревьев.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270333%2Fquery"
      },
      { 
        id: 30, 
        name: "Балийская плюмерия, 10 мл", 
        image: "../assets/parfume/bali-2.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Это аромат незабываемых путешествий по живописному серпантину и горным дорогам в сопровождении удивительных цитрусовых садов и тенистых узоров тиковых деревьев.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270331%2Fquery"
      },
      { 
        id: 31, 
        name: "Амбровый цветок, 10 мл", 
        image: "../assets/parfume/flower-1.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Амбровый цветок. Этот неповторимый, сочный аромат с шумным и веселым нравом, окунёт Вас в атмосферу счастья и праздника летних беззаботных дней.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270329%2Fquery"
      },
      { 
        id: 32, 
        name: "Любовь, 30 мл", 
        image: "../assets/parfume/love-1.jpg",
        price: "3890₽",
        category: TestData.categories[0],
        about: "Нежный притягательный и чувственный. Сложно представить чувство прекраснее, чем любовь, когда с первого вдоха аромат селит в животе бабочек, а душу переполняет счастье.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270327%2Fquery"
      },
      { 
        id: 33, 
        name: "Любовь, 10 мл", 
        image: "../assets/parfume/love-2.jpg",
        price: "1990₽",
        category: TestData.categories[0],
        about: "Нежный притягательный и чувственный. Сложно представить чувство прекраснее, чем любовь, когда с первого вдоха аромат селит в животе бабочек, а душу переполняет счастье.",
        link: "https://vk.com/market-161123001?section=album_59&w=product-161123001_5270326%2Fquery"
      },
      { 
        id: 34, 
        name: "Благовоние HEM, Солнце",
        image: "../assets/blago/sun.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "20 палочек. Придаст сил, наполнит энергией горячего летнего солнца, поможет избавиться от сезонной депрессии и сонливости. Аромат: сладко-свежий, теплый.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675894%2Fquery"
      },
      { 
        id: 35, 
        name: "Благовония Ppure, Антистресс",
        image: "../assets/blago/antistress.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "20 палочек. Благовония специально созданы для облегчения симптомов депрессии и хандры, а также повышения жизненного тонуса. Приятный аромат улучшает настроение.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675870%2Fquery"
      },
      { 
        id: 36, 
        name: "Благовония HEM, Dragons Blood",
        image: "../assets/blago/dragons.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "20 палочек. Насыщенный, прохладный аромат благовоний способствует исцелению ауры, приливу жизненных сил, бодрости и энергии.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675827%2Fquery"
      },
      { 
        id: 37, 
        name: "Благовония Ppure, Антитабак",
        image: "../assets/blago/antitabaco.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "20 палочек. Для тех, кто плохо переносит табак и желает устранить его следы в помещении, создано благовоние Anti Tabacco (Антитабак). Оно эффективно борется с неприятным запахом.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675606%2Fquery"
      },
      { 
        id: 38, 
        name: "Благовония Ppure, Ваниль",
        image: "../assets/blago/vanilla.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "20 палочек. Ваниль - это энергетик, который не просто несет заряд бодрости и сил, а пробуждает внутренние психологические изменения, активизируя жизненную и психологическую энергию.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675531%2Fquery"
      },
      { 
        id: 39, 
        name: "Благовония Ppure, Чёрная Любовь",
        image: "../assets/blago/black-love.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "20 палочек. Их назначение состоит в гармонизации жизненного пространства человека, устранении нежелательных энергий и привлечении нужных. ",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675482%2Fquery"
      },
      { 
        id: 40, 
        name: "Благовония Ppure, Очищение Ауры",
        image: "../assets/blago/aura.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "Благовония Ppure Cleansing Aura изготовлены вручную на основе бамбуковой лучины с древесным наполнителем, смешанного со смолой Чампы.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675405%2Fquery"
      },
      { 
        id: 41, 
        name: "Благовония Ppure, Все сезоны",
        image: "../assets/blago/seasons.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "Обладают нежным и ярким цветочным ароматом. Запах изящно сочетает в себе ноты цветущих весенних трав, спелых плодов осени, прохладу морозного дня.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675334%2Fquery"
      },
      { 
        id: 42, 
        name: "Благовония HEM, Кокос-Манго",
        image: "../assets/blago/mango.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "Аромат фруктов способствует повышению самооценки и настроения а также улучшает финансовую сферу. Помогает привлечь удачу и везение.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675225%2Fquery"
      },
      { 
        id: 43, 
        name: "Благовония HEM, Эверест",
        image: "../assets/blago/everest.jpg",
        price: "120₽",
        category: TestData.categories[1],
        about: "Благовония Эверест - это мистический свежий аромат с нотами рододендрона и генциана, который поможет Вам в исполнении заветных желаний. В наборе 20 палочек.",
        link: "https://vk.com/market-161123001?section=album_51&w=product-161123001_6675175%2Fquery"
      },
      { 
        id: 44, 
        name: "Свеча Цветок лотоса, 200 гр",
        image: "../assets/candle/candle-1.jpg",
        price: "1374₽",
        category: TestData.categories[2],
        about: "Тонкий и чувственный благодаря нотам итальянской фиалки, ванили, бобов тонка из далекой Бразилии, он наполнит помещение особой атмосферой.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6622443%2Fquery"
      },
      { 
        id: 45, 
        name: "Свеча Черный виноград, 200 гр",
        image: "../assets/candle/candle-2.jpg",
        price: "1374₽",
        category: TestData.categories[2],
        about: "Насыщенный, чувственный и манящий, чёрный виноград будет идеальным ароматом для любителей гурманики и романтических вечеров вдвоём. Состав: кокосовый воск, парфюмерная композиция.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6622438%2Fquery"
      },
      { 
        id: 45, 
        name: "Свеча ароматическая Игристое вино, 200 гр",
        image: "../assets/candle/candle-3.jpg",
        price: "1374₽",
        category: TestData.categories[2],
        about: "Аромат наслаждения взорвется яркостью бразильского апельсина, приправленного мятой и буйством цветочных нот.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6622421%2Fquery"
      },
      { 
        id: 46, 
        name: "Свеча Инжирный лист, 70 гр",
        image: "../assets/candle/candle-4.jpg",
        price: "714₽",
        category: TestData.categories[2],
        about: "Благородный и кристально чистый, он звучит зелёными нотами листа инжира и свежестью цедры грейпфрута, а в базе подслащивается сочностью плодов инжира и дыни на древесной подложке.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6622386%2Fquery"
      },
      { 
        id: 47, 
        name: "Свеча Белый виноград, 70 гр",
        image: "../assets/candle/candle-5.jpg",
        price: "714₽",
        category: TestData.categories[2],
        about: "Легкий и свежий аромат свечи, способный поднимать настроение в самый дождливый день. Освежающие ноты будут играть для вас удивительно нежную мелодию, унося в весенние сады.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6622372%2Fquery"
      },
      { 
        id: 48, 
        name: "Свеча Сицилийский бергамот, 70 гр",
        image: "../assets/candle/candle-6.jpg",
        price: "714₽",
        category: TestData.categories[2],
        about: "Сочный взрыв нот красного мандарина, чёрной смородины и главного символа солнечной Сицилии, бергамота, наполнят дом настроением.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6622357%2Fquery"
      },
      { 
        id: 49, 
        name: "Свеча Игристое вино, 70 гр",
        image: "../assets/candle/candle-7.jpg",
        price: "714₽",
        category: TestData.categories[2],
        about: "Аромат взорвется яркостью бразильского апельсина, приправленного мятой и буйством цветочных нот на мускусно-древесной подложке. Лучший аромат для непринуждённой обстановки.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6622346%2Fquery"
      },
      { 
        id: 50, 
        name: "Свеча MINT CANDY Мятный конфеты",
        image: "../assets/candle/candle-8.jpg",
        price: "800₽",
        category: TestData.categories[2],
        about: "Аромат мяты является бодрящим, освежающим и тонизирующим. Прекрасно борется с накопившейся усталостью, головной болью, апатией и сонливостью.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6579878%2Fquery"
      },
      { 
        id: 51, 
        name: "Свеча Vanilla Sky Ванильное небо",
        image: "../assets/candle/candle-9.jpg",
        price: "800₽",
        category: TestData.categories[2],
        about: "Поднимитесь до самых облаков, так похожих на сахарную вату. Смесь ароматов подарит воздушное настроение на целый день.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6579827%2Fquery"
      },
      { 
        id: 52, 
        name: "Свеча Булочка с корицей",
        image: "../assets/candle/candle-10.jpg",
        price: "800₽",
        category: TestData.categories[2],
        about: "Корица известна с глубокой древности. Она ценилась весьма высоко и поэтому её часто преподносили в дар монаршим особам. Сегодня корица доступна каждому, но её аромат по-прежнему ценится высоко.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_4884967%2Fquery"
      },
      { 
        id: 53, 
        name: "Свеча Бергамот и крапива, St Eval candle",
        image: "../assets/candle/candle-11.jpg",
        price: "2290₽",
        category: TestData.categories[2],
        about: "Поднимающая настроение смесь свежих травяных аккордов бергамота и крапивы и еле уловимых нот восточных специй.",
        link: "https://vk.com/market-161123001?section=album_30&w=product-161123001_6703322%2Fquery"
      },
      { 
        id: 54, 
        name: "Диффузор Цветок лотоса, 200 мл",
        image: "../assets/diffuser/diffuser-1.jpg",
        price: "2154₽",
        category: TestData.categories[3],
        about: "Тонкий и чувственный благодаря нотам итальянской фиалки, ванили, бобов тонка из далекой Бразилии, он наполнит помещение особой атмосферой, в которой захочется ещё больше погрузиться в себя, освободить голову от суетливых мыслей и почувствовать умиротворение.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6622690%2Fquery"
      },
      { 
        id: 55, 
        name: "Диффузор Черная смородина, 200 мл",
        image: "../assets/diffuser/diffuser-2.jpg",
        price: "2154₽",
        category: TestData.categories[3],
        about: "Сочный, яркий и свежий взрыв аромата черная смородина, это лучшее напоминание о лете и природе. Бренд: Лаб Фрагранс.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6622670%2Fquery"
      },
      { 
        id: 56, 
        name: "Диффузор Амбровый аккорд, 100 мл",
        image: "../assets/diffuser/diffuser-3.jpg",
        price: "1374₽",
        category: TestData.categories[3],
        about: "Амбровый аккорд, создаст приятную атмосферу, благодаря удивительно нежным нотам пудровой мимозы и розовый воды, а в сердце композиция будет переливаться звучанием шелковой фиалки, чувственных пачули и кедра из Вирджинии.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6622648%2Fquery"
      },
      { 
        id: 57, 
        name: "Ультразвуковой диффузор Tiny Wenge",
        image: "../assets/diffuser/diffuser-4.jpg",
        price: "4190₽",
        category: TestData.categories[3],
        about: "Минималистичный, но не простой аромадиффузор Tiny покорит ваше сердце с первого выдоха",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6617872%2Fquery"
      },
      { 
        id: 58, 
        name: "Диффузор ультразвуковой Lines, бежевый",
        image: "../assets/diffuser/diffuser-5.jpg",
        price: "3000₽",
        category: TestData.categories[3],
        about: "Компактный портативный аромадиффузор Lines идеальный вариант для ароматизации и увлажнения небольшого локального пространства (рабочего места или прикроватной зоны).",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6617761%2Fquery"
      },
      { 
        id: 59, 
        name: "Портативный диффузор Drop, черный",
        image: "../assets/diffuser/diffuser-6.jpg",
        price: "2700₽",
        category: TestData.categories[3],
        about: "Портативный диффузор Drop идеальный спутник дома, на работе и в машине. Маленький размер позволяет без труда брать его с собой.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6617707%2Fquery"
      },
      { 
        id: 60, 
        name: "Ультразвуковой диффузор Flame",
        image: "../assets/diffuser/diffuser-7.jpg",
        price: "6630₽",
        category: TestData.categories[3],
        about: "Водяной пар с подсветкой Flame создает эффект парящего огня в камине. Ваш персональный ароматный камин, без дыма и огня.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6617470%2Fquery"
      },
      { 
        id: 61, 
        name: "Диффузор Средиземноморский воздух, Oxygen Base, 50 мл",
        image: "../assets/diffuser/diffuser-8.jpg",
        price: "1190₽",
        category: TestData.categories[3],
        about: "Бодрящий аромат с яркими акцентами бергамота и жасмина, дополненный аккордами сандала, ванили и бобов тонка.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6486444%2Fquery"
      },
      { 
        id: 62, 
        name: "Диффузор Чистый хлопок, Oxygen Base, 50 мл",
        image: "../assets/diffuser/diffuser-9.jpg",
        price: "1190₽",
        category: TestData.categories[3],
        about: "Свежий аромат хлопка со сладкими цветочными нотами.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6486423%2Fquery"
      },
      { 
        id: 63, 
        name: "Диффузор Азиатский бергамот, Oxygen Base, 50 мл",
        image: "../assets/diffuser/diffuser-10.jpg",
        price: "1190₽",
        category: TestData.categories[3],
        about: "Современный, утонченный, свежий аромат с искристыми нотами грейпфрута, бергамота, терпкими специями и лавандой.",
        link: "https://vk.com/market-161123001?section=album_31&w=product-161123001_6486366%2Fquery"
      },
      { 
        id: 64, 
        name: "Масло для волос и тела (черный тмин)",
        image: "../assets/oil/oil-1.jpg",
        price: "1650₽",
        category: TestData.categories[4],
        about: "Масло черного тмина оказывает противогрибковое и противоаллергическое действие, является эффективным средством лечения угревой сыпи, грибковых заболеваний кожи.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5230639%2Fquery"
      },
      { 
        id: 65, 
        name: "Масло жожоба нерафинированное",
        image: "../assets/oil/oil-2.jpg",
        price: "490₽",
        category: TestData.categories[4],
        about: "Масло самодостаточно как в чистом виде, так и в роли базового масла для смешения с другими вариантами дополнительных масел. Это уникальное вещество на самом деле по своему составу является воском.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_6381173%2Fquery"
      },
      { 
        id: 66, 
        name: "Масло фундука нерафинированное",
        image: "../assets/oil/oil-3.jpg",
        price: "390₽",
        category: TestData.categories[4],
        about: "Прекрасное средство для ухода за кожей вокруг глаз, при лечении купероза, избавлении от сосудистых сеточек и «звёздочек».",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5992494%2Fquery"
      },
      { 
        id: 67, 
        name: "Масло семян белого кунжута, нерафинированное",
        image: "../assets/oil/oil-4.jpg",
        price: "290₽",
        category: TestData.categories[4],
        about: "Масло кунжутное чрезвычайно высоко ценится благодаря своему уникальному составу.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5992483%2Fquery"
      },
      { 
        id: 68, 
        name: "Масло рисовых отрубей",
        image: "../assets/oil/oil-5.jpg",
        price: "250₽",
        category: TestData.categories[4],
        about: "В многих странах масло рисовых отрубей высоко ценится как ингредиент в косметических средствах и SPA - продуктах, поскольку оно очень богато натуральными антиоксидантами, которые борятся со свободными радикалами и естественным образом продлевают молодость кожи.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5992476%2Fquery"
      },
      { 
        id: 69, 
        name: "Масло какао нерафинированное Guriya, 100 гр",
        image: "../assets/oil/oil-6.jpg",
        price: "400₽",
        category: TestData.categories[4],
        about: "Богатейшее по своему составу масло какао обладает прекрасными питательными, увлажняющими и смягчающими свойствами, оказывает ярко выраженное заживляющее и тонизирующее действие.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5992471%2Fquery"
      },
      { 
        id: 70, 
        name: "Масло абрикосовых косточек, нерафинированное",
        image: "../assets/oil/oil-7.jpg",
        price: "250₽",
        category: TestData.categories[4],
        about: "Многие ценят его не столько за уникальные целебные свойства, сколько за нежнейший тонкий аромат и удивительно приятную текстуру, дарящую нежнейшие ощущения при нанесении на кожу.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5992151%2Fquery"
      },
      { 
        id: 71, 
        name: "Кокосовое масло нерафинированное Virgin AROUS SULTAN, 100 мл",
        image: "../assets/oil/oil-8.jpg",
        price: "290₽",
        category: TestData.categories[4],
        about: "Нерафинированное кокосовое масло сертифицировано как пищевое без добавления консервантов и ароматизаторов категории Virgin.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5598489%2Fquery"
      },
      { 
        id: 72, 
        name: "Смесь масел от морщин вокруг глаз Guriya, 10 мл",
        image: "../assets/oil/oil-9.jpg",
        price: "330₽",
        category: TestData.categories[4],
        about: "Смесь масел прекрасно борется с появлением морщин вокруг глаз, разравнивая кожу и улучшая ее состояние.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5598473%2Fquery"
      },
      { 
        id: 73, 
        name: "Масло авокадо, нерафинированное",
        image: "../assets/oil/oil-10.jpg",
        price: "350₽",
        category: TestData.categories[4],
        about: "Натуральное нерафинированное масло авокадо - это универсальное многофунциональное базовое масло, которое востребовано в уходе за волосами и кожей лица и тела.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5598460%2Fquery"
      },
      { 
        id: 74, 
        name: "Масло грецкого ореха, нерафинированное",
        image: "../assets/oil/oil-11.jpg",
        price: "275₽",
        category: TestData.categories[4],
        about: "Масло грецкого ореха, которое создано при первом холодном отжиме ядер, имеет очень высокие качества, используемые как в домашней, так и профессиональной косметологии.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5598408%2Fquery"
      },
      { 
        id: 75, 
        name: "Масло василька полевого",
        image: "../assets/oil/oil-12.jpg",
        price: "260₽",
        category: TestData.categories[4],
        about: "Масло этого цветка используют в области вокруг глаз: оно разглаживает морщины, придавая коже более свежий вид, устраняя различные припухлости и потемнения.",
        link: "https://vk.com/market-161123001?section=album_25&w=product-161123001_5598384%2Fquery"
      },
     ]
}