import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  opacity: 0.75;
  text-align: center;
  margin-bottom: 35px;
`;

export const Group = styled.div`
display: grid;
grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
align-items:center;
gap: 40px; 
 
 `;

export const Card = styled.div`
  justify-self: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  background: #FFFFFF;
  box-shadow: 4px 4px 20px rgba(33, 222, 138, 0.25);
  border-radius: 10px;
  max-width: 350px;

  @media (max-width: 600px) {
    align-items: center;
  text-align: center;

  }
  
`;

export const CardTitle = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 33px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;
margin-bottom: 8px;

`;


export const CardInfo = styled.p`
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 25px;


`;

export const CardImage = styled.div`
width: 64px;
height: 64px;
margin-left: 5px;
margin-bottom: 16px;
`;
