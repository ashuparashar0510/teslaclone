import React from 'react'
import Styled from 'styled-components'

export default function Header(){
    return(
        <MainMenu>
            <Logo>
                <img src="images/logo.png" width="100" height="80"/>

            </Logo>
            <CenterMenu>
                <ul>
                    <li><a href=''>Model S</a></li>
                    <li><a href=''>Model 3</a></li>
                    <li><a href=''>Model X</a></li>
                    <li><a href=''>Model Y</a></li>
                    <li><a href=''>Solar Roof</a></li>
                    <li><a href=''>Solar Panel</a></li>
                </ul>

            </CenterMenu>
            <RightMenu>
                <ul>
                <li><a href=''>Shop</a></li>
                <li><a href=''>Account</a></li>
                <li><a href=''>Menu</a></li>
                </ul>

            </RightMenu>
        </MainMenu>
    )

}

const MainMenu=Styled.header`
display:flex; 
justify-content:space-between;
align-items: center;
padding: 0 2rem;
position: fixed;
width: 95%;
ul{
    display:flex;
    list-style:none;
}
ul li a{
    text-decoration: none;
    padding: 0 1rem;
    color: #000;
    font-weight: 550;
}
`
const Logo=Styled.div``
const CenterMenu=Styled.div``
const RightMenu=Styled.div``