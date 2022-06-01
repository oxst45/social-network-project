import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/state";
import {ActionCreator} from "redux";


// export function DialogsContainer(props: any) {
//     let state = props.store.getState().messagePage;
//
//     const onSendMessageClickHandler = () => {
//         props.store.dispatch(sendMessageActionCreator());
//     }
//     const onNewMessageChange = (body: string) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(body));
//     }
//
//     return (
//         <Dialogs
//             updateNewMessageText={onNewMessageChange}
//             sendMessage={onSendMessageClickHandler}
//             messagePage={state}/>
//     );
// };

const mapStateToProps = (state: StateType) => {
    return {
        messagePage: state.messagePage,
    }
}

type MapDispatchToPropsType = (ActionCreator: { type: string }) => {}
const mapDispatchToProps = (dispatch: MapDispatchToPropsType) => {
    return {
        updateNewMessageText: () => {
             dispatch(sendMessageActionCreator());
        },
        sendMessage: (body: string) => {
          dispatch(updateNewMessageTextActionCreator(body));
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

