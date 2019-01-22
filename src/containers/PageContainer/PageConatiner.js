import React, { PureComponent } from 'react'
import { func, arrayOf, shape } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { todoListSelector } from '../../reducer/selectors'

import { completeTask, deleteTask } from '../../reducer/actions'

import TodoList from '../../components/TodoList'

class PageContainer extends PureComponent {
    static propTypes = {
        tasks: arrayOf(shape({})),
        completeTask: func,
        deleteTask: func,
    }

    static defaultProps = {}

    render() {
        const { tasks, completeTask, deleteTask } = this.props

        return(
            <>
                <TodoList
                    tasks={tasks}
                    onCompleteTask={completeTask}
                    onDeleteTask={deleteTask}
                />
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
        tasks: todoListSelector(state),
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    completeTask,
    deleteTask
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
