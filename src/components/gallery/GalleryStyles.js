import styled from 'styled-components/macro';


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 300px;
margin: 0 auto;
margin-bottom: 50px;
overflow: hidden;

@media (max-width: 600px) {
  margin-bottom: 0;
}

`;

export const Icon = styled.div`
position: absolute;
left: ${({ left }) => left};
right: ${({ right }) => right};
cursor: pointer;
padding: 12px;
width: 50px;
height: 50px;
border-radius: 999px;
box-shadow: 0px 0px 4px black;
background-color: rgba(255,255,255,0.5);
&:hover {
  background-color: #4DE5A1;
}




`;

export const Image = styled.div`

width: 60%;
-webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
  @media (max-width: 768px){
  width: 100%;

  }

  @-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
  }

  @keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
  }
  }
`;
