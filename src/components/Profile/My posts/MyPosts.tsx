import React, {useRef} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {Message} from "../../Dialogs/Messages/Message";


export function MyPosts(props: any) {
    let postsElements = props.posts.map((post: any) => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = useRef(null);
    let addPost = () => {
// @ts-ignore
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    const onChangePostHandler = () => {
        props.updateNewPostText();
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onChangePostHandler}></textarea>
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
