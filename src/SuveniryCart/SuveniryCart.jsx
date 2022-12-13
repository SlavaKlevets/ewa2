import React, {useState} from "react";
import style from "./SuveniryCart.module.css"
import {Link, useParams} from "react-router-dom";

export const SuveniryCart=()=>{

    const {id}=useParams();

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/ladywithumbrella_02-300x400.jpg",
            name:"Салфетница сувенирная «ДАМА С ЗОНТИКОМ» (черная)",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/amelie_black_02-300x400.jpg",
            name:"Салфетница сувенирная «АМЕЛИ» (черная)",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/amelie_red_02-300x400.jpg",
            name:"Салфетница сувенирная «АМЕЛИ» (красная)",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/ladywithumbrella_nocolor_02-300x400.jpg",
            name:"Салфетница сувенирная «ДАМА С ЗОНТИКОМ»",
            price:"7.50 BYN"
        }
    ];


    return(
        <div className={style.ddd}>
                <div className={style.wrapper3}>
                    <div className={style.wrapper4}><img src={arr[id].img} alt=""/>
                        <h2>{arr[id].name}</h2>
                        <p>{arr[id].price}</p>
                    </div>
                </div>
        </div>
    )
}