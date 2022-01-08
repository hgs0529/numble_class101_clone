import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const MainHeader = ({ onOverlayClick }) => {
  return (
    <>
      <Overlay onClick={onOverlayClick} />
    </>
  );
};

export default MainHeader;
