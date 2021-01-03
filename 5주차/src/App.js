import React from "react";
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TimelinePage from "./pages/TimelinePage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
        <div className="header">
            <div className="logo">
                J J U T O P I A
            </div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/timeline">타임라인</Link>
                </li>
                <li>
                    <Link to="/mypage">마이페이지</Link>
                </li>
            </ul>
        </div>
        <Route path="/" component={MainPage} exact />
        <Route path="/timeline" component={TimelinePage} />
        <Route path="/mypage" component={MyPage} />
    </div>
  );
}

export default App;
