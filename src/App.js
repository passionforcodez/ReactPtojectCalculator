import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [text, setText] = useState("");  // Keep text as string instead of an array
  const [result, setResult] = useState("");

  const addToText = (val) => {
    // Append the clicked value to the existing text
    setText((prevText) => prevText + val);
  };

  const resetInput = () => {
    setResult("");
    setText("");
  };

  const calResult = () => {
    try {
      // Calculate the result of the expression
      setResult(math.evaluate(text));
    } catch (error) {
      setResult("Error");
    }
  };

  const buttonColor = "orange";

  return (
    <>
      <div>
        <h1>Calculator</h1>
      </div>
      <div className="App">
        <div className="calc-wrapper">
          <Input text={text} result={result} />
          <div className="row">
            <Button symbol="7" handleClick={addToText} />
            <Button symbol="8" handleClick={addToText} />
            <Button symbol="9" handleClick={addToText} />
            <Button symbol="/" color={buttonColor} handleClick={addToText} />
          </div>
          <div className="row">
            <Button symbol="4" handleClick={addToText} />
            <Button symbol="5" handleClick={addToText} />
            <Button symbol="6" handleClick={addToText} />
            <Button symbol="*" color={buttonColor} handleClick={addToText} />
          </div>
          <div className="row">
            <Button symbol="1" handleClick={addToText} />
            <Button symbol="2" handleClick={addToText} />
            <Button symbol="3" handleClick={addToText} />
            <Button symbol="+" color={buttonColor} handleClick={addToText} />
          </div>
          <div className="row">
            <Button symbol="0" handleClick={addToText} />
            <Button symbol="." handleClick={addToText} />
            <Button symbol="=" handleClick={calResult} />
            <Button symbol="-" handleClick={addToText} color={buttonColor} />
          </div>
          <Button symbol="Clear" handleClick={resetInput} />
        </div>
      </div>
    </>
  );
};

export default App;