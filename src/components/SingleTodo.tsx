import { Todo } from './Model'
import React from 'react'
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

  return <form className='miniCard'>
    <span className='miniCard__text'>
      {todo.todo}
      <div>
        <span className="miniCard__text-icon">
          <AiFillEdit />
        </span>
        <span className="miniCard__text-icon">
          <FaTrash />
        </span>
        <span className="miniCard__text-icon">
          <MdDownloadDone />
        </span>
      </div>
    </span>
  </form>
}