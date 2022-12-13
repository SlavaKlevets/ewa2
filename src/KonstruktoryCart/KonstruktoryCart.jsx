import React, {useState} from "react";
import style from "./KonstruktoryCart.module.css"
import {Link, useParams} from "react-router-dom";

export const KonstruktoryCart=()=>{

    const {id}=useParams();

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/22222-300x300.jpg",
            name:"Дикий кот",
            price:"89.00 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/1111-300x300.jpg",
            name:"Черный кот",
            price:"89.00 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/03/j-300x169.jpg",
            name:"ВЕТРЯНАЯ МЕЛЬНИЦА",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/02/1-300x169.jpg",
            name:"Самолет",
            price:"7.50 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/08/2022-main-300x169.png",
            name:"Трактор",
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