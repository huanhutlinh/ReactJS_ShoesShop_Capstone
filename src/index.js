import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Carts from './pages/Carts/Carts';
import Detail from './pages/Detail/Detail';
import Home from  './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
            <Route index element={<Home/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='search' element={<Search/>}></Route>
            <Route path='detail'>
              <Route path=':id' element={<Detail/>}></Route>
            </Route>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='cart' element={<Carts/>}></Route>
            <Route path='*' element={<Navigate to=""/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);


