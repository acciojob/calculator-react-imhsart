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
      if(!operatorRef.current || !(operatorRef.current in map)){
        setExpression('Error')
        return
      }
      let idx = expression.indexOf(operatorRef.current)
      let temp = expression.slice(idx+1)
      if(temp === '' || isNaN(Number(temp))){
        setExpression('Error')
        return
      }

      operandTwoRef.current = Number(temp)
      if(operandOneRef.current === null || isNaN(operandOneRef.current)){
        setExpression('Error')
        return
      }
      let res = map[operatorRef.current](operandOneRef.current,operandTwoRef.current)
      if(!isFinite(res) || isNaN(res)){
        setExpression('Error')
        return
      }
      operandOneRef.current = null;
      operandTwoRef.current = null;
      operatorRef.current = '';
      setExpression(String(res))
    }else if(val in map){
      if (expression === '' || map[expression[expression.length - 1]]) {
      setExpression('Error');
      return;
    }
      operandOneRef.current = Number(expression)
      operatorRef.current = val
      setExpression(prev => prev+val)
    }else{
      if (expression === 'Error') {
      setExpression(val);
      return;
    }
      setExpression(prev => prev+val)
    }
    
  }
  return (
    <div className="Calculator">
      <div className="display-screen" id="calci">{expression}</div>
      <div className="keypad">
        <button className="one" id="btn-C" value='C' onClick={handleClick}>C</button>
        <button className="one" id="btn-div" value='/' onClick={handleClick}>/</button>
        <button className="one" id="btn-mul" value='*' onClick={handleClick}>*</button>
        <button className="one" id="btn--" value='-' onClick={handleClick}>-</button>
        <button className="one" id="btn-7" value='7' onClick={handleClick}>7</button>
        <button className="one" id="btn-8" value='8' onClick={handleClick}>8</button>
        <button className="one" id="btn-9" value='9' onClick={handleClick}>9</button>
        <button className="two" id="plus" value='+' onClick={handleClick}>+</button>
        <button className="one" id="btn-4" value='4' onClick={handleClick}>4</button>
        <button className="one" id="btn-5" value='5' onClick={handleClick}>5</button>
        <button className="one" id="btn-6" value='6' onClick={handleClick}>6</button>
        <button className="one" id="btn-1" value='1' onClick={handleClick}>1</button>
        <button className="one" id="btn-2" value='2' onClick={handleClick}>2</button>
        <button className="one" id="btn-3" value='3' onClick={handleClick}>3</button>
        <button className="two" id="equal" value='=' onClick={handleClick}>=</button>
        <button className="one" id="btn-0" value='0' onClick={handleClick}>0</button>
        <button className="one" id="." value='.' onClick={handleClick}>.</button>
        <button className="one"></button>
      </div>
    </div>
  )
}

export default App