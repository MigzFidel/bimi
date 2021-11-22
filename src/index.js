import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu'
import About from './components/About'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Assets/style.css';
import Layout from './components/Layout/Layout';
import { useNavigate, useLocation} from "react-router-dom";

function Root() {
    const navigate  = useNavigate();
    const location = useLocation();
    useEffect(() => {
      if(location.pathname === "/"){
        navigate("/");
      }
    }, [])

    return (
          <Routes>
            <Route exact path="/" element={< Home />}/>
            <Route path="/menu" element={< Menu />}/>
            <Route path="/about" element={< About />}/>
          </Routes>
    );
}

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Layout>
          <Root/>
        </Layout>
      </HashRouter>
        
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
