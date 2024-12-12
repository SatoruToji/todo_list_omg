import { useRef, useState } from 'react'
import '../styles/Inputs.scss'

interface Props{
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent)=> void
}

export function Inputs({todo, setTodo, handleAdd}: Props){
  const [placeholder, setPlaceholder] = useState('ничего не пиши, 100% не сделаешь')
  const inputRef = useRef<HTMLInputElement>(null)

  return<form onSubmit={
      (e) => handleAdd(e)
    }>
    <input 
      ref={inputRef}
      type="text" 
      placeholder={placeholder}
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      onMouseEnter={()=>
        setPlaceholder('НЕУЖЕЛИ!!!')
      } 
      onMouseLeave={()=>{
        setPlaceholder('иди назуй')
      }}
      className="form__input"
      />
    <button 
      type='submit' 
      className='form__btn'
      >тык</button>
  </form>
}