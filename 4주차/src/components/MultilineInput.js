import React from 'react';
import './MultilineInput.css';

function MultilineInput(props) {
	return <textarea className="mInput" placeholder={props.placeholder}></textarea>;
}

export default MultilineInput;