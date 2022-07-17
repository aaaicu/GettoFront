import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./page/home/Home";
import Test from "./page/Test";
import KakaoAuthHandler from "./page/oauth/kakao/KakaoAuthHandler";
import { API_HOST } from "./component/oauth/OAuthUrl";
import axios from "axios";

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = API_HOST;
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/callback/kakao" element={<KakaoAuthHandler/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
