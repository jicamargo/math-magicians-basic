import React from 'react';
import '../calculator.css';
import Button from './Button';
import Operator from './Operator';
import Display from './Display';

function Calculator() {
  return (
    <div className="calculator">
      <div className="row display-container">
        <Display />
      </div>
      <div className="row">
        <Button type="reset" text="AC" />
        <Button type="plus-minus" text="+/-" />
        <Button type="operator" text="%" />
        <Operator text="/" className="yellow" />
      </div>
      <div className="row">
        <Button type="number" text="7" />
        <Button type="number" text="8" />
        <Button type="number" text="9" />
        <Operator text="X" className="yellow" />
      </div>
      <div className="row">
        <Button type="number" text="4" />
        <Button type="number" text="5" />
        <Button type="number" text="6" />
        <Operator text="-" className="yellow" />
      </div>
      <div className="row">
        <Button type="number" text="1" />
        <Button type="number" text="2" />
        <Button type="number" text="3" />
        <Operator text="+" className="yellow" />
      </div>
      <div className="row">
        <Button type="number wide" text="0" />
        <Button type="number" text="." />
        <Operator type="result" text="=" className="yellow" />
      </div>
    </div>
  );
}

export default Calculator;
