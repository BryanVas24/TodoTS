import { FILTERS_BUTTONS } from '../consts'
import type { filterValue } from '../types'

interface Props {
  onFiltereChange: (filter: filterValue) => void
  filterSelected: filterValue
}
const Filters: React.FC<Props> = ({ filterSelected, onFiltereChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault()
                onFiltereChange(key as filterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Filters
