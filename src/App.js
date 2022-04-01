
import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Contact from "./components/Contact";
import "./css/style.css";

import {BrowserRouter,  NavLink, Route, Routes} from "react-router-dom"
import SingleUser from './components/SingleUser';
import Profile from './components/Profile';
import ProtectRoute from './components/ProtectRoute';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>React-Router-DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/users"> Users </NavLink></li>
        <li><NavLink to="/contact"> Contact </NavLink></li> 
         <li><NavLink to="/profile"> Profile </NavLink></li> 
      </ul>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
      <Route path="/users" element={<ProtectRoute><Users/></ProtectRoute>}>
         <Route path="/users/:name" element={<SingleUser/>}/>
      </Route>  
      <Route path="/profile" element={<ProtectRoute><Profile/></ProtectRoute>}/>
     
   </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;