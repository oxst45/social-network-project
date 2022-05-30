export let store: StoreType = {
    _state: {

        profilePage: {
            postsData: [
                {id: 1, message: 'Hello', likeCount: 12},
                {id: 2, message: 'Good morning', likeCount: 11}
            ],
            newPostText: "just a string"

        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Maria'},
                {id: 2, name: 'Elena'}
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'}
            ]
        },
        sidebar: {}
    },
    _callSubscriber(state: StateType) {
    },

    getState() {
        return this._state;
    },
    subscribe(observer: ObserverType) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsDataType = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = "";
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: text}
}

export type ObserverType = (state: StateType) => void
export type ActionType = {
    type: string
    newText?: string
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
    sidebar: SidebarType
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string | undefined
}
export type MessagePageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
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
    message: string
}

// export const state: StateType = {
//
//     profilePage: {
//         postsData: [
//             {id: 1, message: 'Hello', likeCount: 12},
//             {id: 2, message: 'Good morning', likeCount: 11}
//         ],
//         newPostText: "just a string"
//
//     },
//     messagePage: {
//         dialogsData: [
//             {id: 1, name: 'Maria'},
//             {id: 2, name: 'Elena'}
//         ],
//         messagesData: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'How are you?'}
//         ]
//     },
//     sidebar: {}
// }



