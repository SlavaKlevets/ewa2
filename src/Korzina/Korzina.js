import React from "react";
import style from "./Korzina.module.css";

export const Korzina=({korzina})=>{

    let corz=korzina.map(item=><div className={style.wrapper4}><img src={item.img} alt=""/>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
    </div>);

    return(
        <div className={style.ddd}>
            {korzina.length==0 ? <h1 className={style.pusta}>В коррзине нет товаров</h1>:corz}
        </div>
    )
}