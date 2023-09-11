import React from "react";
import { Link } from "react-router-dom";
import NewsBoxesInDashBoard from "./NewsBoxesInDashBoard";
import NewsBoxes from "./NewsBoxes";
const SummaryDashboard = () => {
  return (
    <main className="main-content bg-white">
      <div className="flex justify-between">
        <div>
          <Link className="text-[12px] text-gray-500" to="/">
            تیلویند
          </Link>
          <p className="text-gray-black text-xl">پیشخوان کاربری</p>
        </div>
        <div className="ticket-box-send_link">
          <Link className="font-medium" to="/">
            <ion-icon
              className="pl-2 relative top-[3px]"
              name="ticket-outline"
            ></ion-icon>
            تیکت های مشتریان
          </Link>
        </div>
      </div>

      {/* <!-- == boxes start here === --> */}
      <NewsBoxesInDashBoard />
      {/* <!-- === news boxes start here === --> */}
      <NewsBoxes />
      {/* <!-- ==== news boxes ends here === --> */}
      {/* </div> */}
    </main>
  );
};

export default SummaryDashboard;
