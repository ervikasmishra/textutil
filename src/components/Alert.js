import React from 'react'

export default function Alert(props){
    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
         <div style={{height:'50px'}}>
             {props.mode && <div className={`alert alert-${props.mode.type}`} role="alert" style = {{height:'50px'}}>
            <strong>{capatalize(props.mode.type)}</strong> {props.mode.msg}
         </div>}
         </div>
    )
}
