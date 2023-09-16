import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfItemsFromSelectedCategoryHandler } from "../../../store/category-actions";
import CardItem from "./CardItem";
import MyCardLoader from "../../Layout/MyCardLoader";

const Cards = () => {
  const cardsData = useSelector(
    (state) => state.category.selectedCategoryItems
  );
  console.log("cardsData", cardsData);

  return (
    <div>
      {!cardsData.length ? (
        <div className="grid grid-col-1 md:grid-cols-4 gap-x-3 gap-y-5">
          <MyCardLoader />
          <MyCardLoader />
          <MyCardLoader />
          <MyCardLoader />
        </div>
      ) : (
        <div className="grid grid-col-1 md:grid-cols-4 gap-x-3 gap-y-5">
          {cardsData.map((item) => (
            <CardItem id={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
