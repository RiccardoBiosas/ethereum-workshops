import styled, {css} from 'styled-components' 

const Button = styled.button` 
    display: block;
    height: 70px;
    box-shadow: none;
    border-radius: 25px; 
    border: none;
    text-align: center;
    font-family: 'Fira Code', monospace;
    font-size: 30px;
    font-weight: 700; 
    white-space: none;
    cursor: pointer;

    ${props => props.secondary ? css`
        width: 172px; 
        color: #067926; 
        background: #CAEAFF;
    ` : css`
        width: 260px; 
        color: #fff; 
        background: #067926;
    `}
`; 

export {Button};

