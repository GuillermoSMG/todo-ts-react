import { type TODO_FILTERS } from './consts'

export interface ToDo {
  id: string
  title: string
  completed: boolean
}

export type TodoTitle = Pick<ToDo, 'title'>
export type TodoId = Pick<ToDo, 'id'>
export type TodoCompleted = Pick<ToDo, 'completed'>

export type ListOfToDos = ToDo[]

export type FilterTypes = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
