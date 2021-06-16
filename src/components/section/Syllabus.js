import React from 'react'
import styled from 'styled-components' 
import prgBlue from '../images/prgBlue.png'

const SyllabusSection = styled.section` 
    box-sizing: border-box; 
    display: flex; 
    flex-direction: column;
    background: #265433;
    text-align: center;
    color: #CAEAFF;
`; 

const HeadingFour = styled.h4`
    box-sizing: border-box;
    margin: 0;
    font-size: 40px;
    line-height: 52px;
    font-weight: normal;
    margin-top: 166px;
    
`
const HeadingFive = styled.h5`
    margin:0;
    margin-top: 85px;
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
    padding-left: 2rem;
    padding-right: 2rem;
`

const ScheduleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (min-width: 1028px) { 
        flex-direction: row;
    }
`
const Paragraph = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
`

const Time = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 48px;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    margin-top: 75px;
`

const Covers = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    margin-top: 113px;
    padding-left: 42px; 
    padding-right: 46px;

    @media (min-width: 1280px){ 
        padding-left: 100px; 
        padding-right: 110px;
    }
`

const Column = styled.div`
    width: 100%; 
    

    @media (min-width: 1028px) { 
        width:  35%;
    } 
`

const SubHeading = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    
    /* @media (min-width: 1024px) { 
        padding-left: 140px;
        padding-right: 140px;
    } */

`

const PragueImgWrapper = styled.div`
    position: relative; 
    height: 517px;
    overflow: hidden;
`

const PragueImg = styled.img`
    position: relative; 
    min-height: 517px;

    @media (min-width:1028px) { 
        left: -10%;
        min-height: 517px;
    }
`

export default function Syllabus() { 
    return ( 
        <SyllabusSection>
            <HeadingFour>Syllabus</HeadingFour>
            <ScheduleWrapper>
                <Column>
                    <div>
                        <HeadingFive>1st & 3rd Mondays of the month</HeadingFive>
                        <SubHeading>Our study session meetup. Mapping out the understanding of how it all works!</SubHeading>
                    </div>
                    <div>
                        <Time>5:30 - 5:50</Time>
                        <Paragraph>Public vs Permissioned Blockchains</Paragraph>
                    </div>
                    <div>
                        <Time>5:50 - 6:20</Time>
                        <Paragraph>Intro to Smart Contracts/Use Cases</Paragraph>
                    </div>
                    <div>
                        <Time>6:20 - 6:40</Time>
                        <Paragraph>Ethereum’s Architectural Concepts</Paragraph>
                    </div>
                    <div>
                        <Time>6:40 - 7:00</Time>
                        <Paragraph>History of Ethereum’s programming language</Paragraph>
                    </div>
                </Column>
                <Column>
                    <div>
                        <HeadingFive>2nd & 4th Mondays of the month</HeadingFive>
                        <SubHeading>Now it’s time to code. Build your first smart contracts!</SubHeading>
                    </div>
                    <div>
                        <Time>5:30 - 6:00</Time>
                        <Paragraph>Intro to Solidity’s main features</Paragraph>
                    </div>
                    <div>
                        <Time>6:00 - 7:00</Time>
                        <Paragraph>Write your first contracts. Hello World!</Paragraph>
                    </div>
                    <div>
                        <Covers>Covers: data types - uint, int, string, bytes, array, mappings-, functions, modifiers, data location & visibility</Covers>
                    </div>
                </Column>
            </ScheduleWrapper>
            <PragueImgWrapper>
                <PragueImg src={prgBlue} alt="Prague" />
            </PragueImgWrapper>
        </SyllabusSection>
    )
}


