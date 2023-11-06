import { StyleSheet } from 'react-native';


  const styles = StyleSheet.create({
  
    //overall components
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      overflow: 'scroll',
      height: '100%',
      width: '100%',
    },
    nextbuttonText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#ffffff',
    },
    nextButton: {
      backgroundColor: '#9985FF',
      padding: 15,
      borderRadius: 100,
      marginTop: 20,
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
      fontSize: 16,
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
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      color: '#9985FF',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    questionText1: {
      fontSize: 15,
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
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      width: '90%',
    },
    summaryBox: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#9985FF',
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
      fontSize: 16,
      fontWeight: 'bold',
    },
    summaryAnswerText: {
      color: 'black',
    },
    box: {
      width: '100%',
    },
    summaryText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    scrollViewStyle: {
      flexGrow: 1,
      width: '100%',
      marginBottom: 20,
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
    fontSize: 16,
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
  },
line: {
  borderBottomWidth: 3, 
  borderBottomColor: '#9985FF', 
  width: '80%',
  alignSelf: 'center',
  marginBottom: 20,
  borderRadius: 100,
}

  
  });
  
  export default styles;