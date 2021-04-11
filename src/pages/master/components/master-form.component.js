import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import IconReturnBlack from '~/assets/icons/icon-arrow-grey-black.svg'
import IconReturnWhite from '~/assets/icons/icon-arrow-grey-white.svg'
import DarthVader from '~/assets/img/darth-vader.png'
import LukeSkyWalker from '~/assets/img/luke-skywalker.png'

import actions from '../store/master.actions'
import selector from '../store/master.selector'

import service from '../master.services'

import * as S from '../styles'

function MasterFormComponent(props) {
    const [initial, setInitial] = useState(true)
    const [loading, setLoading] = useState(false)
    const [luke, setIsLuke] = useState(false)
    const [darth, setIsDarth] = useState(false)

    const isLuke = useSelector(selector.master)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!darth && luke) {
            dispatch(actions.isLuke(true))
            setLoading(false)
            setInitial(false)
        } else if (!luke && darth) {
            dispatch(actions.isLuke(false))
            setLoading(false)
            setInitial(false)
        } else if (luke && darth) {
            setIsLuke(false)
            setIsDarth(false)
        }
    }, [luke, darth])

    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        const getData = async () => {
            await Promise.all([
                service.getLuke().then((response) => {
                    setIsLuke(true)
                }),
                service.getDarth().then((response) => {
                    setIsDarth(true)
                }),
            ])
        }

        if (loading) getData()
    }, [loading])

    const onClick = () => {
        setLoading(true)
    }

    const Description = (props) => {
        const { name } = props
        return (
            <S.Label isLuke={isLuke}>
                Your master is <S.LabelBold>{name}</S.LabelBold>
            </S.Label>
        )
    }

    if (initial) return <div>Loading...</div>

    return (
        <S.Main>
            <S.ButtonBack>
                <S.LinkButton isLuke={isLuke} to={'/'}>
                    {isLuke ? (
                        <>
                            <img src={IconReturnBlack} alt="return" /> back
                        </>
                    ) : (
                        <>
                            <img src={IconReturnWhite} alt="return" /> back
                        </>
                    )}
                </S.LinkButton>
            </S.ButtonBack>

            <S.Button
                isLuke={isLuke}
                onClick={onClick}
                disabled={loading}
                loading={loading}
            >
                choose your path again, Padawan
            </S.Button>
            <S.Img src={isLuke ? LukeSkyWalker : DarthVader} alt="return" />
            <Description name={isLuke ? 'Luke Skywalker' : 'Darth Vader'} />
        </S.Main>
    )
}

export default MasterFormComponent
