import React from 'react'
import { useSelector } from 'react-redux'
import GlobalStyle from './global'

import selector from '~/pages/master/store/master.selector'

function Global() {
    const isLuke = useSelector(selector.master)
    return <GlobalStyle isLuke={isLuke} />
}

export default Global
