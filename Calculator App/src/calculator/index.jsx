import "./style.css";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";

const Add = "+";
const Subtract = "-";
const Divide = "/";
const Multiply = "*";
const Equal = "=";

const Operations = [Add, Subtract, Divide, Multiply, Equal];


function Calculator() {
  const [operandA, setOperandA] = useState("");
  const [operandB, setOperandB] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");

  const Nums = [1,2,3,4,5,6,7,8,9,0];
  // shuffle(Nums);
  // console.log(Nums);


  // function shuffle(array) {
  //   let currentIndex = array.length;
  
  //   // While there remain elements to shuffle...
  //   while (currentIndex != 0) {
  
  //     // Pick a remaining element...
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  
  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }

  //   return array;
  // }

  function onInput(value) {
    console.log(operandA);
    if(operandA) {
      
            if(!operandB) {
               
                const lastChar = value.split("").at(-1);
                console.log('1', lastChar);
                setOperandB(Number(lastChar));
                setCurrentNumber(lastChar);
            } else {
                console.log('2', value);
                setCurrentNumber(value);
                setOperandB(Number(value));
            }
    } else {
        setCurrentNumber(value);
    }

    
  }

  function handleNumberClick(number) {
    return ()=> {
        const newValue = `${currentNumber}${number}`;
       
        if(operandA) {
            if(!operandB) {
                setOperandB(Number(number));
                setCurrentNumber(number);
            } else {
              
                setCurrentNumber(newValue);
                setOperandB(Number(newValue));
            }
        } else {
            setCurrentNumber(newValue);
        }
    }
  }

  function handleOperationSelect(type) {
  
    return ()=> {
         setOperation(type);
         if(type === Equal) {
            let res = 0;
            setOperation("");
            if(operation === Add) {
                res = operandA + operandB;
            } else if(operation === Subtract) {
                res = operandA - operandB;
            }  else if(operation === Multiply) {
                res = operandA * operandB;
            }  else if(operation === Divide) {
                res = operandA / operandB;
            }

            setResult(res);
         } else {
            setOperandA(Number(currentNumber));
         }
    }
  }

  return (
    <div>
      <Input value={currentNumber} placeholder="Enter Number" onInput={onInput} />

      <div>
        {Nums.map((val, index) => {
          return <Button onClick={handleNumberClick(val)} key={index} label={val} />;
        })}
      </div>
        Selected Operation {operation}

      <div>
        {Operations.map((o) => {
          return (
            <Button
              onClick={handleOperationSelect(o)}
              key={o}
              label={o}
            />
          );
        })}
      </div>
      Result {result}
    </div>
  );
}

export default Calculator;
