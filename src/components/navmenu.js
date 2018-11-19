import React from "react";
import {NavLink,Route,Switch} from "react-router-dom"
import ERROR from "./error"



const NavMenu=(props)=>{
    let NestedClass="nestedNone"
    if (props.show){
      NestedClass="nestedBlock"
    }
return(
    <div>
    <div className='container'>
    {props.link.map((el,i)=>(
        el.active?<NavLink key={i} to={el.link} exact  ><div style={{color:'blue'}}><div onClick={props.click}>{el.label}</div><div className={NestedClass}>{el.nested_list.map((el,i)=><div key={i}>{el}</div>)}</div></div></NavLink>:<NavLink key={i} to={el.link} ><div ><div style={{color:'black'}} >{el.label}</div><div className={NestedClass}>{el.nested_list.map((el,i)=><div key={i}>{el}</div>)}</div></div></NavLink>))}
    </div>
      <Switch>
      {props.link.map((el,i)=>(<Route key={i} path={el.link} component={el.compo} exact/>))}
        <Route  component={ERROR}/>
      </Switch>
      </div>
    )  
}
export default NavMenu;
