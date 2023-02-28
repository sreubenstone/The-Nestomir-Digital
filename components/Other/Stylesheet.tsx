import { StyleSheet } from "react-native";

const ChapterLoaderStyles = StyleSheet.create({
  overlaybox: {
    position: "absolute",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F3F3",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  image: {
    height: 40,
    width: 25,
    marginRight: 20,
    marginTop: 50,
  },
});

const BookStyles = StyleSheet.create({
  bookFont: {
    fontSize: 19,
    lineHeight: 30,
    fontFamily: "gelasio",
  },
});

const ProgressCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 120,
    borderRadius: 13,
    padding: 10,
    shadowOffset: { width: 5, height: 10 },
    shadowColor: "#f7faf8",
    shadowOpacity: 1,
    marginBottom: 12,
  },

  tagContainer1: {
    alignSelf: "flex-start",
    backgroundColor: "#b1b4da",
    shadowColor: "#000",
    margin: 0,
    borderRadius: 17,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 5,
    marginTop: 5,
  },

  tagContainer2: {
    alignSelf: "flex-start",
    backgroundColor: "#4a4b4a",
    shadowColor: "#000",
    margin: 0,
    borderRadius: 17,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 5,
    marginTop: 5,
  },

  im: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 0,
  },
});

const ProgressStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "gelasio-bold",
    textAlign: "center",
    marginBottom: 6,
  },

  subTitle: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
  },

  container: {
    height: "84%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 10,
    position: "absolute",
    top: "16%",
    paddingTop: 14,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#FFF",
  },
});

const GlobalStyles = StyleSheet.create({
  container1: {
    paddingTop: 14,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#F5F3F3",
    height: "100%",
  },

  flexRow: {
    flexDirection: "row",
  },

  flexRowSpace: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  flexCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },

  imageCard: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  chapterImage: {
    width: 140,
    height: 140,
    marginBottom: 15,
  },

  textHeader: {
    fontSize: 26,
    fontFamily: "gelasio-med",
    marginBottom: 10,
  },

  textCardTitle: {
    fontSize: 15,
    fontFamily: "gelasio-med",
  },

  textCardSubtitle: {
    fontSize: 15,
    fontFamily: "gelasio",
    marginTop: 5,
  },

  headerText: {
    fontSize: 11,
    fontFamily: "gelasio-med",
  },

  bookTitle: {
    fontSize: 20,
    fontFamily: "gelasio-bold",
    textAlign: "center",
    marginBottom: 10,
  },

  chapterTitle: {
    fontSize: 23,
    fontFamily: "gelasio-bold",
    textAlign: "center",
    marginTop: 55,
    marginBottom: 10,
  },

  chapterSubTitle: {
    fontSize: 14,
    fontFamily: "gelasio-bold",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },

  chapterSubTitleCaption: {
    fontSize: 12,
    fontFamily: "gelasio",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 20,
  },
});

export { GlobalStyles, ProgressStyles, ProgressCardStyles, BookStyles, ChapterLoaderStyles };
