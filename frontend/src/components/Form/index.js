import styled from "styled-components"

const Form = styled.form.attrs(props =>({
    display:props.display || "inline-block",
   
}))`
    display:${props=> props.display};
    text-align:left;
    margin-left:auto; 
    margin-right:10%;
    
`
export default Form