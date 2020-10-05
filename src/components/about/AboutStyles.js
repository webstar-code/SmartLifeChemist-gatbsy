import styled from 'styled-components';

export const Container = styled.div`
max-width: 1200px;
display: flex;
flex-direction: column;
justify-content: center;
margin: 50px auto;
`;

export const Header = styled.h1`
font-size: 36px;
font-weight: 600;
opacity: 0.75;
text-align: center;
margin-bottom: 35px;
`;

export const Text = styled.p`
font-size: 18px;
padding: 10px;
width: 85%;
text-align: center;
margin: auto;
line-height: 30px;
font-style: oblique;

@media (max-width: 600px) {
  width: 90%;
  font-size: 16px;
}
`;