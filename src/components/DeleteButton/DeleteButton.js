import React, { PureComponent } from 'react'
import { func } from 'prop-types'

import './DeleteButton.scss'

export default class DeleteButton extends PureComponent {
    static propTypes = {
        onDelete: func,
    }

    static defaultProps = {}

    render() {
        const { onDelete } = this.props

        return (
            <svg width='24px' height='24px' viewBox='0 0 24 24' className='deleteButton' onClick={onDelete}>
                <path
                    fill='#4d6967'
                    d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'
                />
            </svg>
        )
    }
}
