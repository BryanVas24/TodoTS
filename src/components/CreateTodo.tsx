import { useState } from 'react'
import type { TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}
const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        className="new-todo"
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={() => {}}
        onFocus={() => {}}
        placeholder="Ingresa la nueva tarea"
      />
    </form>
  )
}

export default CreateTodo
