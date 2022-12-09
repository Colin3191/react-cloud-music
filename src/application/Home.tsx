import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      home
      <Outlet />
    </div>
  );
};

export default memo(Home);
