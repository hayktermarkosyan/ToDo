import './App.css';
import {useState} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn BJJ',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn Grappling',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn Judo',
      isCompleted: false
    }
  ])

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text,
            isCompleted: false
          }
        ])
      }} />
      <TodoList 
        todos={todos}
        onChange={(newTodo) => {
          setTodos(todos.map(todo => {
            if(todo.id === newTodo.id) {
              return newTodo
            }
            return todo
          }))
        }}
        onDelete={(todo) => {
          setTodos(todos.filter(t => t.id !== todo.id))
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter(todo => !todo.isCompleted))
      }} />
    </div>
  );
}

export default App;
