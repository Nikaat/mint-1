import React from "react";

import Auxiliary from "../Auxiliary/Auxiliary";
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
import GenderSelection from "../../Containers/GenderSelectionPage/GenderSelection";

const Layout = () => {
  return (
    <Auxiliary>
      <NavigationItems />
      <GenderSelection />
    </Auxiliary>
  );
};

export default Layout;
