import React, { FC, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

interface IProps {
  refetch: any;
}

const Container: FC<IProps> = props => {
  const { refetch } = props;
  const [signup, signUpToggle] = useState(true);
  return signup ? (
    <Signup toggle={signUpToggle} refetch={refetch} />
  ) : (
    <Login toggle={signUpToggle} refetch={refetch} />
  );
};

export default Container;
