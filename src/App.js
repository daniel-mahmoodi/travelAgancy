import "./App.css";
import CartPopUpMenu from "../src/components/Modal/CartPopUpMenu";
import { useSelector } from "react-redux";
import SequenceInfo from "../src/components/Modal/SequenceInfo";
import NewPaymentFormModal from "./components/Modal/NewPaymentFormModal";
import MainPage from "./components/Main/MainPage";
import WarningModal from "./components/Modal/WarningModal";

function App() {
  const showCartModal = useSelector((state) => state.ui.cartModalPopUp);
  const showSequenceModal = useSelector((state) => state.ui.sequenceModalPopUp);
  const showNewPaymentModal = useSelector(
    (state) => state.ui.newPaymentModalPopUp
  );
  const userHasCart = useSelector((state) => state.cart.userHasCart);

  const showWarning = useSelector((state) => state.ui.warningIsVisible);
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
      {showSequenceModal && <SequenceInfo />}
      {showNewPaymentModal && !userHasCart && <NewPaymentFormModal />}
      {showWarning && <WarningModal />}

      <MainPage />
      {/* <CartPopUpMenu /> */}
      {/* </Layout> */}
    </div>
  );
}
export default App;
