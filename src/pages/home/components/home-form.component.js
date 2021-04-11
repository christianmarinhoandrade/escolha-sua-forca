import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import actions from '~/pages/master/store/master.actions'

import * as S from '../styles'

function HomeFormComponent(props) {
    let history = useHistory()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.isLuke(null))
    }, [])

    const onClick = () => {
        history.push('/master')
    }

    return (
        <>
            <S.Title>
                Welcome to <S.TitleBold>iClinic</S.TitleBold>
            </S.Title>
            <S.SubTitle>FRONTEND CHALLENGE</S.SubTitle>
            <S.Button onClick={onClick}>
                <S.LabelButton>START</S.LabelButton>
            </S.Button>
        </>
    )
}

export default HomeFormComponent
