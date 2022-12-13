import React, {useState,useEffect} from "react";
import style from "./Catalog.module.css"
import {Link, Route, Routes, useParams,} from "react-router-dom";
import {Contacts} from "../Contacts/Contacts";
import {Deti} from "../Deti/Deti";
import {Givotny} from "../Givotny/Givotny";
import {Pazly} from "../Pazly/Pazly";
import {Konstruktory} from "../Konstruktory/Konstruktory";
import {Interier} from "../Interier/Interier";
import {Mini} from "../Mini/Mini";
import {Suveniry} from "../Suveniry/Suveniry";
import {Korzina} from "../Korzina/Korzina";
import {Lichnyi} from "../Lichnyi/Lichnyi";
import {MiniCart} from "../MiniCart/MiniCart";
import {DetiCart} from "../DetiCart/DetiCart";
import {GivotnyCart} from "../GivotnyCart/GivotnyCart";
import {PazlyCart} from "../PazlyCart/PazlyCart";
import {KonstruktoryCart} from "../KonstruktoryCart/KonstruktoryCart";
import {SuveniryCart} from "../SuveniryCart/SuveniryCart";
import {InterierCart} from "../InterierCart/InterierCart";
import {KonstructorCart} from "../KonstructorCart/KonstructorCart";
import {Poisk} from "../Poisk/Poisk";

    export const Catalog=({carsList,poisk,searchValue,setSearchValue})=>{

    const [zagolovok,setZagolovok]=useState("Товары");
    const [korzina,setKorzina]=useState([]);


    let arr2=[
        {
         name:"Товары для детей",
         links:"/catalog/deti"
        },
        {
         name:"Товары для животных",
         links:"/catalog/givotny"
        },
        {
         name:"Деревянные пазлы",
         links:"/catalog/pazly"
        },
        {
         name:"Механические конструкторы",
         links:"/catalog/konstruktory"
        },
        {
         name:"Конструкторы для интерьера",
         links:"/catalog/interier"
        },
        {
         name:"Мини-конструкторы",
         links:"/catalog/mini"
        },
        {
         name:"Сувениры",
         links:"/catalog/suveniry"
        }
];

    const fint=(e,i)=> {
        setZagolovok(e.target.innerHTML);
    };


    let cart=carsList.map(item=><div className={style.wrapper4}><Link to={`${item.link}${item.id}`}><img src={item.img} alt=""/></Link>
        <h2 onClick={()=>{setKorzina([item,...korzina])}}>{item.name}</h2>ss<p>{item.price}</p>
    </div>);

    return(
        <div className={style.ddd}>
            {poisk && <Poisk searchValue={searchValue} setSearchValue={setSearchValue}/>}
            <div className={style.naimenovanie}>
                <h1 className={style.zagolovok}>{zagolovok}</h1>
            </div>
           <div className={style.wrapper1}>
               <div className={style.wrapper2}>
                   <h1>Ктегории товаров</h1>
                   <ul className={style.category}>
                       {arr2.map(i=><li onClick={(e)=>{fint(e,i)}}><Link to={i.links} >{i.name}</Link></li>)}
                   </ul>
               </div>
               <div className={style.wrapper3}>
                   <Routes>
                       <Route path="/" element={cart}/>
                       <Route path="deti" element={<Deti setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="deti/:id" element={<DetiCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="givotny" element={<Givotny setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="givotny/:id" element={<GivotnyCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="pazly" element={<Pazly setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="pazly/:id" element={<PazlyCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="konstruktory" element={<Konstruktory setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="konstruktory/:id" element={<KonstruktoryCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="konstructor/:id" element={<KonstructorCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="interier" element={<Interier setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="interier/:id" element={<InterierCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="mini" element={<Mini setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="mini/:id" element={<MiniCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="suveniry" element={<Suveniry setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="suveniry/:id" element={<SuveniryCart setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="korzina" element={<Korzina korzina={korzina}/>}/>
                       <Route path="lichnyi" element={<Lichnyi/>}/>
                   </Routes>
               </div>
           </div>
        </div>
    )
}