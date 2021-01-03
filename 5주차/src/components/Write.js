import React from 'react';
import './Write.css';

export const Write = (props) => {

    return <div className="write">
        <input type="text" placeholder=" 작성자" value={props.setOwner} onChange={props.onChangeOwner}/>
        <textarea placeholder="내용" value={props.setContent} onChange={props.onChangeContent}></textarea>
        <input className="button" type="button" value="등록" onClick={props.writeFunc}/>
    </div>;
};