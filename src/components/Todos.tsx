import type { TodoID, ListOfTodos, Todo as TodoType } from '../types'
import Todo from './Todo'
export interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoID) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggleCompleteTodo={onToggleCompleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
