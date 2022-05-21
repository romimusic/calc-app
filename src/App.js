/* eslint no-eval: 0 */
import React, {useState} from 'react'
import Result from './componets/Result'
import MathOperations from './componets/MathOperations'
import SpecialsFunctions  from './componets/SpecialsFunctions'
import Number from './componets/Number'
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
  
  return (
    <main className="container">
      <h1 className="title"> Calculator </h1>
      <Result value={value} />
      <div className="calc_container">
        <div className="values_container">
            <Number onClickNumber={ number => {
              setResult(`${result}${number}`)}
              } />
            <SpecialsFunctions onClear={clear => {
              setResult('');}
            } onDeleted={deleted => {
            if (result.length > 0 ) {
              const newResult= result.substring(0, result.length - 1) 
              setResult(newResult)
            }
           } } />    
        </div>
        
        <MathOperations 
          onClickOperations= {operation => {
            setResult(`${result}${operation}`)}
          } 
          onClickEqual= {equal => {
            setResult(eval(result).toString())}
          } />
      </div>
    </main>
  );
}

export default App;
