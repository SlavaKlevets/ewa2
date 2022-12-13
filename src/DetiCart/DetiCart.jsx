import React, {useState} from "react";
import style from "./DetiCart.module.css"
import {Link, useParams} from "react-router-dom";

export const DetiCart=()=>{

    const {id}=useParams();

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/czif-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Цифры",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/fig-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Геометрические фигуры",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/rus-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит русский",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/angl-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит английский",
            price:"7.50 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/07/1-300x300.jpg",
            name:"Игрушка развивающая Бизиборд — Трактор",
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