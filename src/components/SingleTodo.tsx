import { Todo } from './Model'
import React, {useEffect, useRef, useState} from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { MdDownloadDone } from "react-icons/md"
import '../styles/miniCard.scss'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export function SingleTodo({todo, todos, setTodos}: Props){
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const handleDone = (id: number) =>{
        setTodos(
          todos.map((todo)=>
            todo.id === id ? {...todo, isDone: !todo.isDone}: todo
      )
    )
  }
  const handleDelete = (id: number) =>{
    setTodos(todos.filter((todo)=> todo.id !== id))


  }
  const handleEdit = (e: React.FormEvent, id: number) => {
    setTodos(
      todos.map((todo) => 
        todo.id===id?{...todo,todo:editTodo}: todo 
    ))
  }
  useEffect(()=>{
    inputRef.current?.focus()
  }, [edit])
  const inputRef = useRef<HTMLInputElement>(null)

  return <form className='miniCard' >
      {edit ?  (
        <input 
          ref={inputRef}
          value={editTodo} 
          onChange={(e)=>{handleEdit(e, todo.id)}} 
          className='miniCard__edit'/>
      ) : todo.isDone ?  (
          <s className='miniCard__text'>{todo.todo}</s>
        ) : (
          <span className='miniCard__text'>{todo.todo}</span>
        ) 
      }

      
    <span className='miniCard__text'>{todo.todo}</span>
      {todo.todo}
      <div>
        <span className="miniCard__text-icon" onClick={()=>{
          if(!edit && todo.isDone){
            setEdit(!edit)
          }
        }}>
          <AiFillEdit />
        </span>
        <span className="miniCard__text-icon" onClick={()=>handleDelete(todo.id)}>
          <FaTrash />
        </span>
        <span className="miniCard__text-icon" onClick={()=>handleDone(todo.id)}>
          <MdDownloadDone />
        </span>
      </div>
    
  </form>
}