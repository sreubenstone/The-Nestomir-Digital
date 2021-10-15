import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH } from "../../queries";
import { TouchableOpacity, Image } from "react-native";

import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  toggleProfileModal: () => void;
}

const ProfileButtonForum: FC<IProps> = ({ toggleProfileModal }) => {
  const { data } = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });

  return (
    <TouchableOpacity onPress={() => toggleProfileModal()}>
      <Image style={{ width: 34, height: 34, borderRadius: 17 }} source={{ uri: `${data.getAuth.user_avatar}` }} />
    </TouchableOpacity>
  );
};

export default ProfileButtonForum;
