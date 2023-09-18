import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfEvents } from "../../../store/category-actions";
import CardItem from "./CardItem";
import MyCardLoader from "../../Layout/MyCardLoader";

const Cards = () => {
  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.category.eventsItems);
  const eventID = useSelector((state) => state.category.eventID);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(fetchListOfEvents(eventID, token));
   
  }, [dispatch, eventID, token]);

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
            <CardItem key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
