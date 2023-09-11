import "./App.css";
import CartPopUpMenu from "../src/components/Modal/CartPopUpMenu";
import MainPage from "./components/SummaryDashboard/MainPage";
import { useSelector } from "react-redux";
import SequenceInfo from "../src/components/Modal/SequenceInfo";
import NewPaymentFormModal from "./components/Modal/NewPaymentFormModal";

function App() {
  const showCartModal = useSelector((state) => state.ui.cartModalPopUp);
  const showSequenceModal = useSelector((state) => state.ui.sequenceModalPopUp);
  const showNewPaymentModal = useSelector(
    (state) => state.ui.newPaymentModalPopUp
  );

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
      {showNewPaymentModal && <NewPaymentFormModal />}

      <MainPage />
      {/* <CartPopUpMenu /> */}
      {/* </Layout> */}
    </div>
  );
}
export default App;
