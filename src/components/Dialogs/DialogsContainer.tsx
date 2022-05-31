import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export function DialogsContainer(props: any) {
    let state = props.store.getState().messagePage;

    const onSendMessageClickHandler = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch( updateNewMessageTextActionCreator(body) );
    }

    return (
        <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClickHandler}
            messagePage={state}/>



    );
}

