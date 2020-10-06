import React from 'react'
import { Link } from 'gatsby';
import LayoutContainer from '../containers/LayoutContainer'
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  opacity: 0.75;
  color: rgba(0,0,0);
  text-align: center;
  background: rgba(255,0,0,0.75);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 50px;
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

`
function Error() {
  return (
      <LayoutContainer>
        <Container>
          <Title>The page you looking for doesn't exist.</Title>
          <Link to="/"><Button>Return Home</Button></Link>
          </Container>        
      </LayoutContainer>

    )
}

export default Error
