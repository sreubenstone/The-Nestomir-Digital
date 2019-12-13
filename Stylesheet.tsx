import { StyleSheet } from "react-native";

// may break down into different objects

const styles = StyleSheet.create({
  // ----------- Global Container Styles ----------- //
  container1: {
    paddingTop: 14,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#F5F3F3",
    height: "100%"
  },

  // ----------- Flex Container Styles ----------- //
  flexRow: {
    flexDirection: "row"
  },

  flexCenter: {
    flexDirection: "row",
    justifyContent: "center"
  },

  // ----------- Image Styles ----------- //
  imageCard: {
    width: 50,
    height: 50,
    borderRadius: 10
  },

  chapterImage: {
    width: 140,
    height: 140,
    borderRadius: 14,
    marginBottom: 15
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
  },

  bookTitle: {
    fontSize: 20,
    fontFamily: "gelasio-bold",
    textAlign: "center",
    marginBottom: 10
  },

  chapterTitle: {
    fontSize: 17,
    fontFamily: "gelasio-bold",
    textAlign: "center",
    marginBottom: 10
  },

  bookFont: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "gelasio"
  }
});

export default styles;
