import styled from "styled-components"

const Input =styled.input.attrs(props =>({
    type:props.type,
    width:props.width|| "500px",
    height:props.height || "50px",
}))`
  width: ${props=>props.width};
  height: 50px;
  position: relative;
  padding: 0px 10px;
  border: 2px solid #eeee;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: #282828;
  outline: none;
  opacity:0.5;
 
  -webkit-appearance: none;

`
export default Input