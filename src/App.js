import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

import View from'./components/products';
import Create from'./components/create';
import Navigation from'./components/Navigation';
import Mainpage from'./components/mainpage';
import Contactus from'./components/Contactus';
import Aboutus from'./components/Aboutus';
//呢個係main app,
//放唔同由其他js exports 出黎既 functions落去 一個個class分門別類
function App() {

  return (
    //整Nav bar 放唔同links

    
    <div className="App">

      <Navigation/>


      <Router>
        <Route path='/' exact render={(props)=> <Mainpage/>} />
        <Route path='/create'  render={(props)=> <Create/>} />
        <Route path='/product' render={(props)=> <View/>} />     
        <Route path='/aboutus'  render={(props)=> <Aboutus/>} />
        <Route path='/contactus'  render={(props)=> <Contactus/>} />
      </Router>

   
      

    </div>
   
  );
}

export default App;
