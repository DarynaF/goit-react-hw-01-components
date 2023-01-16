import styled from 'styled-components';
import getRandomHexColor from 'utils/getRandomColor';

export const Section = styled.section`
border: 1px solid;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
  overflow: hidden;
  background-color: #EEEEEE;
`;
export const Title = styled.h2`
  text-align: center;
  margin: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  border: solid 1px ;
  background-color: ${getRandomHexColor};
`;

export const SpanEl = styled.span`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;
  font-weight: 400;
`;
