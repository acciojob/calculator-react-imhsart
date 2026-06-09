import React, { useRef, useState } from "react";
import '../styles/App.css'
const App = () => {
  const [expression, setExpression] = useState('')
  const operandOneRef = useRef(null)
  const operandTwoRef = useRef(null)
  const operatorRef = useRef('')
  function handleClick(e){
    const map = {
      '+' : (a,b) => a+b,
      '-' : (a,b) => a-b,
      '*' : (a,b) => a*b,
      '/' : (a,b) => a/b
    }
    let val = e.target.value
    if(val === 'C'){
      setExpression('')
      operandOneRef.current = null
      operandTwoRef.current = null
      operatorRef.current = ''
      return
    }
    if(val === '='){
      let idx = expression.indexOf(operatorRef.current)
      operandTwoRef.current = Number(expression.slice(idx+1))
      let res = map[operatorRef.current](operandOneRef.current,operandTwoRef.current)
      setExpression(res)
    }else if(val in map){
      operandOneRef.current = Number(expression.slice())
      operatorRef.current = val
      setExpression(prev => prev+val)
    }else{
      setExpression(prev => prev+val)
    }
    
  }
  return (
    <div className="container">
      <div className="display-screen">{expression}</div>
      <div className="keypad">
        <button className="one" value='C' onClick={handleClick}>C</button>
        <button className="one" value='/' onClick={handleClick}>/</button>
        <button className="one" value='*' onClick={handleClick}>*</button>
        <button className="one" value='-' onClick={handleClick}>-</button>
        <button className="one" value='7' onClick={handleClick}>7</button>
        <button className="one" value='8' onClick={handleClick}>8</button>
        <button className="one" value='9' onClick={handleClick}>9</button>
        <button className="two" value='+' onClick={handleClick}>+</button>
        <button className="one" value='4' onClick={handleClick}>4</button>
        <button className="one" value='5' onClick={handleClick}>5</button>
        <button className="one" value='6' onClick={handleClick}>6</button>
        <button className="one" value='1' onClick={handleClick}>1</button>
        <button className="one" value='2' onClick={handleClick}>2</button>
        <button className="one" value='3' onClick={handleClick}>3</button>
        <button className="two" value='=' onClick={handleClick}>=</button>
        <button className="one" value='0' onClick={handleClick}>0</button>
        <button className="one" value='.' onClick={handleClick}>.</button>
        <button className="one"></button>
      </div>
    </div>
  )
}

export default App