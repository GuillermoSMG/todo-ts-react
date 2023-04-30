import { type FilterTypes } from '../types'
import Filters from './Filters'

interface Props {
  completedCount: number
  activeCount: number
  filterSelected: FilterTypes
  handleFilterChange: (filter: FilterTypes) => void
  onClearCompleted: () => void
}

const Footer: React.FC<Props> = ({ filterSelected, activeCount = 0, onClearCompleted, completedCount = 0, handleFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} tareas pendientes</strong>
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button className='clear-completed'
          onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        )
      }
    </footer>
  )
}

export default Footer
