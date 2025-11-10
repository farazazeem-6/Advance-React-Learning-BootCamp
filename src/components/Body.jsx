import React from "react";
import Card from "./Card";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks like you are offline.Please check your internet...</h1>;
  return (
    <div className="res-container">
      <Card />
    </div>
  )
}

export default Body;
