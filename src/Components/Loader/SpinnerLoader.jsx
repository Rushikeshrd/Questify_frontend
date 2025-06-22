import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
    </div>
  );
};

export default SpinnerLoader;
