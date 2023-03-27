import axios from "axios";
import React from "react";
import { IEmployees } from "../interfaces/IEmployees";

export const service = axios.create({
  baseURL: "http://localhost:3000/",
});
export const getEmployees = async (
  setPost: React.Dispatch<React.SetStateAction<IEmployees[]>>
) => {
  await service.get("employees").then((resp) => {
    setPost(resp.data);
  });
};
