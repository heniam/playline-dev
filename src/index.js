import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/header';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
