import { FILTER_BUTTONS } from '../consts'
import { type FilterTypes } from '../types'

interface Props {
  onFilterChange: (filter: FilterTypes) => void
  filterSelected: FilterTypes
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return (
                <li key={key}>
                    <a href={href} className={className} onClick={e => {
                      e.preventDefault()
                      onFilterChange(key as FilterTypes)
                    }}>{literal}</a>
                </li>
          )
        })
      }
    </ul>
  )
}

export default Filters
