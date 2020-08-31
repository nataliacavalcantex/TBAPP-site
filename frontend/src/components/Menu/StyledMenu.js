import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width:700px) {
    width: 100%;
  }
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  a {
    font-size: 1rem;
    padding: 2rem 0;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 700px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: green;
    }
  }
  p{
    border-bottom:1px solid gray;
    padding-bottom:20px   
  }
`;
export default StyledMenu