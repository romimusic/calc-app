/* eslint no-eval: 0 */
import React, {useState} from 'react'
import Result from './Componets/Result'
import MathOperations from './Componets/MathOperations'
import SpecialsFunctions  from './Componets/SpecialsFunctions'
import Number from './Componets/Number'
import './App.css'
import { words } from 'lodash'

const App=() => {
  // const arrayTextModifyText = useState(""); //array returning in the first position de default value and second position a function for their modification

  // const textToModify = arrayTextModifyText[0];
  // const functionModify = arrayTextModifyText[1];

  //array destructuring is the same of the above 
  const [result , setResult]= useState("");
  const items= words(result, /[^-^+^*^/]+/g)

  const value = items.length > 0 ? items[items.length - 1] : 0;
  console.log("rendering the app" , value);
  return (
    <main className="container">
      <h1 className="title"> Calculator </h1>
      <Result value={value} />
      <div className="calc_container">
        <div className="values_container">
            <Number onClickNumber={ number => {
              console.log("number ", number)
              setResult(`${result}${number}`)}
              } />
            <SpecialsFunctions onClear={clear => {
              console.log("clear ", clear);
              setResult('');}
            } onDeleted={deleted => {
            if (result.length > 0 ) {
              console.log("Delete" , deleted);
              const newResult= result.substring(0, result.length - 1) 
              setResult(newResult)
            }
           } } />    
        </div>
        
        <MathOperations 
          onClickOperations= {operation => {
            console.log("operation: ", operation);
            setResult(`${result}${operation}`)}
          } 
          onClickEqual= {equal => {
            console.log("equal", equal)
            setResult(eval(result).toString())}
          } />
      </div>
    </main>
  );
}

export default App;
