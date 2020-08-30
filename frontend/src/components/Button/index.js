import styled from "styled-components"

const Button=styled.button.attrs(props=>({
    width:props.width,
}))` 
    color: var(--white);
    background:#FFC300;
    border: 1px solid var(--white);
    margin-left:auto  ;
    margin-right:auto  ;
    margin-top:10px  ;
    width:${props => props.width};
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
    }
`
export default Button