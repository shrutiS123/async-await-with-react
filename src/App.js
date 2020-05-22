import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName } from './actions/myaction'

function App(props) {
  console.log(props)
  return (
    <div className="App">
     hello
     <h1>my name {props.myname}</h1>
     <button onClick={()=> {props.chnageName()}}>chnage name</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname:state.name 
  } //use nmae of data from reducer componenet and here use in App  us orops
}

const mapDispatchToProps = (dispatch) => {
  return {
    chnageName: () => { dispatch(anotherName()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order component recives component here connect recives appp
