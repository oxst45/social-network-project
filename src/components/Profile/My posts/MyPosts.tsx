import React, {ChangeEvent, ChangeEventHandler, useRef} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {Message} from "../../Dialogs/Messages/Message";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



export function MyPosts(props: any) {
    let postsElements = props.posts.map((post: any) => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>);

    // let newPostElement = useRef(null);
    // // @ts-ignore
    // let text = newPostElement.current.value;
    let addPost = () => {

        props.dispatch(addPostActionCreator());
    }

    const onChangePostHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                <input type="text" value={props.newPostText} onChange={onChangePostHandler}/>
                </div>
                <div>
                <button onClick={addPost}>Add post</button>
                </div>
                <div>
                <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
