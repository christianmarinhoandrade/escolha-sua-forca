import React from 'react'
import * as S from './styles'

function Layout(props) {
    const { children } = props

    return (
        <>
            <S.Main>{children}</S.Main>
        </>
    )
}

export default Layout
