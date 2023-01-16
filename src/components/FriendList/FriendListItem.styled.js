import styled from 'styled-components';


export const Item = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 5px auto;
  align-items: center;
  width: 280px;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.1, 0, 0, 0.5);
  :hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  background-color: #FFFFFF;
`;

export const Status = styled.span`

  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;

`;


export const Avatar = styled.img`
  margin-right: auto;
  margin: 10px;
  height: 60px;
  border-radius: 15px;
  background-color: #EEEEEE;
  box-shadow: 1px 1px 1px rgb(0 0 0 / 10%), 1px 1px 1px rgb(0 0 0 / 10%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;

export const Name = styled.p`
font-weight: 600;

  `;


