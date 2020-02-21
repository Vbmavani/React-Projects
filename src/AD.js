import React from 'react';
import Button from '@material-ui/core/Button';

class AD extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            item:''
        };
    }
    itemChange=(event)=>{
        this.setState({item:event.target.value});
    }
    AddItem=()=>{
        console.log('addItem');
        var list1=this.state.list;
        list1.push(this.state.item);
        this.setState({list: list1 } )
    }
    render(){
        console.log('this.props',this.state);
        const displayitems =this.state.list.map(item=> <li>{item}</li>);
        return(
             <div>
                 <input onChange={this.itemChange}/>
                 <Button variant="contained" onClick={this.AddItem}> Default</Button>
                 { 
                     this.state.list.map(item=> <li>{item}</li>)}
             </div> 
        )
    }
}

export default AD;