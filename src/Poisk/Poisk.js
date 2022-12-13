import React from "react";
import style from "./Poisk.module.css";

export const Poisk = ({searchValue, setSearchValue}) => {

    return (
        <div className={style.wrapper}>
            <form action="">
                <input type="text" autoFocus placeholder="введите название товара" className={style.poiskInput}
                       onChange={(e) => {
                           setSearchValue(e.target.value)
                       }} value={searchValue}/>
            </form>
        </div>
    )
}