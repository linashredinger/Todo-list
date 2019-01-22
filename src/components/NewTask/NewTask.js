import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'

import './NewTask.scss'

export default class NewTask extends PureComponent{
    static propTypes = {
        value: string,
        onSubmit: func,
        onChange: func
    }

    static defaultProps = {}

    handleOnChange = e => {
        this.props.onChange(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault()
        e.stopPropagation()
        this.props.onSubmit(e)
    }

    render(){
        const { value } = this.props

        return(
            <form className='newTask' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Add to the todo list'
                    className='newTask_input'
                    onChange={this.handleOnChange}
                    value={value}
                />
                <button
                    type='submit'
                    className='newTask_button'
                >
                    Add item
                </button>
            </form>
        )
    }
}