export const store = state => {
    localStorage.setItem('tasks', JSON.stringify(state))
}