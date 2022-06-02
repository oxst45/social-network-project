import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";



export const reducers = combineReducers({
    profilePage: ProfileReducer,
    messagePage: DialogsReducer,
    SidebarPage: SidebarReducer
})

export const store: any = createStore(reducers);
// @ts-ignore
window.store = store;

export type ReduxStoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void

    subscribe: (observer: ObserverType) => void
    dispatch: (action: ActionType) => void
    // replaceReduce: any
    // [Symbol.observable]: any
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void

    subscribe: (observer: ObserverType) => void
    dispatch: (action: ActionType) => void
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebarPage: SidebarType
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string | undefined
}
export type MessagePageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageText: string | undefined
}
export type SidebarType = {}
export type PostsDataType = {
    id: number
    message: string | undefined
    likeCount: number
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string | undefined
}

export type ObserverType = (state: StateType) => void

export type ActionType = {
    type: string
    newText?: string
    body?: string
}