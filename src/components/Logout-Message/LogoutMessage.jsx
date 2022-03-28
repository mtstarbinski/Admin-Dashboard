import { LogoutMessageContainer, Message } from "./LogoutMessage.style";

const LogoutMessage = ({ setShowLogout }) => {
  const handleClick = () => {
    setShowLogout(false);
  };

  return (
    <LogoutMessageContainer>
      <Message>
        <p>Are you sure you'd like to logout?</p>
        <div>
          <button onClick={handleClick}>Yes</button>
          <button onClick={handleClick}>Go Back</button>
        </div>
      </Message>
    </LogoutMessageContainer>
  );
};

export default LogoutMessage;
