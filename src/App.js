import "./App.css";
import CartPopUpMenu from "../src/components/Modal/Carts/CartPopUpMenu";
import { useSelector } from "react-redux";
import SequenceInfo from "../src/components/Modal/Sequence/SequenceInfo";
import NewPaymentFormModal from "./components/Modal/NewPaymentFormModal";
import MainPage from "./components/Main/MainPage";
import WarningModal from "./components/Modal/WarningModal";
import SuccesfullyAddedModal from "./components/Modal/SuccesfullyAddedModal";
import PaymentModal from "./components/Main/Ticket/PaymentModal";

function App() {
  const showCartModal = useSelector((state) => state.ui.cartModalPopUp);
  const showSequenceModal = useSelector((state) => state.ui.sequenceModalPopUp);
  const showNewPaymentModal = useSelector(
    (state) => state.ui.newPaymentModalPopUp
  );
  const userHasCart = useSelector((state) => state.cart.userHasCart);

  const showWarning = useSelector((state) => state.ui.warningIsVisible);
  const showsuccesModal = useSelector((state) => state.ui.successIsVisible);
  const walletPaymentModal = useSelector(
    (state) => state.ui.walletPaymentModal
  );
  console.log("walletPaymentModal", walletPaymentModal);
  return (
    <div
      style={{
        backgroundImage: 'url("../img/main-wallpaper.png")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* <Layout className="App" dir="rtl"> */}
      {showCartModal && <CartPopUpMenu />}
      {showSequenceModal && userHasCart && <SequenceInfo />}
      {showNewPaymentModal && !userHasCart && <NewPaymentFormModal />}
      {showWarning && <WarningModal />}
      {showsuccesModal && <SuccesfullyAddedModal />}
      {walletPaymentModal && <PaymentModal />}
      <MainPage />
      {/* <CartPopUpMenu /> */}
      {/* </Layout> */}
    </div>
  );
}
export default App;
