import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Messages/Message";




export function Dialogs(props: any) {
let dialogsElements = props.dialogs.map((dialog: any) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map((message: any) => <Message message={message.message} id={message.id}/>);
return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>


    );
}

