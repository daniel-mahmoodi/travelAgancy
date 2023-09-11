import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import {
  fetchListOfCategoriesHandler,
  fetchListOfItemsFromSelectedCategoryHandler,
} from "../../store/category-actions";
const Category = () => {
  const data = useSelector((state) => state.category.categoriesItems);
  console.log('Categoriesdata',data);
  const [activeButtonId, setActiveButtonId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListOfCategoriesHandler());
  }, [dispatch]);
  const handleButtonClick = (id) => {
    setActiveButtonId(id);
    dispatch(categoryActions.categorySelectedID(id));
    dispatch(fetchListOfItemsFromSelectedCategoryHandler(id));
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
              {item.name}
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

export default Category;
