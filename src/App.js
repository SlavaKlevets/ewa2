import './App.css';
import Logo from './img/logo.svg';
import {Slider} from "./Slider/Slider";
import {Predlogenija} from "./Predlogenija/Predlogenija";
import {Konstructor} from "./Konstructor/Konstructor";
import {Footer} from "./Footer/Footer";
import {Link, Route, Routes} from "react-router-dom";
import {Contacts} from "./Contacts/Contacts";
import {Oprodukcii} from "./Oprodukcii/Oprodukcii";
import {Onas} from "./Onas/Onas";
import {Oplata} from "./Oplata/Oplata";
import {Catalog} from "./Catalog/Catalog";
import {Korzina} from "./Korzina/Korzina";
import React, {useEffect, useState} from "react";

function App() {

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/czif-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Цифры",
            price:"7.50 BYN",
            link:"/catalog/deti/"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/fig-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Геометрические фигуры",
            price:"7.50 BYN",
            link:"/catalog/deti/"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/rus-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит русский",
            price:"10.00 BYN",
            link:"/catalog/deti/"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/angl-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит английский",
            price:"7.50 BYN",
            link:"/catalog/deti/"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/07/1-300x300.jpg",
            name:"Игрушка развивающая Бизиборд — Трактор",
            price:"7.50 BYN",
            link:"/catalog/deti/"
        },
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-3-300x169.jpg",
            name:"«Кошкин дом» чёрый каркас — белый мех",
            price:"7.50 BYN",
            link:"/catalog/givotny/"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-2-300x169.jpg",
            name:"«Кошкин дом» натуральный каркас — белый мех",
            price:"99.90 BYN",
            link:"/catalog/givotny/"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-1-300x169.jpg",
            name:"«Кошкин дом» белый каркас — черный мех",
            price:"99.90 BYN",
            link:"/catalog/givotny/"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-300x169.jpg",
            name:"«Кошкин дом» белый каркас — розовый мех",
            price:"99.90 BYN",
            link:"/catalog/givotny/"
        },
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-5-300x169.jpg",
            name:"Головоломка деревянная «Южная Америка»",
            price:"7.50 BYN",
            link:"/catalog/pazly/"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-4-300x169.jpg",
            name:"Головоломка деревянная «Северная Америка»",
            price:"7.50 BYN",
            link:"/catalog/pazly/"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-3-300x169.jpg",
            name:"Головоломка деревянная «Европа»",
            price:"10.00 BYN",
            link:"/catalog/pazly/"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-2-300x169.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит английский",
            price:"7.50 BYN",
            link:"/catalog/pazly/"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-1-300x169.jpg",
            name:"Игрушка развивающая Бизиборд — Трактор",
            price:"7.50 BYN",
            link:"/catalog/pazly/"
        },
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/22222-300x300.jpg",
            name:"Дикий кот",
            price:"89.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/1111-300x300.jpg",
            name:"Черный кот",
            price:"89.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/03/j-300x169.jpg",
            name:"ВЕТРЯНАЯ МЕЛЬНИЦА",
            price:"89.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/02/1-300x169.jpg",
            name:"Самолет",
            price:"89.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/01/j1-300x169.jpg",
            name:"ГЕЙМСЕТ домино Мексиканский поезд",
            price:"139.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:5,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/10/1-1-300x169.jpg",
            name:"Скайлорд",
            price:"119.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:6,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/10/1-300x169.jpg",
            name:"Луноход",
            price:"119.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:7,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-1-300x169.jpg",
            name:"Прицеп для БЕЛАРУС-82 и БЕЛАРУС-2022",
            price:"139.00 BYN",
            link:"/catalog/konstructor/"
        },
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-4-300x300.jpg",
            name:"«Карта Мира Large» Эмеральд Плэнет",
            price:"7.50 BYN",
            link:"/catalog/interier/"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-3-300x300.jpg",
            name:"«Карта Мира Large» Шоко Уорлд",
            price:"7.50 BYN",
            link:"/catalog/interier/"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-2-300x300.jpg",
            name:"«Карта Мира Large» Смоуки Дримс",
            price:"10.00 BYN",
            link:"/catalog/interier/"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-1-300x300.jpg",
            name:"«Карта Мира Large» Блю Фэнтези",
            price:"7.50 BYN",
            link:"/catalog/interier/"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-4-300x300.jpg",
            name:"«Карта Мира Medium» Эмеральд Плэнет",
            price:"7.50 BYN",
            link:"/catalog/interier/"
        }
    ];

    const[poisk,setPoisk]=useState(false);
    const [carsList,setCarList]=useState(arr);
    const [searchValue,setSearchValue]=useState("");

    const filterCars=(searchText,listOfCars)=>{
        if(!searchText){
            return listOfCars;
        }
        return listOfCars.filter(({name})=>
            name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    useEffect(()=>{
        const filteredCars=filterCars(searchValue,arr);
        setCarList(filteredCars);
    },[searchValue]);


  return (
    <div className="App">
      <header className="App-header">
          <Link to="/" className="logo1"><img src={Logo} className="logo" alt="logo"/></Link>
          <nav>
              <ul>
                  <li><Link to="/">Главная</Link></li>
                  <li><Link to="/catalog">Каталог</Link></li>
                  <li><Link to="/oprodukcii">О продукции</Link></li>
                  <li><Link to="/onas">О нас</Link></li>
                  <li><Link to="/oplata">Оплата и доставка</Link></li>
                  <li><Link to="/cont">Контакты</Link></li>
              </ul>
              <div className={"icon"}>
                  <img onClick={()=>{setPoisk(!poisk)}} className={"poisk"} src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/headers/header-1/img/search.svg" alt="search"/>
                  <Link to="/catalog/lichnyi"><img className={"kabinet"} src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/headers/header-1/img/account.svg" alt="search"/></Link>
                  <Link to="/catalog/korzina"><img className={"korzina"} src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/headers/header-1/img/cart.svg" alt="search"/></Link>
              </div>
              <div>

              </div>
          </nav>
      </header>
            <Routes>
                <Route path="/" element={
                                    <div>
                                        <Slider/>
                                        <Predlogenija/>
                                        <Konstructor/>
                                    </div>
                }/>
                <Route path="cont" element={<Contacts/>}/>
                <Route path="oprodukcii" element={<Oprodukcii/>}/>
                <Route path="onas" element={<Onas/>}/>
                <Route path="oplata" element={<Oplata/>}/>
                <Route path="catalog" element={<Catalog poisk={poisk} carsList={carsList} searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
                <Route path="/catalog/*" element={<Catalog poisk={poisk} carsList={carsList} searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
            </Routes>
        <footer>
            <Footer/>
            <div className="fut">
                <p>© 2022 All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
