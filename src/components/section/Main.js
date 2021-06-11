import React from 'react'
import styled from 'styled-components' 
// import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Button} from '../common/Button'
import Syllabus from '../common/Syllabus'

const MainWrapper = styled.main` 
    box-sizing: border-box; 
    padding: .5rem;
    background: #067926;
    text-align: center;
    color: #CAEAFF;
`; 

const HeadingTwo = styled.h2`
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
`

const HeadingThree = styled.h3`
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
`

const Address = styled.a`
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
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
const GoogleCalendar = styled.div`
    margin-top: 2.25rem;
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;

    @media (min-width: 1280px) { 
        margin-top: 0;
    }
`

export default function Main() { 
    return ( 
        <MainWrapper>
            Main
            <HeadingTwo>Introduction to Solidity </HeadingTwo>
            <HeadingThree>Every Monday</HeadingThree>
            <Address>Address: Nile House, Karolinská 654/2, Praha 8</Address>
            <Time>5:30 - 7pm</Time>
            <Book>
                <Button secondary>Book</Button>
                <GoogleCalendar>&nbsp;on&nbsp; 
                    <Router>
                        <Link to='https://goo.gl/maps/ePS2zzLwRrphQmVF8'>Google Calendar</Link>
                    </Router>
                </GoogleCalendar>
            </Book>
            <Syllabus></Syllabus>
        </MainWrapper>
    )
}

