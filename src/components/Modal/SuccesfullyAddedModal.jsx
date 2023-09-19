import React, { useEffect } from "react";
import MainModal from "./MainModal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/Ui-slice";

const SuccesfullyAddedModal = () => {
  const dispatch = useDispatch();
  const desc = useSelector((state) => state.ui.successDesc);

  useEffect(() => {
    setTimeout(() => {
      dispatch(uiActions.toggleSuccessModal({ show: false, desc: "" }));
    }, 3000);
  }, [dispatch]);

  return (
    // <MainModal>
      <div className="flex justify-center">
        <div className="bg-green-600  fixed bottom-[40px] max-w-[330px] p-6 rounded-md  ">
          <div className="flex items-center gap-2 text-white ">
            <ion-icon
              class="text-xl"
              name="checkmark-circle-outline"
            ></ion-icon>
            <p className="text-[12px]">{desc}</p>
          </div>
        </div>
      </div>
    // </MainModal>
  );
};

export default SuccesfullyAddedModal;
