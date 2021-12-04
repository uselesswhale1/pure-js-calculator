import React from 'react';

const Input = ({inputValue = 0}) => {
    // console.log(inputValue)
    
    return (<>
    <br />
    <input type="textarea" style={{width: 80+'px', overflow:'hidden'}}value={inputValue} />
    </> );
}
 
export default Input;