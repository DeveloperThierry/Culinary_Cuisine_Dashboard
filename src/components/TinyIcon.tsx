import React from "react";
type TinyIconProps = {
  color: string;
  text: string;
};
const TinyIcon = ({ color, text }: TinyIconProps) => {
  const colorClasses = `bg-${color}-700 hover:bg-${color}-800`;

  return (
    <div>
      <button
        type="button"
        className={`${colorClasses} text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2`}
      >
        {text}
      </button>
    </div>
  );
};

export default TinyIcon;
