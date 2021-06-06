import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://gfx.radiozet.pl/var/radiozetsg/storage/images/filmy/avatar-2-prace-nad-filmem-ukonczone-kiedy-premiera/13923495-1-pol-PL/Prace-na-planie-filmu-Avatar-2-zostaly-ukonczone!-Co-z-premiera-widowiska_articleSM.jpg' alt='avatar'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>


    )
}

export default Post;