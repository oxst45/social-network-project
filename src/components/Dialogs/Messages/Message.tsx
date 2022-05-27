import s from "../Dialogs.module.css";
import React from "react";

export function Message(props: any) {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    );
}