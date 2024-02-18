import React from 'react'
import { type TodoID, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoID) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}
const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        checked={completed}
        className="toggle"
        onChange={(e) => {
          onToggleCompleteTodo({ id, completed: e.target.checked })
        }}
      />
      <label htmlFor="toggle">{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      ></button>
    </div>
  )
}

export default Todo
