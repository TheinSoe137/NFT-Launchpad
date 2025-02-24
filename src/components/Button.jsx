import React from "react";

function Button({
  children,
  type = "button",
  backgroundColor = "skyblue",
  color = "white",
  className ="border border-white text-white bg-transparent px-2 py-2 text-xs sm:px-2.5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base  rounded-lg transition-all duration-300 ease-in-out  hover:bg-white hover:text-black  focus:outline-none focus:ring-2 focus:ring-white  disabled:opacity-50 disabled:cursor-not-allowed",
  ...props
}) {
  return (
    <button className={className} type={`${type}`} {...props}>
      {children}
    </button>
  );
}

export default Button;