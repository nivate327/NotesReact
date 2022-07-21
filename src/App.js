
import './components/basics/style.css';
//import Newreact from './Newreact';
import Card from "./components/basics/Cards";
import Arr from "./components/basics/Arr";
import Netflix from './components/basics/Netflix';
import Amzon from './components/basics/Amzon';
import { useEffect, useState } from 'react';
import Todo from './components/basics/Todo';
import IncreDecre from './components/basics/IncreDecre';
import Accordian from "./components/basics/accordian/Accordian";
import Notes from './components/basics/Google Keep Clone/Notes';
import ComA from "./components/basics/pokemonapi/ComA";
import Quote from './components/basics/QuoteApp/Quote';
import {Route, Switch} from "react-router-dom";
import About from './components/basics/reactRouter/About';
import Contact from './components/basics/reactRouter/Contact';

function App() {


  return (
    <>
        <Notes/>  
     {/* <Todo/> 
     <Accordian/>
   
      <ComA/>
    <Quote/>


  <Switch>
    <Route exact path="/" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Switch>*/}
    </>
  );
}


export default App;
