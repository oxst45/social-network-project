import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export function DialogItem(props: any) {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}