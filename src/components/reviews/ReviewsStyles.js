import styled from 'styled-components';

export const Section = styled.div`
max-width: 1200px;
padding: 100px 25px 0px 25px;

`;
export const Header = styled.h1`
font-size: 36px;
font-weight: 600;
opacity: 0.75;
text-align: center;
margin-bottom: 35px;
`;

export const Container = styled.div`
display: flex;

@media (max-width: 600px) {
  flex-direction: column-reverse;
}
`;

export const Pane = styled.div`
width: ${({width}) => width};
padding: 20px 0px;
margin: 10px 20px;

@media (max-width: 600px) {
  width: 90%;
  margin: auto;
}
`;

export const Item = styled.div`
padding: 0px 10px;
margin-bottom: 50px;
`;

export const Title = styled.h4`
font-size: 18px;
font-weight: 600;
margin-bottom: 10px;
display: flex;
align-items: center;
`;

export const Text = styled.p`
font-size: 14px;
`;

export const UserImage = styled.div`
width: 25px;
height: 25px;
margin-right: 10px;
background: blue;
border-radius: 999px;
`;


export const Image = styled.div`
width: 200px;
`;

export const Rating = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 10px;
${Text} {
  font-size: 48px;
  font-weight: 400px;
  letter-spaing: 2px;
  text-align: center;
}
`;

export const BarItem = styled.div`
display: flex;
align-items:center;
margin-bottom: 10px;
margin-left: 20px;

`;

export const Bar = styled.div`
  width: ${({width}) => width};
  height: 10px;
  margin-left: 10px;
  border-radius: 999px;
  background-color: #FFC107;
`;



