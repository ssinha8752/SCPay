import React from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';


const LoginForm=()=>{
  return (
    <div>
    <Header/>
    <Login/>
    <Footer/>
    </div>
  );
}

export default LoginForm;

