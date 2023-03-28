import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.2);
  th {
    background-color: #5984c0;
    h2 {
      color: #ffffff;
      font-weight: 500;
      font-size: 24px;
    }
  }
  td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
`;
export const Container = styled.div`
  width: 96.5%;
  margin: 32px;
`;