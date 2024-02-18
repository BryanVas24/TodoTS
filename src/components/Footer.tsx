import type { filterValue } from '../types'
import Filters from './Filters'
interface Props {
  activeCount: number
  completedCount: number
  filterSelected: filterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: filterValue) => void
}
const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFiltereChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  )
}

export default Footer
