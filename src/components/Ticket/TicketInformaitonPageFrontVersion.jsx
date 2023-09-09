//   <!-- <script src="js/persian.date.js"></script>
//   <script src="js/persian.datepicker.js"></script> -->
//   <script src="../node_modules/persian-date/dist/persian-date.js"></script>
//   <script src="../node_modules/persian-datepicker/dist/js/persian-datepicker.min.js"></script>
//   <script src="../node_modules/persian-datepicker/dist/css/persian-datepicker.css"></script>

import React, { useState } from "react";
import "./TicketInformationPageFrontVersion.css";
const TicketInformaitonPageFrontVersion = () => {
  // Initialize the counter value as state
  const [counters, setCounters] = useState({});

  // Function to handle increasing the counter
  const increaseCounter = (id) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: (prevCounters[id] || 0) + 1,
    }));
  };

  // Function to handle decreasing the counter
  const decreaseCounter = (id) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: Math.max((prevCounters[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="all">
      <div style={{ maxWidth: "700px", margin: "10px auto" }}>
        <div className="px-3 pt-3 pb-8  border border-gray-300 rounded-md shadow-md">
          <ol
            style={{
              position: "relative",
              marginTop: "10px",
              marginRight: "10px",
              borderRight: " 1px solid rgba(128, 128, 128, 0.367)",
            }}
          >
            <li
              style={{
                position: "relative",
                margin: "0 5px 10px 0",
                listStyle: "none",
                paddingRight: "20px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgb(201, 201, 240)",
                  borderRadius: "50%",
                  right: "-24.5px",
                  top: "-10px",
                  border: "10px solid white",
                }}
              >
                <svg
                  className="w-2.5 h-2.5 text-blue-500"
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "rgba(0, 0, 255, 0.441)",
                  }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                شوی ستارگان رنگارنگ
              </h3>
              <time
                style={{
                  fontSize: "14px",
                }}
              >
                دوشنبه 16 مرداد{" "}
              </time>
              <p className="mb-1" style={{ fontSize: "14px" }}>
                ستارگان سانس 24 02:30-23:59
              </p>
              <p style={{ fontSize: "14px" }}>
                <span>مانده:</span>
                <span
                  className="badge bg-danger"
                  style={{ top: "-2px", position: "relative" }}
                >
                  10
                </span>
              </p>
              <button className="btn-c">انتخاب سانس</button>
            </li>
            <li
              style={{
                position: "relative",
                margin: "0 5px 10px 0",
                listStyle: "none",
                paddingRight: "20px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgb(201, 201, 240)",
                  borderRadius: "50%",
                  right: "-25.5px",
                  top: "-10px",
                  border: "10px solid white",
                }}
              >
                <svg
                  className="w-2.5 h-2.5 text-blue-500"
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "rgba(0, 0, 255, 0.441)",
                  }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                شوی ستارگان رنگارنگ
              </h3>
              <time style={{ fontSize: "14px" }}>دوشنبه 16 مرداد </time>
              <p className="mb-2" style={{ fontSize: "14px" }}>
                ستارگان سانس 24 02:30-23:59
              </p>
              <p style={{ fontSize: "14px" }}>
                <span>مانده:</span>
                <span
                  className="badge bg-warning"
                  style={{ top: "-2px", position: "relative" }}
                >
                  15
                </span>
              </p>
              <button className="btn-c">انتخاب سانس</button>
            </li>
            <li
              style={{
                position: "relative",
                margin: "0 5px 10px 0",
                listStyle: "none",
                paddingRight: "20px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgb(201, 201, 240)",
                  borderRadius: "50%",
                  right: "-25.5px",
                  top: "-10px",
                  border: "10px solid white",
                }}
              >
                <svg
                  className="w-2.5 h-2.5 text-blue-500"
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "rgba(0, 0, 255, 0.441)",
                  }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                شوی ستارگان رنگارنگ
              </h3>
              <time style={{ fontSize: "14px" }}>دوشنبه 16 مرداد </time>
              <p className="mb-2" style={{ fontSize: "14px" }}>
                ستارگان سانس 24 02:30-23:59
              </p>
              <p style={{ fontSize: "14px" }}>
                <span>مانده:</span>
                <span
                  className="badge bg-success"
                  style={{ top: "-2px", position: "relative" }}
                >
                  20
                </span>
              </p>
              <button className="btn-c">انتخاب سانس</button>
            </li>
          </ol>
          <div style={{ marginTop: "30px" }}>
            <div className="relative mb-2">
              <label
                htmlFor="date"
                style={{
                  fontSize: "14px",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                تاریخ مورد نظر
              </label>
              <input
                type="text"
                id="date"
                style={{
                  padding: "2px 5px",
                  border: "1px solid lightgray",
                  borderRadius: "2px",
                }}
              />

              <div
                style={{
                  fontSize: "12px",
                  color: "tomato",
                  marginTop: "4px",
                }}
              >
                تنها عدد وارد کنید (زبان کیبورد خود را حتما به انگلیسی تغییر
                دهید )
              </div>

              <div className="mt-4 d-flex justify-content-end">
                <button className="btn-c">جستجو تاریخ</button>
              </div>
            </div>
          </div>

          {/* <!-- === sequences table ====  --> */}
          <div className="mt-3">
            <table className="table">
              <thead
                style={{
                  backgroundColor: "rgb(4, 4, 70)",
                  width: "100%",
                }}
              >
                <tr>
                  <th scope="col">عنوان</th>
                  <th scope="col">مانده</th>
                  <th scope="col">مبلغ بلیط</th>
                  <th scope="col">تعداد</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>اکونومی | ECG</td>
                  <td>
                    <span className="badge bg-danger">10</span>
                  </td>
                  <td>3،700،000</td>
                  <td>
                    <div className="flex gap-2 w-[80px]">
                      <button
                        className="increase-button"
                        data-id="1"
                        onClick={() => increaseCounter(1)}
                      >
                        <ion-icon
                          className="text-xl text-green-600"
                          name="add-circle"
                        ></ion-icon>
                      </button>
                      {/* <span className="counter" className="text-sm" data-id="1">0</span> */}
                      <span className="counter text-sm" data-id="1">
                      {counters[1] || 0}
                      </span>
                      <input
                        type="hidden"
                        className="counter"
                        name="counter"
                        data-id="1"
                        // value="0"
                        value={counters[1] || 0}
            readOnly
                      />
                      <button
                        className="decrease-button"
                        data-id="1"
                        onClick={() => decreaseCounter(1)}
                      >
                        <ion-icon
                          className="text-xl text-rose-600"
                          name="remove-circle"
                        ></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>اکونومی | ECG</td>
                  <td>
                    <span className="badge bg-warning">15</span>
                  </td>
                  <td>3،700،000</td>
                  <td>
                    <div className="flex gap-2 w-[80px]">
                      <button
                        className="increase-button"
                        data-id="2"
                        onClick={() => increaseCounter(2)}
                      >
                        <ion-icon
                          className="text-xl text-green-600"
                          name="add-circle"
                        ></ion-icon>
                      </button>
                      {/* <span className="counter" className="text-sm" data-id="2">0</span> */}
                      <span className="counter text-sm" data-id="2">
                        {counters[2] || 0}
                      </span>
                      <input
                        type="hidden"
                        className="counter"
                        name="counter"
                        data-id="2"
                        // value="0"
                        value={counters[2] || 0}
                        readOnly
                      />
                      <button
                        className="decrease-button"
                        data-id="2"
                        onClick={() => decreaseCounter(2)}
                      >
                        <ion-icon
                          className="text-xl text-rose-600"
                          name="remove-circle"
                        ></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>اکونومی | ECG</td>
                  <td>
                    <span className="badge bg-success">25</span>
                  </td>
                  <td>3،700،000</td>
                  <td>
                    <div className="flex gap-2 w-[80px]">
                      <button
                        className="increase-button"
                        data-id="3"
                        onClick={() => increaseCounter(3)}
                      >
                        <ion-icon
                          className="text-xl text-green-600"
                          name="add-circle"
                        ></ion-icon>
                      </button>
                      {/* <span className="counter" className="text-sm" data-id="3">0</span> */}
                      <span className="counter text-sm" data-id="3">
                        {counters[3] || 0}
                      </span>
                      <input
                        type="hidden"
                        className="counter"
                        name="counter"
                        data-id="3"
                        // value="0"
                        value={counters[3] || 0}
                        readOnly
                      />
                      <button
                        className="decrease-button"
                        data-id="3"
                        onClick={() => decreaseCounter(3)}
                      >
                        <ion-icon
                          className="text-xl text-rose-600"
                          name="remove-circle"
                        ></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- === shopping options ==== --> */}
          <div className="flex justify-center gap-4 mt-3 mb-3">
            <button className="btn-c">
              <ion-icon name="cart-outline"></ion-icon>
              خرید نهایی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInformaitonPageFrontVersion;

{
  /* <script>
      $(`input.counter`).val(0);

      $(".increase-button").click(function () {
        let id = $(this).attr("data-id");
        let element = $(`input.counter[data-id=${id}]`);
        let value = Number(element.val());

        element.val(value + 1);
        $(`span.counter[data-id=${id}]`).text(value + 1);
      });
      $(".decrease-button").click(function () {
        let id = $(this).attr("data-id");
        let element = $(`input.counter[data-id=${id}]`);
        let value = Number(element.val());
        if (value == 0) return;
        element.val(value - 1);
        $(`span.counter[data-id=${id}]`).text(value - 1);
      });
    </script> */
}
