import styled from 'styled-components/macro';

export const Section = styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding: 40px 25px;
justify-content: center;
background: #21de8a;


`;

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;

export const Header = styled.h1`
font-size: 36px;
font-weight: 400px;
opacity: 0.85;
text-align: center;
margin-bottom: 35px;
}

`;

export const Pane = styled.div`
width: ${({width}) => width};
display: flex;
flex-direction: ${({direction}) => direction};


@media (max-width: 600px) {
  width: 100%;

}
`;

export const Title = styled.h2`
font-size: 24px;
margin: 10px 0px;
`;

export const Text = styled.p`
font-size: 14px;
margin: 0;
margin-bottom: 10px;
`;

export const Details = styled.div`
display: flex;
flex-direction : column;
  

`;

export const Item = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
&:hover {
  font-weight: 600px;
  transform: scale(1.1);
}
`;

export const Icon = styled.div`
width: 18px;
margin-right: 10px;
margin-bottom: 10px;
`;

export const Map = styled.iframe`
width: 300px;
height: 200px;
border: 1px solid black;
@media (max-width: 600px) {
  display: none;
}
`;

export const Link = styled.a`
cursor: pointer;

`;


