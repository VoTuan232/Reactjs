import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";
import ComponentF from "./ComponentF";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      User is {user} and channel is {channel}
      <ComponentF />
    </div>
  );
}

export default ComponentE;
