import React from 'react';
import s from "./Post.module.css";

export function Post(props: any) {
    return (
        <div className={s.item}>
            <img src="src/components/Profile/My posts/Post/Post" alt=""/>
<div>
    {props.message}
</div>
            <div>
            <span>like: {props.likeCount}</span>
            </div>
        </div>
    );
}
