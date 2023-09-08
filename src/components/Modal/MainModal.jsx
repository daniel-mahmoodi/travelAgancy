import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
 
  return (
    <div
      // className="modal-backdrop"
      className="fixed top-0 left-0 w-full h-full bg-blue-200 flex justify-center items-center"
      style={{
        zIndex: 1000,
        opacity: 0.25,
      }}
      onClick={props.hideModalHandler}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="flex justify-center">
      <div
        className="fixed"
        style={{
          zIndex: 1000,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
const portalElement = document.getElementById("cartOverlay");
const MainModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hideModalHandler={props.hideModalHandler}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default MainModal;
