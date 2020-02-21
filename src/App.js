import React from 'react';
//import './App.css';
import Person from './Person';
import Counter from './Counter';
import { throwStatement } from '@babel/types';
import AD from './AD.js'
import Search from './Search.js'
import Form from './Form.js'

class App extends React.Component  {
  constructor(){
    super();
    this.state={
      name : 'vaibhav',
      counter : 0,
    } 
  }

  nameChange = (event)=>{
    this.setState({name :event.target.value});
    console.log('event',event);
  }
  increase=()=>{
    console.log('this.',this.state.counter);
    var i_value = this.state.counter;
    this.setState({
      counter : i_value +1,  
      //counter : this.state.counter+1;
    });
  }
  decrease=()=>{
    console.log('dec',this.state.counter);
    if(this.state.counter >0){
      this.setState({
        counter : this.state.counter-1 , 
      })  
    }else{
      alert('counter would be negative')
    }
    
  }
  render(){

    return (
      <div >
        <header >
          <h1>hello</h1>
          {console.log('App',this.state)}
          <Person name= {this.state.name}  change = {this.nameChange} > aaaaa   </Person>
          {/* <Counter increase ={this.increase} decrease={this.decrease} value={this.state.counter}></Counter>
          <AD></AD>
          <Search> </Search> */}
          <Form> </Form>
          </header> 
      </div>
    );
  }
  
}

export default App;
