import React from "react";
import UserLayout from "./userLayout";
import UserDashboard from "./userDashboard"
const userDashboard = () => {
  return(
    <UserLayout>
           <UserDashboard/>
    </UserLayout>
  )
};

export default userDashboard;
