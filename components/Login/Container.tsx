import React, { FC, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Container: FC = props => {
  const [signup, signUpToggle] = useState(true);
  return signup ? (
    <Signup toggle={signUpToggle} />
  ) : (
    <Login toggle={signUpToggle} />
  );
};

export default Container;
