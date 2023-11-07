import { StyleSheet } from 'react-native';


  const styles = StyleSheet.create({
  
    //overall components
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      overflow: 'scroll',
      minHeight: '100%',
      width: '100%',
      overflow: 'scroll',
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
      marginTop: 20,
      marginBottom: 30,
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
      marginBottom: 40,
      alignSelf: 'center',
    },
    bottomContainer: {
      marginTop: 20,
      marginBottom: 40,
      width: '100%',
      minHeight: '5%',
      justifyContent: 'center',
      alignItems:'center',
      bottom: 0,
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
      height: '100%',
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
    minHeight: '30%',
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
    marginBottom: 20,
    alignSelf: 'center',

  },
line: {
  borderBottomWidth: 3, 
  borderBottomColor: '#9985FF', 
  width: '80%',
  alignSelf: 'center',
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
  height: '6%',
  marginBottom: 20,
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
  marginBottom: 100,
},
profileImageContainer: {
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: 'hidden',
  borderWidth: 5,
  borderColor: '#9985FF',
  padding: 10,
},
profileImage: {
  width: '100%',
  height: '100%',
},
arrowButton: {
  padding: 10,
},
arrowIcon: {
  width: 30,
  height: 30,
  resizeMode: 'contain', 
},



//styling for home page
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
  width: 40,
  height: 40,
  bottom: 20,
  marginRight: 20,
  marginTop: 20,
},


  
});
  
  export default styles;