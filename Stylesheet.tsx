import { StyleSheet } from "react-native";

// may break down into different objects

const styles = StyleSheet.create({
  // ----------- Global Container Styles ----------- //
  container1: {
    paddingTop: 14,
    paddingLeft: 15,
    backgroundColor: "#F5F3F3",
    height: "100%"
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
