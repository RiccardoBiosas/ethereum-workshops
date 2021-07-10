import React from 'react'
import styled from 'styled-components' 
import GAAnalytics from '../../utils/analytics'
import { actions, categories } from '../../constants/analytics'
import {Button} from '../common/Button'

const MainWrapper = styled.main` 
    box-sizing: border-box; 
    padding: 1rem;
    background: #265433;
    text-align: center;
    color: #CAEAFF;
`; 

const HeadingTwo = styled.h2`
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    margin-bottom: 65px;
`

const HeadingThree = styled.h3`
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    margin-bottom: 32px;
`

const Address = styled.a`
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    padding-left: 21px;
    padding-right: 24px;
`

const Time = styled.div`
    margin-top: 5.5rem;
    margin-bottom: 3.75rem;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 75px;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
`

const Book = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 1280px) { 
        flex-direction: row;
    }
`
const StyledGoogleCalendar = styled.div`
    margin-top: 2.25rem;
    font-weight: bold;
    font-size: 25px;
    line-height: 39px;

    button {
        background: transparent;
        border: none;
        font-size: 1.4rem;
        color: blue;
    }

    @media (min-width: 1280px) { 
        margin-top: 0;
        font-size: 30px;
    }
`

/**
 * TODO:
 * should google calendar be a button or just plain text?
 */

export default function Main() {
    const handleClick = () => {
        GAAnalytics.sendGAEvent(categories.HOMEPAGE, actions.BOOK_LESSON)
        window.open('https://www.google.co.uk', '_blank')
    }
    return (
        <MainWrapper>
            <HeadingTwo>Introduction to Solidity </HeadingTwo>
            <HeadingThree>Every Monday</HeadingThree>
            <Address>Address: Nile House, Karolinská 654/2, Praha 8</Address>
            <Time>5:30 - 7pm</Time>
            <Book>
                <Button secondary onClick={handleClick}>Book</Button>
                <StyledGoogleCalendar>
                    on Google Calendar
                </StyledGoogleCalendar>
            </Book>
        </MainWrapper>
    )
}

