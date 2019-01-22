import React, { PureComponent } from 'react'
import { string, bool, arrayOf, shape, func } from 'prop-types'

import Header from '../Header'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import NewTaskContainer from '../../containers/NewTaskContainer'

import './TodoList.scss'

export default class TodoList extends PureComponent{
    static propTypes = {
        tasks: arrayOf(shape({
            text: string,
            completed: bool,
        })),
        onCompleteTask: func,
        onDeleteTask: func,
    }
    static defaultProps = {
        tasks: [],
    }
    render(){
        const { tasks, onCompleteTask, onDeleteTask } = this.props

        return(
            <div className='todoList'>
                <Header />
                <NewTaskContainer />
                {tasks.length === 0  && (
                    <p className='todoList_message'>Sorry, there is no tasks to do</p>
                )}
                <ul className='todoList_list'>
                    {tasks
                        .map((item, index) =>
                            <TodoItem
                                {...item }
                                key={index}
                                onCheck={onCompleteTask}
                                id={index}
                                onDeleteTask={onDeleteTask}
                            />
                        )}
                </ul>
                <Footer />
            </div>
        )
    }
}