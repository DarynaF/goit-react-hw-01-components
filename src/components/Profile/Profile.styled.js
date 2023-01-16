import styled from "styled-components";

export const ProfileContainer = styled.div`
border: 1px solid;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  background-color: #EEEEEE;
`;

export const Description = styled.div`
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  border-radius: 50%;
  background-color: #FFFFFF;
  box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    0px 1px 3px rgb(0 0 0 / 20%);
`;

export const ParagraphDesc = styled.p`
  text-align: center;

`;

export const Name = styled.p`
text-align:center;
font-weight:700;
`
export const StatList = styled.ul`
  background-color: #E0E0E0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin-bottom: 0;
`;

export const StatsItem = styled.li`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px;
  text-align: center;
`;

export const Label = styled.span`

  display: block;
`;

export const Quantity = styled.span`
  font-weight: 700;
  display: block;
`;
