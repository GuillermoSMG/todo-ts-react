import { type TodoTitle } from '../types'
import { useState } from 'react'

interface Props {
  saveTodo: (title: TodoTitle) => void
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
        <input className='new-todo'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
            onKeyDown={() => {}}
            placeholder='¿Qué quieres hacer?'
            autoFocus
            />
    </form>
  )
}

export default CreateTodo
