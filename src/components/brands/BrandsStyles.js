import styled from 'styled-components/macro';


export const Container = styled.div`
width: 100%;
overflow: hidden;
box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1);

`;


export const Row = styled.div`
display: grid;
grid-template-columns: repeat(100, 150px);
align-items: center;
margin: 20px 0px;
transform: translate(0,0);
animation: slide ${({speed}) => speed} linear ${({delay}) => delay} infinite;

@keyframes slide {
0% { transform: translate(0,0); }
100% { transform: translate(-100%,0); }
}

`;

export const Image = styled.div`
width: 100px;

`;
