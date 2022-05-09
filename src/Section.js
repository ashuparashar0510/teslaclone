import React from 'react'
import Styled from 'styled-components'


export default function Section(props){
    return(
        <MainSection bg={props.bgimage}>
            <CarName>
                <h1>{props.carname}</h1>
                <p>{props.tagline}</p>
            </CarName>
            <MidSection>
                <Buttons>
                    <LButton>{props.lbuttontext}</LButton>
                    {props.rbuttontext && <RButton>{props.rbuttontext}</RButton>}
                </Buttons>
            </MidSection>
        </MainSection>
    )
}

const MainSection=Styled.div`
background-image: url("images/${(props)=>props.bg}");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`
const CarName=Styled.div`
padding-top: 75px;
text-align: center;
`
const MidSection=Styled.div``
const Buttons=Styled.div`
padding-bottom: 12vh;
`
const LButton=Styled.a`
background: rgb(40,35,40);
color: #fff;
margin: 0 1.5rem;
padding: 10px;
padding-bottom:22px;
border-radius: 100px;
display: inline-block;
height: 5px;
width: 270px;
text-align: center;
border: none;
opacity: 0.8;
`

const RButton=Styled(LButton)`
background: #fff;
color: #000;
`



