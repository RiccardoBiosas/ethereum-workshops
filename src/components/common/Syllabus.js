import React from 'react'
import styled from 'styled-components' 

const SyllabusSection = styled.section` 
    box-sizing: border-box; 
    display: flex; 
    flex-direction: column;
    padding-top: 11.5rem;
    background: #067926;
    text-align: center;
    color: #CAEAFF;
`; 

const HeadingFour = styled.h4`
    font-size: 40px;
    line-height: 52px;
    font-weight: normal;
`
const HeadingFive = styled.h5`
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
`

const ScheduleWrapper = styled.div`
    display: flex;
    flex-direction: column;

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
`



export default function Syllabus() { 
    return ( 
        <SyllabusSection>
            <HeadingFour>Syllabus</HeadingFour>
            <ScheduleWrapper>
                <div>
                    <div>
                        <HeadingFive>1st & 3rd Mondays of the month</HeadingFive>
                        <Paragraph>Our study session meetup. Mapping out the understanding of how it all works!</Paragraph>
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
                </div>
                <div>
                    <div>
                        <HeadingFive>1st & 3rd Mondays of the month</HeadingFive>
                        <Paragraph>Our study session meetup. Mapping out the understanding of how it all works!</Paragraph>
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
                </div>
            </ScheduleWrapper>
        </SyllabusSection>
    )
}


