import React, { PureComponent } from 'react'

import './Header.scss'

export default class Header extends PureComponent{
    render(){

        return(
            <div className='header'>
                <h1 className='header_title'>
                    Todo list
                </h1>
            </div>
        )
    }
}
