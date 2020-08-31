import styled from 'styled-components'
export const Container=styled.div.attrs(props=>({
    width:props.width,
    height:props.height,
}))`
    
    width:${props => props.width};
    height:${props => props.height};
    background:#fff;
    display:table;
    vertical-align:middle;
    margin-left:auto;
    margin-right:auto;
    border-radius:8px;
    box-shadow:0 0 2px(0,0,0,0.1);
    font-family:Verdana, Geneva, Tahoma, sans-serif;

  
`;

export default Container