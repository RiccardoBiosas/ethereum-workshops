import React from 'react'
import styled from 'styled-components' 

import prgGreen from '../images/prgGreen.png'
import sun from '../images/sun.png'
import cloud from '../images/cloud.png'
import {Button} from '../common'
import GAAnalytics from '../../utils/analytics'
import { actions, categories } from '../../constants/analytics'

const HeaderWrapper = styled.header`
    background-color: #CAEAFF;
    position: relative;
    overflow: hidden;
`

const HeadingOne = styled.h1` 
    padding: 1rem;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: #067926;
    margin-top: 100px;
    margin-bottom: 80px;
`; 

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 25px;
    line-height: 45px;
    text-align: center;
    color: #39493E;
    padding: 1.5rem;
    margin-bottom: 100px;

    @media (min-width: 1280px) { 
        margin-left: auto;
        margin-right: auto;
        width: 1078px;
        padding: 0;
    }
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const PragueImgWrapper = styled.div`
    position: relative; 
    height: 517px;
    overflow: hidden;
`

const PragueImg = styled.img`
    position: relative; 
    min-height: 517px;

    @media (min-width:1024px) { 
        left: -10%;
        min-height: 517px;
    }
`

const Egg = styled.div`
    position: absolute; 
    top: -20px;
    left: -47px;
`
const Cloud = styled.div`
    position: absolute; 
    top: -15px; 
    right: -25px;

    @media (min-width: 1024px) { 
        top: 38px; 
        right: 73px;
    }
`

export default function Header() {
    
    const handleClick = () => {
        GAAnalytics.sendGAEvent(categories.HOMEPAGE, actions.CONTACT_US)
        window.open('https://www.google.co.uk', '_blank')
    }

    return ( 
        <HeaderWrapper>
            <Egg>
                <img src={sun} alt="yellow Egg" />
            </Egg>
            <Cloud>
                <img src={cloud} alt="cloud" />
            </Cloud>
            <HeadingOne>Your Ethereum Workshop in Prague </HeadingOne>
            <Paragraph>Every week we take you on the journey to gain an understanding of Solidity & developing your first smart contract. From week 1 to week 2. </Paragraph>
            <Center>
                <Button onClick={handleClick}>
                    Contact Us
                </Button>
            </Center> 
            <PragueImgWrapper>
                <PragueImg src={prgGreen} alt="Prague" />
            </PragueImgWrapper>
        </HeaderWrapper>
    )
}

