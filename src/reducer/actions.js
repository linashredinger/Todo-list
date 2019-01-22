import { createAction } from 'redux-act'

export const addNewTask = createAction('addNewTask')

export const onInputChange = createAction('onInputChange')

export const completeTask = createAction('completeTask')

export const deleteTask = createAction('deleteTask')
