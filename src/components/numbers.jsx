import React from 'react';
import Number from '../components/number'


const Numbers = ({numbers, onChange}) => {
    
    const elems = numbers.map( number => <Number number={number} key={number} onChange={onChange}/>)
// console.log(elems)
    return (<>{elems}</>)
}
 
export default Numbers;