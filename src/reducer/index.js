import { createReducer } from 'redux-act'

import { store } from './utils'

import {
    addNewTask,
    onInputChange,
    completeTask,
    deleteTask,
} from './actions'

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    inputField: '',
}

// ADD NEW TASK
const handleAddNewTask = state => {
    const newState = {...state}
    newState.inputField = ''
    newState.tasks = [...state.tasks]
    newState.tasks.unshift({
        text: state.inputField,
        completed: false,
    })
    store(newState.tasks)
    return (
        newState
    )
}

const handleOnInputChange = (state, payload) => ({
    ...state,
    inputField: payload,
})

// COMPLETE TASK
const handleCompleteTask = (state, payload) => {
    const newState = {...state}
    newState.tasks = [...state.tasks]
    newState.tasks[payload].completed = !newState.tasks[payload].completed
    store(newState.tasks)
    return (
        newState
    )
}

// DELETE TASK
const handleDeleteTask = (state, payload) => {
    const newState = {...state}
    newState.inputField = ''
    newState.tasks = [...state.tasks]
    newState.tasks.splice(payload, 1)
    store(newState.tasks)
    return (
        newState
    )
}

const actions ={
    [addNewTask]: handleAddNewTask,
    [onInputChange]: handleOnInputChange,
    [completeTask]: handleCompleteTask,
    [deleteTask]: handleDeleteTask,
}

const reducer = createReducer(actions, initialState)

export default reducer
