import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn.js';
import MultilineInput from './components/MultilineInput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<MultilineInput
			placeholder = "내용"
		/>
		<MultilineInput
			placeholder = "솔직한 리뷰 내놔"
		/>
        <Btn 
			name = "클릭해보세요."
		/>
		<Btn 
			name = "취소"
		/>
      </div>
    );
  }
}

export default App;
