import styled from 'styled-components';
import {FaRegWindowClose} from "react-icons/fa";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.primaryLight};
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width:100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  // @media (max-width: ${({theme}) => theme.mobile}) {
  //   width: 100%;
  // }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({theme}) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

      // @media (max-width: ${({theme}) => theme.mobile}) {
    //   font-size: 1.5rem;
    //   text-align: center;
  }


    // &:hover {
    //   color: ${({theme}) => theme.primaryHover};
    // }
  
  `;

export const CloseIcon = styled(FaRegWindowClose)`
  color: grey;
  position:fixed;
  top:20%;
  center:center;
  font-size: 50px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: black;
  }
`

