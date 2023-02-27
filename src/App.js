import { useState } from 'react';
import './App.css';
import Checkbox from './Components/Checkbox';
import Input from './Components/Input';
import Length from './Components/Length';
import {numberArray,symbolsArray,lowerCaseArray,upperCaseArray} from './Components/constant'
import Button from './Components/Button';

function App() {
  const [pass, setPass] = useState({
    upperCase: false,
    lowerCase: false,
    number: false,
    symbols: false,
    length:8
  })

  function handlelower() {
    console.log("hioo")
    setPass({...pass,lowerCase:!pass.lowerCase})
  }
  function handlenumber() {
    setPass({...pass,number:!pass.number})
    
  }
  function handleupper() {
    setPass({...pass,upperCase:!pass.upperCase})
    
  }
  function handlesymbol() {
    setPass({...pass,symbols:!pass.symbols})
  }
  function handlelength(value){
    setPass({...pass,length:value})
    
  }
console.log(pass)
const [handelText, setHandelText] = useState("");
const [generatedPass, setGenPass] = useState(false)
const [copied, setCopied] = useState(false);

function passgen(){
  const {upperCase,lowerCase,number,symbols,length} = pass;
  function genword(upperCase,lowerCase,number,symbols,length){
    const availableword=[
      ...(upperCase ? upperCaseArray : []),
        ...(lowerCase ? lowerCaseArray : []),
        ...(number ? numberArray : []),
        ...(symbols ? symbolsArray : []),
    ]
    const shuffleArrayy = (array)=>{
      return array.sort(()=>Math.random()-0.5)
    }
    const char = shuffleArrayy(availableword).slice(0,length);
    setHandelText(char.join(""))
    setGenPass(true)
    setInterval(()=>{
      setGenPass(false)
    },2000)
    return char
  }
  genword(upperCase,lowerCase,number,symbols,length)
}

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <Input handelText={handelText} setHandelText={setHandelText} copied={copied} setCopied={setCopied}/>
      <Length change={handlelength}/>
      <Checkbox label={"Include upperCase"} change={handleupper} />
      <Checkbox label={"Include lowerCase"} change={handlelower} />
      <Checkbox label={"Include number"} change={handlenumber} />
      <Checkbox label={"Include symbols"} change={handlesymbol} />
      <Button onclick={passgen} generated={generatedPass} setGen={setGenPass}/>
    </div>
  );
}

export default App;
