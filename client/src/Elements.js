export const ModalCard = styled.div`
  position: relative;
  height: 80%;
  width: 60%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 1px 1px 15px rgba(0,0,0,0.4);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 100%;
  border: 1px solid black;
  cursor: pointer;
  padding: 2px, 5px;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0,0);
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.4);
`;