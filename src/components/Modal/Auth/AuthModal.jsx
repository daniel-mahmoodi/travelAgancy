import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/Ui-slice";
const Backdrop = () => {
  const dispatch = useDispatch();
  const hideAuthModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  return (
    <div
      className="fixed p-0 inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-30"
      onClick={hideAuthModalHandler}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    // <div className="fixed inset-1/3 p-0 m-0 z-30">
    <div className="relative w-96 p-0 m-0 mx-auto z-30">
      <div className="fixed top-24 p-0 ">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("authOverlay");
const MainModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default MainModal;
