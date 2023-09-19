import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRotateAnimation = () => {
  const [isRotating, setIsRotating] = useState(false);
  const loading = useSelector((state) => state.ui.loading);
  useEffect(() => {
    loading ? setIsRotating(true) : setIsRotating(false);
  }, [loading]);
  return isRotating;
};

export default useRotateAnimation;
