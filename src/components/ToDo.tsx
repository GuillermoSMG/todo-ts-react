import { type TodoId, type ToDo as ToDoType } from '../types'

interface Props extends ToDoType {
  onRemove: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<ToDoType, 'id' | 'completed'>) => void
}

const ToDo: React.FC<Props> = ({ id, title, completed, onRemove, onToggleCompleted }) => {
  return (
    <div className='view'>
        <input
          className='toggle'
          checked={completed}
          type='checkbox'
          onChange={(e) => { onToggleCompleted({ id, completed: e.target.checked }) } }
        />
        <label>{title}</label>
        <button className='destroy' onClick={() => { onRemove({ id }) }}></button>
      </div>
  )
}

export default ToDo
