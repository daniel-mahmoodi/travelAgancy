import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

function TicketExpiringTimer({ expirationTime }) {
  const dispatch = useDispatch();
  const [remainingTime, setRemainingTime] = useState();
  const [haveRemainingTime, setHaveRemainingTime] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRemainingTime = calculateRemainingTime();
      setRemainingTime(newRemainingTime);

      if (newRemainingTime <= 0) {
        setHaveRemainingTime(false);
        clearInterval(intervalId); // Stop the interval when time has expired
      }
    }, 1000); // Update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [expirationTime]);

  function calculateRemainingTime() {
    const currentTime = new Date().toLocaleTimeString();
    function addTimes(expirationTime, currentTime) {
      const [expH, expM, expS] = expirationTime
        .split(" ")[0]
        .split(":")
        .map(Number);
      const [curH, curM, curS] = currentTime
        .split(" ")[0]
        .split(":")
        .map(Number);
      const totalSeconds =
        expH * 3600 + expM * 60 + expS - (curH * 3600 + curM * 60 + curS);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      const remainedTime =
        totalSeconds > 0
          ? `${hours}:${String(minutes).padStart(2, "0")}:${String(
              seconds
            ).padStart(2, "0")}`
          : "سبد خالی";
      if (totalSeconds <= 0) {
        dispatch(cartActions.toggleExpiredCart(true));
      }
      return remainedTime;
    }
    return addTimes(expirationTime, currentTime);
  }

  return (
    <div>
      {haveRemainingTime ? (
        <p className=" text-center">{remainingTime}</p>
      ) : (
        <p>سبد خالی </p>
      )}
    </div>
  );
}

export default TicketExpiringTimer;
