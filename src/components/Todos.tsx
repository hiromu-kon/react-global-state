/* react */
import { useEffect, useState } from 'react';
/* axios */
import axios from 'axios';
/* type */
import { Todo } from '../types/Todo'

/**
 * Todoリスト
 *
 * @returns
 */
export const Todos = () => {
  const [todos, setTodos] = useState<Todo []>([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setTodos(res.data)
      }).catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      <h1>Todoリスト</h1>
      {todos.map(todo => 
        <p key={todo.id}>{JSON.stringify(todo, null, 4)}</p>
      )}
    </div>
  )
}
