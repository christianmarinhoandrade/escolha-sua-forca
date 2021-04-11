import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const SubTitle = styled.div`
    ${({ theme }) => css`
        position: absolute;
        color: ${theme.home.color};
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.35em;
        top: 305px;

        ${media.lessThan('medium')`
        top: 270px;
        font-size: 10px;
        `}

        ${media.lessThan('small')`
        `}
    `}
`

const Title = styled.div`
    ${({ theme }) => css`
        position: absolute;
        color: ${theme.home.color};
        font-size: 72px;
        line-height: 88px;
        top: 210px;

        ${media.lessThan('medium')`
        font-size: 40px;
        line-height: 50px;
        `}

        ${media.lessThan('small')`
        font-size: 25px;
        `}
    `}
`

const TitleBold = styled.label`
    ${({ theme }) => css`
        font-weight: bold;
    `}
`
const Button = styled.button`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        background: ${theme.home.color};
        color: #fff;
        width: 189px;
        height: 56px;
        top: 489px;
        border-radius: 10px;

        ${media.lessThan('medium')`
        top: 420px;
        width: 150px;
        height: 40px;
      `}
    `}
`

const LabelButton = styled.label`
    font-family: Montserrat;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.35em;

    ${media.lessThan('medium')`
    font-size: 15px;
    line-height: 20px;
  `}
`

export { Title, TitleBold, SubTitle, Button, LabelButton }
