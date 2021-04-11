import React from 'react'

function Layout(props) {
    const { children } = props

    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default Layout
