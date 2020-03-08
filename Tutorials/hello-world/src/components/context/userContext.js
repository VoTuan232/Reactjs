import React from "react";

const UserContext = React.createContext("votuanbk232"); // value default => dont has Userprovider at ComponentC

const UserProvider = UserContext.Provider;
const UserConsume = UserContext.Consumer;

export { UserProvider, UserConsume };
export default UserContext;
