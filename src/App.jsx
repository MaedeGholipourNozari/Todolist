import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList=[{
  id: 1,
  title: 'Learn React' 
}, {
  id: 2,
  title: 'Learn Vite' 
}
, {
  id: 3,
  title: 'Learn Pthon' 
}]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Todo List</h1>
     <ul>
      {todoList.map(todo => (
         <li key={todo.id}>{todo.title}</li>
      ))}
     </ul>
    </>
  )
}

export default App
