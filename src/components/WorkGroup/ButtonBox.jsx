import React, { useEffect, useState } from "react";
import axios from "axios";
const ButtonBox = () => {
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;
  const [data, setData] = useState([]);
  const [activeButtonId, setActiveButtonId] = useState();
  useEffect(() => {
    // console.log("import axi", baseUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        console.log(response.data); // This contains the API data
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, [apiUrl]);
  const handleButtonClick = (id) => {
    setActiveButtonId(id);
  };
  return (
    <div className="flex justify-center flex-shrink-0 mt-[160px] md:mt-[120px] flex-wrap gap-3 p-6 lg:mr-[270px] ml-0 mr-0">
      {data.length !== 0 &&
        data.map((item) => (
          <div
            id={item.id}
            className={`text-center${activeButtonId ? "_active" : ""}`}
          >
            <button
              onClick={() => handleButtonClick(item.id)}
              id={`btn-${item.id}`}
              className="button-box"
            >
              {item.workGroupName}
            </button>
          </div>
        ))}
      {/* <div className="text-center">
        <button id="page-1" className="button-box_active">
          پارک و شهربازی ها
        </button>
      </div>
      <div className="text-center">
        <button id="page-3" className="button-box">
          رستوران های موزیک دار
        </button>
      </div>
      <div className="text-center">
        <button id="page-2" className="button-box">
          نمایش ها و جنگ ها
        </button>
      </div>
      <div className="text-center">
        <button id="page-4" className="button-box">
          کافه ها و رستوران ها
        </button>
      </div>
      <div className="text-center">
        <button id="page-5" className="button-box">
          تفریحات آبی
        </button>
      </div>
      <div className="text-center">
        <button id="page-6" className="button-box">
          کشتی های تفریحی
        </button>
      </div>
      <div className="text-center">
        <button id="page-7" className="button-box">
          تور ها و گشت ها
        </button>
      </div>
      <div className="text-center">
        <button id="page-8" className="button-box">
          اماکن تاریخی و موزه ها
        </button>
      </div> */}
    </div>
  );
};

export default ButtonBox;
