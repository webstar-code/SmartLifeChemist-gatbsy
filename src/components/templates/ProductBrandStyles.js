import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 20px 50px;

`;

export const Header = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 300px));
  grid-gap: 10px;
  margin: 20px 0px;
`;

export const Item = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
border-left: 2px solid rgba(0,0,0,0.2);
max-width: 70x;
`;

export const Name = styled.p`
font-size: 16px;
align-self: center;

`;

export const Image = styled.div`
width: 50px;
`;

