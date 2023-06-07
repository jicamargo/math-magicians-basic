import React from 'react';
import '../calculator.css';
import Button from './Button';
import Operator from './Operator';
import Display from './Display';
import calculate from './logic/calculate';

function Calculator() {
  const handleClick = (buttonName) => {
    const result = calculate({ total: null, next: null, operation: null }, buttonName);
    console.log(result);
  };


  return (
    <div className="calculator">
      <div className="row display-container">
        <Display />
      </div>
      <div className="row">
        <Button type="reset" text="AC"
          onClick={() => handleClick('AC')}
        />
        <Button type="plus-minus" text="+/-" 
          onClick={() => handleClick('+/-')}
        />
        <Button type="operator" text="%" 
          onClick={() => handleClick('%')}
        />
        <Operator text="/" className="yellow" 
          onClick={() => handleClick('/')}
        />
      </div>
      <div className="row">
        <Button type="number" text="7" 
          onClick={() => handleClick('7')}
        />
        <Button type="number" text="8" 
          onClick={() => handleClick('8')}
        />
        <Button type="number" text="9" 
          onClick={() => handleClick('9')}
        />
        <Operator text="X" className="yellow" 
          onClick={() => handleClick('X')}
        />
      </div>
      <div className="row">
        <Button type="number" text="4"
          onClick={() => handleClick('4')}
        />
        <Button type="number" text="5"
          onClick={() => handleClick('5')}
        />
        <Button type="number" text="6"
          onClick={() => handleClick('6')}
        />
        <Operator text="-" className="yellow"
          onClick={() => handleClick('-')}
        />
      </div>
      <div className="row">
        <Button type="number" text="2" 
          onClick={() => handleClick('2')}
        />        
        <Button type="number" text="3" 
          onClick={() => handleClick('3')}
        />
        <Button type="number" text="1" 
          onClick={() => handleClick('1')}
        />
        <Operator text="+" className="yellow" 
          onClick={() => handleClick('+')}
        />
      </div>
      <div className="row">
        <Button type="number wide" text="0" 
          onClick={() => handleClick('0')}
        />
        <Button type="number" text="." 
          onClick={() => handleClick('.')}
        />
        <Operator type="result" text="=" className="yellow"
          onClick={() => handleClick('=')}
        />
      </div>
    </div>
  );
}

export default Calculator;
