import { type TodoId, type ListOfToDos, type ToDo as ToDoType } from '../types'
import ToDo from './ToDo'

interface Props {
  todos: ListOfToDos
  onToggleCompleted: ({ id, completed }: Pick<ToDoType, 'id' | 'completed'>) => void
  onRemove: ({ id }: TodoId) => void
}

const ToDos: React.FC<Props> = ({ todos, onRemove, onToggleCompleted }) => {
  return (
    <ul className='todo-list'>
        {todos.map(todo => (
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                <ToDo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onRemove={onRemove} onToggleCompleted={onToggleCompleted} />
            </li>
        )
        )}
    </ul>
  )
}

export default ToDos
