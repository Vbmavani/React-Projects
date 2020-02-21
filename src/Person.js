import React from 'react';
//import TextField from '@material-ui/core/TextField';

const Person =(props)=>{ 
    return(
        <div>
            {console.log('props',props)}
            <h1>asdfaasdf{props.name}</h1>
            {props.children}
            <input  onChange={props.change} />        
            </div>
    )
}

export default Person ;