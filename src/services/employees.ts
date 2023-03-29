import axios from "axios";
import React from "react";
import { IEmployees } from "../interfaces/IEmployees";

export const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});
export const getEmployees = async (
  setPost: React.Dispatch<React.SetStateAction<IEmployees[]>>
) => {
  await service.get("employees").then((resp) => {
    setPost(resp.data);
  });
};
