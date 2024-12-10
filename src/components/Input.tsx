import { useState } from 'react'
import '../styles/Inputs.scss'

interface Props{
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

export function Inputs({todo, setTodo}: Props){
  const [placeholder, setPlaceholder] = useState('ничего не пиши, 100% не сделаешь')
  return<form>
    <input 
      type="text" 
      placeholder={placeholder}
      onMouseEnter={()=>
        setPlaceholder('НЕУЖЕЛИ!!!')
      } 
      onMouseLeave={()=>{
        setPlaceholder('иди назуй')
      }}
      className="form__input"
      />
    <button type='submit' className='form__btn'>тык</button>
  </form>
}