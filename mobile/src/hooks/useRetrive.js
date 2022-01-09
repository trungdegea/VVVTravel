import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieve } from "../redux/actions/auth";

const useRetrieve = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return async () => {
    dispatch(await retrieve());
  };
};

export default useRetrieve;
