import React from "react";
import style from "./Lichnyi.module.css"
import field from "redux-form/lib/Field";

export const Lichnyi=()=>{
    return(
        <div className={style.wrapper}>
            <div>
                <h1>Личный кабинет</h1>
            </div>
            <div className={style.wrapper1}>
                <div>
                    <field className={style.wrapper2}>
                        <h1>Вход</h1>
                        <label for="username"/> Имя пользователя или Email *<label/>
                        <input type="text" placeholder=" Имя пользователя"/>
                        <label htmlFor="username"/> Пароль * <label/>
                        <input type="text" placeholder=" Пароль"/>
                        <p><button>Войти</button></p>
                    </field>
                </div>
                <div>
                    <field className={style.wrapper2}>
                        <h1>Регистрация</h1>
                        <label/> Email *<label/>
                        <input type="text" placeholder=" Email"/>
                        <label htmlFor="username"/> Пароль * <label/>
                        <input type="text" placeholder=" Пароль"/>
                        <p><button>Зарегистрировться</button></p>
                    </field>
                </div>
            </div>
        </div>
    )
}