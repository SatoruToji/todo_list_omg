import { Todo } from "./Model"
import "../styles/Card.scss"
import { SingleTodo } from "./SingleTodo"

interface Props{
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export function TodoList({todos, setTodos}: Props){

  return <div className="Card">
    {todos.map(todo => (
      <SingleTodo 
        todo={todo} 
        key={todo.id} 
        todos={todos}  
        setTodos={setTodos}
      />
    ))}
  </div>
}