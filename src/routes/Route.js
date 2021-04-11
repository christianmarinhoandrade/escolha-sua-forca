import React from 'react'
import { Route as ReactRoute, Redirect } from 'react-router-dom'
import Home from '../layouts/home'
import Master from '../layouts/master'

function Route(props) {
    const { component: Component, path, home, master } = props

    return (
        <ReactRoute
            path={path}
            render={() => {
                if (home) {
                    return (
                        <Home>
                            <Component />
                        </Home>
                    )
                } else if (master) {
                    return (
                        <Master>
                            <Component />
                        </Master>
                    )
                }
            }}
        />
    )
}

export default Route
