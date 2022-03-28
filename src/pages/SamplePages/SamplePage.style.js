import styled from "styled-components";

export const SamplePageContainer = styled.div`
  padding: 10px 35px;
  width: 100%;
  height: 100%;
  margin-left: 65px;

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
