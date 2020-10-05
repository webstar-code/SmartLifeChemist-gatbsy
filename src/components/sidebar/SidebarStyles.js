import styled, {createGlobalStyle} from 'styled-components';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Container = styled.div`
position: absolute;
top: 50px;
width: ${({ active }) => active === true ? "400px" : "0px"};
background-color: ${({ bg }) => bg};
height: ${({ active }) => active === true ? "100vh" : "0"};
 display: ${({ active }) => active === true ? "block" : "none"};
transition: all linear 1s;
z-index: 1000;
`;

export const List = styled.div`
display: flex;
flex-direction: column;
margin: 10px 20px;
`;

export const ListTitle = styled.h4`
font-size: 24px;
font-weight: 400;
margin: 10px 0px 5px 0px;
`;

export const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 10px;
padding: 15px 0px;
border-bottom: 1px solid black;
cursor: pointer;

`;
export const Text = styled.p`
font-size: 16px;
font-weight: 400;
`;

export const Icon = styled.div`
width: 25px;
height: auto;
padding: 5px;
`;





