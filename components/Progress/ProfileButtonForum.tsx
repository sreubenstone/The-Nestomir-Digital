import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH } from "../Other/queries";
import { TouchableOpacity, Image, Dimensions } from "react-native";

interface IProps {
  navigation: any;
  toggleProfileModal: () => void;
}

const ProfileButtonForum: FC<IProps> = ({ toggleProfileModal }) => {
  const windowWidth = Dimensions.get("window").width;
  const { data } = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });

  return (
    <TouchableOpacity onPress={() => toggleProfileModal()}>
      <Image style={{ width: windowWidth < 800 ? 34 : 50, height: windowWidth < 800 ? 34 : 50, borderRadius: windowWidth < 800 ? 17 : 25, marginLeft: windowWidth < 800 ? 11 : 23 }} source={{ uri: `${data.getAuth.user_avatar}` }} />
    </TouchableOpacity>
  );
};

export default ProfileButtonForum;
