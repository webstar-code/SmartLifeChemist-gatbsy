import styled from 'styled-components';

export const Container = styled.div`
  background: #EAF3FA;
  display: flex;
  align-items: center;
  padding: 15px 5px;
`;

export const Title = styled.h1`
  font-style: oblique;
  font-weight: bolder;
  font-size: 28px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  margin-left: 100px;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.5);

  @media (max-width: 600px) {
  margin-left: 10px;

  }
`;

export const Icon = styled.div`
  width: 20px;
  cursor: pointer;
  margin: 0 10px;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const List = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-left: auto;
  margin-right: 10px;
  padding: 0;
  `;

export const Text = styled.p`
  font-size: 16px;
  padding: 10px 5px;
  cursor: pointer;
  margin: 0 25px;
  letter-spaing: 0.0.1em;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const DropDownMenu = styled.div`
 display: none;
 position: absolute;
 min-width: 160px;
 box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
 z-index: 1;
 flex-direction: column;
 background: #f9f9f9;
 transition: all linear 0.3s;
 border-radius: 5px;

  ${Text} {
    padding-left: 20px;
    margin: 0;
    &:hover {
    background-color: #ddd;

    }
  }


`;

export const DropDown = styled.div`
position: relative;

&:hover > ${DropDownMenu} {
  display: flex;
  
}
`;
export const Link = styled.a``;

export const Item = styled.div``;