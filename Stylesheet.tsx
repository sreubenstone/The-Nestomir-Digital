import { StyleSheet } from "react-native";

// may break down into different objects
const ChapterCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 120,
    borderRadius: 13,
    padding: 10,
    shadowOffset: { width: 5, height: 10 },
    shadowColor: "#F7F8FA",
    shadowOpacity: 1,
    marginBottom: 12
  },

  tagContainer1: {
    alignSelf: "flex-start",
    backgroundColor: "#D3EBFC",
    shadowColor: "#000",
    margin: 0,
    borderRadius: 17,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: 5
  },

  tagContainer2: {
    alignSelf: "flex-start",
    backgroundColor: "#FCD7CB",
    shadowColor: "#000",
    margin: 0,
    borderRadius: 17,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: 5
  },

  im: {
    width: 100,
    height: 100,
    borderRadius: 14,
    marginBottom: 15
  }
});

const ChapterStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "gelasio-bold",
    textAlign: "center",
    marginBottom: 6
  },

  subTitle: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10
  },

  container: {
    height: "84%",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 10,
    position: "absolute",
    top: "16%",
    paddingTop: 14,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#FFF"
  }
});

const GlobalStyles = StyleSheet.create({
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

  headerText: {
    fontSize: 11,
    fontFamily: "gelasio-med"
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
    marginTop: 45,
    marginBottom: 10
  },

  bookFont: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "gelasio"
  }
});

export { GlobalStyles, ChapterStyles, ChapterCardStyles };
