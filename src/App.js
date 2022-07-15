import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./page/home/Home";
import KakaoAuthHandler from "./page/oauth/kakao/KakaoAuthHandler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<div>test!!</div>}/>
        <Route path="/callback/kakao" element={<KakaoAuthHandler/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
