import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 150px;
  min-height: 70px;
  background-color: #fff;
  padding: 5px;
  border-radius: 1em;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 20px -10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 1375px) {
    min-height: 90px;
  }

  @media screen and (max-width: 680px) {
    width: 330px;
  }

  p {
    color: grey;
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    color: ${({ gain }) => (gain ? "#00bb00" : "black")};
  }
`;
