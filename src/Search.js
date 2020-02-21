import React from 'react';
import Searchcard from './Searchcard.js'
import Button from '@material-ui/core/Button'
const items =[{name:'no1',
                      address:'address1@gmail.com',
                      mobileno:'1111111111',
                     },{name:'no2',
                     address:'address1@gmail.com',
                     mobileno:'1111111111',
                    },{name:'no3',
                    address:'address1@gmail.com',
                    mobileno:'1111111111',
                   },{name:'no4',
                   address:'address1@gmail.com',
                   mobileno:'1111111111',
                  },{name:'no2',
                  address:'address1@gmail.com',
                  mobileno:'1111111111',
                 },{name:'no1',
                 address:'address1@gmail.com',
                 mobileno:'1111111111',
                },{name:'no5',
                address:'address1@gmail.com',
                mobileno:'1111111111',
               },
               {name:'no1',
               address:'address1@gmail.com',
               mobileno:'1111111111',
              },]


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            list : items,
            value : '',
            searchitem : '',
        })
    }
    changestring=(event)=>{
        this.setState({
            value :event.target.value
        })
    }
    addString=()=>{
        console.log('addString',this.state)
        this.setState({
            searchitem : this.state.value
        })
    }
    render(){
        
        return(<div>
                <input onChange={this.changestring} ></input>
                <Button onClick={this.addString}>Search Item</Button>
                {
                    (this.state.searchitem ==='')?
                    this.state.list.map((item)=>{
                        return <Searchcard details ={item}></Searchcard> 
                    }) :
                    this.state.list.map((item)=>{
                        return (this.state.searchitem ==item.name ) ?<Searchcard details ={item}></Searchcard> : null
                    }) 
                }
            </div>
        )
    }
}

export default Search;