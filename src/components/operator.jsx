import React from 'react';

const Operator = ({operator, key, addInInput}) => {
    return ( <button key={key} onClick={addInInput}>{operator}</button> );
}
 
export default Operator;