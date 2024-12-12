import { useState } from 'react'
import { Inputs } from './components/Input'
import './styles/App.scss'
import { Todo } from './components/Model'
import { TodoList } from './components/TodoList'

export function App(){
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }
  return<div className="App">
    <Inputs todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    {todos.map((t)=> <li>{t.todo}</li>)}
    <TodoList todos={todos} setTodos={setTodos} />
  </div>
}