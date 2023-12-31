import { StyleSheet } from 'react-native';


  const styles = StyleSheet.create({
  
    //overall components
    container: {
      alignItems: 'center',
      backgroundColor: '#ffffff',
      overflow: 'scroll',
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    nextbuttonText: {
      fontSize: 20,
      textAlign: 'center',
      color: '#ffffff',
    },
    nextButton: {
      backgroundColor: '#9985FF',
      padding: 15,
      borderRadius: 100,
      marginTop: 10,
      width: '80%', 
      marginBottom: 20,
      alignSelf: 'center',
    },
    image: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      marginBottom: 5,
      resizeMode: 'contain',
    },
    secondbuttonText: {
      fontSize: 20,
      textAlign: 'center',
      color: '#9985FF',
    },
    secondButton: {
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 100,
      borderColor: '#9985FF',
      borderWidth: 1,
      width: '80%', 
      marginBottom: 10,
      alignSelf: 'center',
    },
    bottomContainer: {
      marginTop: 20,
      marginBottom: 40,
      width: '100%',
      height: '100%',
      minHeight: '5%',
      justifyContent: 'center',
      alignItems:'center',
      bottom: 0,
      resizeMode: 'contain',
    },
    end: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    },
  
  //Style for Testscreen
    questionBox: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      paddingHorizontal: 20,
      width: '100%', 
      height: '80%',
      marginBottom: 20,
      overflow: 'visible',
    },
    questionText: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 10,
      color: '#9985FF',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    questionText1: {
      fontSize: 20,
      textAlign: 'justify',
      marginTop: 10,
    },
    optionsBox: {
      flexDirection: 'column',
      marginTop: 20,
    },
    option: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
      width: '100%', 
    },
    buttonText: {
      fontSize: 16,
      textAlign: 'center',
      width: '100%', 
    },
    summaryContainer: {
      flex: 1,
      margin: 20,
      width: '80%',
    },
    summaryBox: {
      width: '100%',
      padding: 15,
      borderRadius: 5,
      margin: 10,  
      alignSelf: 'center',
    },
    summaryAnswer: {
      marginBottom: 10,
    },
    summaryQuestion: {
      color: '#9985FF',
      fontSize: 20,
      fontWeight: 'bold',
    },
    summaryAnswerText: {
      color: 'black',
      fontSize: 20,
    },
    box: {
      width: '100%',
    },
    summaryText: {
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 30,
    },
  
  
  //Style for startpage
  
  startBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    width: '90%',
  },
  startText: {
    fontSize: 45,
    textAlign: 'center',
    color: '#9985FF',
  },
  startText1: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 60,
  },

  //style for feedback page
  input: { 
    width: '80%',
    minHeight: '20%',
    borderRadius: 30,
    borderColor: '#9985FF',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    alignSelf: 'center',
    fontSize: 20,
    color: '#9985FF',
    overflow: 'visible',
  },

//styles for signup page and login page
  inputfield: {
    fontSize: 20,
    textAlign: 'center',
    color: '#9985FF',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 100,
    borderColor: '#9985FF',
    borderWidth: 1,
    width: '80%', 
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
line: {
  borderBottomWidth: 3, 
  borderBottomColor: '#9985FF', 
  width: '80%',
  alignSelf: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  borderRadius: 100,
},


//style for crisis support
buttonItem: {
  flexDirection: 'row',
  backgroundColor: '#ffffff',
  paddingHorizontal: 7,
  borderRadius: 100,
  borderColor: '#9985FF',
  borderWidth: 1,
  width: '80%',
  height: '7%',
  marginBottom: 10,
},
iconTextContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
},
img: {
  width: 40,
  height: 40,
  borderRadius: 100,
  justifyContent: 'flex-start',
  resizeMode: 'contain',
},
secondbuttonText1: {
  fontSize: 20,
  textAlign: 'center',
  color: '#9985FF',
  width: '100%',
  position: 'absolute',
  padding: 5,
},

//style for profile
container1: {
  display: 'flex',
  flexDirection: 'row', 
  alignItems: 'center', 
  marginTop: 50,
},
profileImageContainer: {
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: 'hidden',
  borderWidth: 5,
  borderColor: '#9985FF',
  padding: 10,
  marginVertical: 30,
  position: 'relative',
},
profileImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'contain', 
},
arrowButton: {
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
arrowIcon: {
  width: 30,
  height: 30,
  resizeMode: 'contain', 
},
bottomContainer1: {
  marginTop: 20,
  width: '100%',
  height: '100%',
  minHeight: '5%',
  alignItems:'center',
},

//styling for home page,crisis,feedback,resource,progress pages
profileImageContainerSmall: {
  width: 70,
  height: 70,
  borderRadius: 35,
  overflow: 'hidden',
  borderWidth: 5,
  borderColor: '#9985FF',
  padding: 2,
  marginTop: 20,
  alignSelf: 'flex-end',
},
notif: {
  overflow: 'hidden',
  height: 70,
  alignSelf: 'flex-end',
},
bell: {
  width: 35,
  height: 30,
  bottom: 20,
  marginRight: 20,
  marginTop: 20,
  resizeMode: 'contain',
},
container2:{
  backgroundColor: '#ffffff',
  overflow: 'scroll',
  height: '100%',
  width: '100%',
  paddingBottom: 40,
  resizeMode: 'contain',
},


//resource library page
container4: {
  flex: 1,
  backgroundColor: '#ffffff',
},
container5: {
  justifyContent: 'center', 
  flexDirection: 'row',
  width: '100%',
  padding: 10,
},
imageContainer: {
  marginHorizontal: 10,
},
image1: {
  height: 100,
  width: 120,
  resizeMode: 'contain',
},
text1: {
  marginTop: 10,
  fontWeight: 'bold',
  fontSize: 30,
  paddingHorizontal: 15,
  color: '#9985FF',
},
container6: {
  backgroundColor: '#ffffff',
  overflow: 'scroll',
  height: '60%',
  width: '100%',
},
errorText: {
  color: 'red',
  fontSize: 12,
  alignSelf: 'flex-start',  
  marginLeft: '15%', 
},
errorText1: {
  color: 'red',
  textAlign: 'center',
  fontSize: 18,
},

//chatbot styling
container7: {
  flex: 1,
  justifyContent: 'flex-end',
},
chatContainer: {
  flex: 1,
  padding: 5,
  paddingTop: 20,
},
chatContentContainer: {
  paddingBottom: 40, 
},
userMessageContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: 5,
},
botMessageContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: 5,
},
userMessage: {
  backgroundColor: '#9985FF',
  padding: 10,
  borderRadius: 8,
  maxWidth: '80%',
  alignSelf: 'flex-end',
  marginBottom: 8,
  fontSize: 16,
},
botMessage: {
  backgroundColor: '#d9d9d9',
  padding: 8,
  borderRadius: 8,
  maxWidth: '80%',
  alignSelf: 'flex-start',
  marginBottom: 8,
  fontSize: 16,
},
iconContainer: {
  marginRight: 8,
  marginLeft: 8,
  marginBottom: 8,
  width: 32,
  height: 32,
},
icon1: {
  width: 30,
  height: 30,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#9985FF',
  resizeMode: 'contain',
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 4,
  borderTopWidth: 1,
  borderTopColor: '#ccc',
},
input1: {
  flex: 1,
  marginRight: 8,
  padding: 10,
  borderRadius: 8,
  fontSize: 16,
},

//journal
input3: {
  height: 50,
  width: '90%',
  borderColor: '#9985FF',
  borderWidth: 1,
  borderRadius: 10,
  marginHorizontal: 20,
  marginBottom: 10, 
  justifyContent: 'center',
  color: 'black',
  padding: 15,
  backgroundColor: 'white',
},
input2: {
  borderColor: '#9985FF',
  width: '90%',
  borderWidth: 1,
  paddingHorizontal: 8,
  borderRadius: 10,
  marginHorizontal: 20,
  marginBottom: 10, 
  height: '40%',
  textAlignVertical: 'top',
},
dropDownContainer: {
  backgroundColor: 'white',
},
container8: {
  flex: 1,
  backgroundColor: '#ffffff',
  bottom: 0,
},



//entrycard
card: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 16,
  marginVertical: 10,
  marginHorizontal: 20,
  width: '90%',
},
heading: {
  fontSize: 18,
  fontWeight: 'bold',
},
dateTime: {
  color: '#555',
  marginTop: 8,
},
mood: {
  marginTop: 8,
},
thoughts: {
  marginTop: 8,
},
bottomContainer2: {
  marginTop: 10,
  marginBottom: 10,
  width: '100%',
  height: 480,
  resizeMode: 'contain',
  position: 'relative',
},
bottomContainer3: {
  bottom: -30,
  width: '100%',
  resizeMode: 'contain',
  position: 'relative',
},
cardButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: 10,
},

editButton: {
  marginRight: 6,
},
editIcon: {
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: '#9985FF',
  resizeMode: 'contain',
  alignItems: 'center',
},


});
  
export default styles;
