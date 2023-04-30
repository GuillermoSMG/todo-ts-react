import { useState } from 'react'
import ToDos from './components/ToDos'
import { type FilterTypes, type TodoId, type TodoTitle, type ToDo as ToDoType } from './types'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'
import Header from './components/Header'

const toDos = [
  {
    id: '1',
    title: 'ToDo 1',
    completed: true
  },
  {
    id: '2',
    title: 'ToDo 2',
    completed: false
  },
  {
    id: '3',
    title: 'ToDo 3',
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(toDos)
  const [filterSelected, setFilterSelected] = useState<FilterTypes>(TODO_FILTERS.ALL)

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<ToDoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
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

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterTypes): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

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
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <ToDos todos={filteredTodos}
        onRemove={handleRemove}
        onToggleCompleted={handleCompleted} />
      <Footer
      filterSelected={filterSelected}
      handleFilterChange={handleFilterChange}
      completedCount={completedCount}
      onClearCompleted={handleRemoveCompleted}
      activeCount={activeCount} />
    </div>
  )
}

export default App
