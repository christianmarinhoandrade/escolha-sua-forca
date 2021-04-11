import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

const Main = styled.div`
    ${({ theme, isLuke }) => css`
        display: flex;
        justify-content: center;
    `}
`

const ButtonBack = styled.div`
    position: absolute;
    width: 80px;
    height: 25px;
    left: 68px;
    top: 35px;
    cursor: pointer;

    ${media.lessThan('small')`
        left: 30px;
        top: 15px;
        `}
`

const LinkButton = styled(Link)`
    ${({ theme, isLuke }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        line-height: 22px;
        color: ${isLuke ? theme.master.black : theme.master.white};

        &:focus {
            color: ${isLuke ? theme.master.black : theme.master.white};
        }
    `}
`

const Img = styled.img`
    position: absolute;
    width: 350px;
    height: 350px;
    top: 290px;
    border-radius: 50%;

    ${media.lessThan('medium')`
    width: 250px;
    height: 250px;
    top: 194.9px;
    `}
    ${media.lessThan('small')`
    width: 250px;
    height: 250px;
    top: 120px;
    `}
`

const Button = styled.button`
    ${({ theme, isLuke, loading }) => css`
        position: absolute;
        cursor: pointer;
        background-color: ${isLuke ? theme.master.black : theme.master.white};
        color: ${isLuke ? theme.master.yellow : theme.master.black};
        width: 347px;
        height: 56px;
        top: 175px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        opacity:${loading ? 0.5 : 1}}

        ${media.lessThan('medium')`
        top: 685px;
        `}

        ${media.lessThan('small')`
        width: 220px;
        top: 500px;
        `}
    `}
`

const Label = styled.div`
    ${({ theme, isLuke }) => css`
        position: absolute;
        color: ${isLuke ? theme.master.black : theme.master.white};
        font-size: 36px;
        line-height: 44px;
        top: 720px;

        ${media.lessThan('medium')`
        font-size: 25px;
        top: 546px;
      `}
        ${media.lessThan('small')`
        font-size: 17px;
        top: 400px;
        `}
    `}
`

const LabelBold = styled.label`
    font-weight: bold;
`

export { Main, ButtonBack, Button, LinkButton, Img, Label, LabelBold }
