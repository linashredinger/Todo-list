import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    addNewTask,
    onInputChange,
} from '../../reducer/actions'

import NewTask from '../../components/NewTask'

class NewTaskContainer extends PureComponent {
    static propTypes = {
        addNewTask: func,
        onInputChange: func,
        inputValue: string,
    }

    static defaultProps = {}

    render() {
        const { addNewTask, onInputChange, inputValue } = this.props

        return(
            <>
                <NewTask
                    onSubmit={addNewTask}
                    onChange={onInputChange}
                    value={inputValue}
                />
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
        inputValue: state.inputField
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addNewTask,
    onInputChange
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(NewTaskContainer)
