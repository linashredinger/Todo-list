import React, { PureComponent } from 'react'
import { string, bool, number, func } from 'prop-types'

import DeleteButton from '../DeleteButton'

import './TodoItem.scss'

export default class TodoList extends PureComponent{
    static propTypes = {
        id: number,
        text: string,
        completed: bool,
        onCheck: func,
        onDeleteTask: func,
    }

    static defaultProps = {}

    handleOnCheck = e => {
        this.props.onCheck(this.props.id)
    }

    handleOnDelete = e => {
        this.props.onDeleteTask(this.props.id)
    }

    render(){
        const { text, completed } = this.props

        return(
            <li className='todoItem'>
                {text}
                <div>
                    <label className='todoItem_label'>
                        <input type='checkbox' className='todoItem_label__checkbox' onChange={this.handleOnCheck} checked={completed} />
                    </label>
                    <DeleteButton onDelete={this.handleOnDelete}/>
                </div>
            </li>
        )
    }
}