import React from "react";
import { ContainerProps } from "../types/recipe";

const InnerContainer = ({ children }: ContainerProps) => {
  return <div className="flex-1 flex justify-center">{children}</div>;
};

export default InnerContainer;
