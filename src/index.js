import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Home from './components/Home';
import Menu from './components/Menu'
import About from './components/About'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/style.css';
import Layout from './components/Layout/Layout';

function Root() {
    return (
        <Routes>
            <Route exact path="/bimi" element={< Home />}/>
            <Route path="/bimi/menu" element={< Menu />}/>
            <Route path="/bimi/about" element={< About />}/>
        </Routes>
    );
}

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Root/>
        </Layout>
      </BrowserRouter>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
