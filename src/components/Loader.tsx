import React from "react";

const Loader = () => {
  return (
    <div className="flex p-16 flex-row gap-4 justify-center items-center">
      <div className="w-16 h-16 rounded-full bg-red-500 animate-bounce"></div>
      <div className="w-16 h-16 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-16 h-16 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default Loader;
