import styled from 'styled-components';

export const Table = styled.table`
border: 1px solid;
padding:10px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 500px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
  overflow: hidden;
  background-color: #EEEEEE;
`;

export const TableHead = styled.thead`
  background-color: #E0E0E0;
`;

export const TableHeadCell = styled.th`
  width: calc(100% / 3);
  height: 30px;
  text-align: center;
  border-bottom: solid 1px;
`;

export const TableRowEl = styled.tr`

  background-color: #BDBDBD;
`;

export const TableDataCell = styled.td`

cursor: pointer;
border-bottom: solid 2px  #E0E0E0;
  text-align: center;
  width: calc(100% / 3);
  height: 30px;

`;
