import { useState } from 'react'
import Todos from './components/Todos'
import Footer from './components/Footer'
import type { TodoID, TodoTitle, Todo as TodoType, filterValue } from './types'
import { TODO_FILTERS } from './consts'
import Header from './components/Header'

const mocktodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]

// esto de aca abajo es el retorno de la función (tambien podes usar JSX.Element pero no deja usar props creo y la converti a una arrow function )
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocktodos)
  const [filterSelected, setFilterSelected] = useState<filterValue>(
    TODO_FILTERS.All
  )
  // función para remover elementos
  const handleRemove = ({ id }: TodoID): void => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: filterValue): void => {
    setFilterSelected(filter)
  }
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filterTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  // remueve los completados
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }
  // agrega nuevps
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filterTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        handleFilterChange={handleFilterChange}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
