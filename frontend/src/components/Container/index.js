import styled from 'styled-components'
export const Container=styled.div.attrs(props=>({
    width:props.width,
    height:props.height,
}))`
    max-width:5500px;
    width:${props => props.width};
    max-height:700px;
    height:${props => props.height};
    background:#fff;
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    border-radius:10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 2%;
    padding-right: 5%;
    box-shadow:0 0 2px(0,0,0,0.1);
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    
    h1{
  
        display:flex;
        margin-left:30%;
        margin-right:auto;
        margin-top:10px;
        margin-bottom:0px;
        flex-direction: center;
        align-items:center;
        font-size: 50px;
        text-align: center;
        padding:20px;

    }
  
`;

export default Container