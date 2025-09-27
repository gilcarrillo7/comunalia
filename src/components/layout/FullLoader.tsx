import React from "react";
import { PulseLoader } from "react-spinners";

const FullLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PulseLoader color="#78040A" />
    </div>
  );
}

export default FullLoader;