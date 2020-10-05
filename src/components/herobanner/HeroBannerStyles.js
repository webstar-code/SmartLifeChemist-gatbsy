import styled from 'styled-components';

export const Frame = styled.div`
width: 100%;
background: #EAF3FA;
padding: 25px 0;

`;

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 50px 0;
  position: relative;
  z-index: 0;
  margin: 0 auto;
`;

export const Pane = styled.div`
  position: absolute;
  left: 100px;
  width: 60%;

  @media (max-width: 600px) {
    width: 80%;
    left: 50px;
  }
  `;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = styled.button`
  background: #21DE8A;
  box-shadow: 0px 0px 10px #21DE8A;
  border-radius: 999px;
  color: white;
  text-align: center;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    background: #21DE8A;
  transform: scale(1.1);

  }

  &:last-of-type {
    margin-left: 30px
  }
  @media (max-width: 600px) {
    display: none;
`;

export const Image = styled.div`
z-index: -1;
width: 100%;
margin-left: calc(100% - 80%);

@media (max-width: 600px) {
margin: 0;
padding-top: calc(100% - 70%);

}
`;

export const Link = styled.a``;

