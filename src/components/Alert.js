import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        if(word==="danger"){
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show w-100`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
       
    )
}

export default Alert
