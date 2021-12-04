import React from 'react';



const Number = ({number, key, onChange}) => {
    
    return ( <button key={key} onClick={onChange}>{number}</button> );
}
 
export default Number;