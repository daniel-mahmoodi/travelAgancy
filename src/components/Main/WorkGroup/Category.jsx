import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyCategoryLoader from "../../Layout/MyCategoryLoader";
import { categoryActions } from "../../../store/category-slice";
import {
  fetchListOfCategories,
  fetchListOfEvents,
} from "../../../store/category-actions";

const Category = () => {
  const data = useSelector((state) => state.category.categoriesItems);
  const [activeButtonId, setActiveButtonId] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      dispatch(fetchListOfCategories(token));
    }
  }, [token, dispatch]);
  const handleButtonClick = (id) => {
    setActiveButtonId(id);
    dispatch(categoryActions.selectedEventID(id));
    dispatch(fetchListOfEvents(id, token));
  };

  return (
    <div className="lg:mr-[270px]">
      {!data.length ? (
        <div className="flex justify-center flex-shrink-0 flex-wrap gap-3 p-6  ml-0 mr-0">
          <MyCategoryLoader />
          <MyCategoryLoader />
          <MyCategoryLoader />
          <MyCategoryLoader />
          <MyCategoryLoader />
          <MyCategoryLoader />
          <MyCategoryLoader />
        </div>
      ) : (
        <div className="flex justify-center flex-shrink-0  flex-wrap gap-3 p-6  ml-0 mr-0">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              <button
                onClick={() => handleButtonClick(item.id)}
                id={`btn-${item.id}`}
                className={`button-box${
                  activeButtonId === item.id ? "_active" : ""
                }`}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
