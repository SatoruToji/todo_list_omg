import { useState } from 'react'
import { Inputs } from './components/Input'
import './styles/App.scss'

export function App(){
  const [todo, setTodo] = useState<string>("")
  return<div className="App">
    <Inputs todo={todo} setTodo={setTodo}/>
  </div>
}