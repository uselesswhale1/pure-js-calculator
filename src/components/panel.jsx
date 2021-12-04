import React, {useState} from 'react';

import Numbers from '../components/numbers'
import Input from './input.jsx'
import Operators from './operators'
import Reset from './reset'

const Panel = () => {
    // const operator = '+'
    const operators = [ '*', '/', '+', '-',  '^', '%', '=']
    const numbers = [1,2,3,4,5,6,7,8,9,0]

    const [ input, setInput] = useState(0)
    const primer = []

    const handleChange = (event) => {
        const value = event.target.innerHTML

        // console.log(value, isNaN(value))

        if(!isNaN(value)){
            primer.push(Number(value))
            
        }else{
            primer.push(String(value))
        }
        setInput(primer)    
        console.log(primer)
    }

    return (
    <div style={{position:'relative',width:90+'px', border: 1+'px solid black'}}>
        <Numbers numbers={numbers} onChange={handleChange}/>  
        <Operators onChange={handleChange} operators={operators}/>
        <Input inputValue={input}/>
        <Reset />
    </div>
    )
}
 
export default Panel;