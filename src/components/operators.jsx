import React from 'react';
import Operator from './operator'

const Operators = ({operators, onChange}) => {

    const elems = operators.map( (oper, index) => {
        return <Operator addInInput={onChange} operator={oper} key={index} />
    })
    
    return (<> <br /> {elems}</>)
}
 
export default Operators;