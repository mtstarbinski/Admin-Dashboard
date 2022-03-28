import styled from "styled-components";

export const OverviewContainer = styled.div`
  padding: 10px 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  gap: 20px;
  margin: 0 0 0 65px;
  width: 100%;

  @media screen and (max-width: 1375px) {
    grid-template-columns: 1fr;
    gap: 20px 0;
  }

  @media screen and (max-width: 680px) {
    padding: 10px;
    text-align: center;
  }

  h1 {
    grid-column: 1 / end;
    height: fit-content;
    margin: 5px 0 0 0;
    font-size: 30px;
  }
`;

export const RetentionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-row: 2 / 4;

  @media screen and (max-width: 1375px) {
    grid-row: 2;
    flex-direction: row;
    margin: 0 auto;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  
  
`;

export const StatCardContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1375px) {
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: row;
  }
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }

`;
