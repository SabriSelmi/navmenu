
import React, {Component} from "react";

import Home from "./components/home"
import Service from "./components/service"
import Contact from "./components/contact"
import NavMenu from "./components/navmenu"

import {BrowserRouter} from "react-router-dom"
import './App.css'


const links=[
   {compo:Home, label:'Home', link:'/', active:false, nested_list:[]},{compo:Service,label:'Service', link:'/services', active:true ,nested_list:['For entrepreneurs','For students', 'For hobbyists' ]},{compo:Contact,label:'Contact', link:'/contact', active:false, nested_list:[]}
]




  class App extends Component {
    state={
      NestedOpen:false
    }
        buttonDrawrer=()=>{
          this.setState((prevState)=>{
            return {NestedOpen: !prevState.NestedOpen}
          });
   
        } 
    
    
      
    
    
    render() {
   
 
   return(
  
  
    
    <BrowserRouter>
   
    <NavMenu link={links} click={this.buttonDrawrer} show={this.state.NestedOpen}/>
    
    
    </BrowserRouter>
  
 
  
    );
  }
};

export default App;

        
