export let store = {
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
    getState () {
        return this._state;
},
    _callSubscriber (state: StateType) {
    },

     addPost (postMessage: string) {
        const newPost: PostsDataType = {
            id: 7,
            message: postMessage,
            likeCount: 0
        }
         this._state.profilePage.postsData.push(newPost);
        this._callSubscriber(this._state);
         this._state.profilePage.newPostText = "";
    },
     updateNewPostText (newText: string) {
         this._state.profilePage.newPostText = newText;
         this._callSubscriber(this._state);
    },

    subscribe (observer: ObserverType) {
        this._callSubscriber = observer;
    }
}


export type StoreType = {
    _state: StateType
    getState: () => StateType
    allSubscriber: (state: StateType) => void
        addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: ObserverType) => void
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
export type MessagePageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type SidebarType = {}
export type PostsDataType = {
    id: number
    message: string
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
export type ObserverType = (state: StateType) => void


