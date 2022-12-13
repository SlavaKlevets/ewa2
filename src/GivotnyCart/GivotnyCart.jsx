import React, {useState} from "react";
import style from "./GivotnyCart.module.css"
import {Link, useParams} from "react-router-dom";

export const GivotnyCart=()=>{

    const {id}=useParams();

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-3-300x169.jpg",
            name:"«Кошкин дом» чёрый каркас — белый мех",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-2-300x169.jpg",
            name:"«Кошкин дом» натуральный каркас — белый мех",
            price:"99.90 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-1-300x169.jpg",
            name:"«Кошкин дом» белый каркас — черный мех",
            price:"99.90 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-300x169.jpg",
            name:"«Кошкин дом» белый каркас — розовый мех",
            price:"99.90 BYN"
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