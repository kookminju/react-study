import React from 'react';
import './Feed.css';

export const Feed = (props) => {
    return <div className="flex">
        <div className="feed">
            <div className="writer">작성자 : {props.name}</div>
            <div className="content">내용 : {props.body}</div>
        </div>
    </div>;
};