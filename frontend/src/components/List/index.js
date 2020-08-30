import styled from "styled-components"

const List= styled.ul`
    list-style: none;
    margin-top: 30px;
    li{
        padding:15px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        margin-left:0%;
        &+li{
            border-top:1px solid #eee
        }
        a{
            color:var(--primary);
        }

    }
    
    button{
        width:300px;
    }
   
`

export default List