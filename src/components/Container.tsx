import React from "react";
import { ContainerProps } from "../types/recipe";

const Container = ({ children }: ContainerProps) => {
  return <div className="flex flex-row gap-4 ">{children}</div>;
};

export default Container;
