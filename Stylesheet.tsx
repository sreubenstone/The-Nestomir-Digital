import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // ----------- Global Container Styles ----------- //
  container1: {
    paddingTop: 60,
    paddingLeft: 15
  },

  // ----------- Flex Container Styles ----------- //
  flexRow: {
    flexDirection: "row"
  },

  // ----------- Image Styles ----------- //
  imageCard: {
    width: 50,
    height: 50,
    borderRadius: 10
  },

  // ----------- Text Styles ----------- //
  textHeader: {
    fontSize: 26,
    fontFamily: "gelasio-med",
    marginBottom: 10
  },

  textCardTitle: {
    fontSize: 15,
    fontFamily: "gelasio-med"
  },

  textCardSubtitle: {
    fontSize: 12
  }
});

export default styles;
