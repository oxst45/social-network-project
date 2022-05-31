import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


export function Dialogs(props: any) {
    let state = props.store.getState().messagePage;

    let dialogsElements = state.dialogsData.map((dialog: any) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map((message: any) => <Message message={message.message} id={message.id}/>);
    const messageBody = state.newMessageText;

    const onSendMessageClickHandler = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value.toString();
        console.log();

        props.store.dispatch( updateNewMessageTextActionCreator(body) );
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <input
                            onChange={onNewMessageChange}
                            type="text"
                            placeholder="Enter your message"
                            value={messageBody}/>
                        <button onClick={onSendMessageClickHandler}>Send</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>


    );
}

