import styled from "styled-components";

export const LogoutMessageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(5px);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  background-color: #ffffff78;
`;

export const Message = styled.div`
  background-color: white;
  height: 100px;
  width: 300px;
  border-radius: 1em;
  border-radius: 1em;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 20px -10px;
  padding: 15px 25px;

  p {
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-around;
    button {
      height: 30px;
      width: 100px;
      font-family: "Lato", sans-serif;
      font-weight: bold;
    }
  }
`;
