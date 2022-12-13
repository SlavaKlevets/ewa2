import React, {useState} from "react";
import style from "./PazlyCart.module.css"
import {Link, useParams} from "react-router-dom";

export const PazlyCart=()=>{

    const {id}=useParams();

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-5-300x169.jpg",
            name:"Головоломка деревянная «Южная Америка»",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-4-300x169.jpg",
            name:"Головоломка деревянная «Северная Америка»",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-3-300x169.jpg",
            name:"Головоломка деревянная «Европа»",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-2-300x169.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит английский",
            price:"7.50 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-1-300x169.jpg",
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