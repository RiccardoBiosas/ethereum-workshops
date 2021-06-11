import React from 'react'
import styled from 'styled-components' 

import {Button} from '../common'

const HeaderWrapper = styled.header`
    background-color: #CAEAFF;
`

const HeadingOne = styled.h1` 
    padding: 1rem;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: #067926;
`; 

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 25px;
    line-height: 45px;
    text-align: center;
    color: #39493E;
    padding: 1.5rem;
    padding-bottom: 2.5rem;

    @media (min-width: 1280px) { 
        margin-left: auto;
        margin-right: auto;
        width: 1078px;
    }
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
// const PragueImg = styled.div`
//     background-image
// `

export default function Header() { 
    return ( 
        <HeaderWrapper>
            Header
            <HeadingOne>Your Ethereum Workshop in Prague </HeadingOne>
            <Paragraph>Every week we take you on the journey to gain an understanding of Solidity & developing your first smart contract. From week 1 to week 2. </Paragraph>
            <Center><Button>Contact Us</Button></Center> 
        </HeaderWrapper>
    )
}

