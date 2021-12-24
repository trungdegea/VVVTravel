import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrive } from "../redux/actions/auth";

const useRetrive = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return async () => {
    dispatch(await retrive());
  };
};

export default useRetrive;
