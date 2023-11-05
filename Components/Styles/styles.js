import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

  //overall components
  container: {
    flex: 1,
    justifyContent: 'flex-center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    overflow: 'scroll',
  },
  nextbuttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
  nextButton: {
    backgroundColor: '#9985FF',
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
    width: '90%', 
    marginBottom: 20,
    alignSelf: 'center',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  secondbuttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#9985FF',
  },
  secondButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 100,
    borderColor: '#9985FF',
    borderWidth: 1,
    width: '90%', 
    marginBottom: 60,
    alignSelf: 'center',
  },

//Style for Testscreen
  testImage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  questionBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    width: '90%', 
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#9985FF',
    fontWeight: 'bold',
    marginBottom: 20,
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
    width: '80%',
  },
  summaryBox: {
    width: '90%',
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
yogaImage: {
  width: 300,
  height: 300,
  alignSelf: 'center',
  marginTop: 20,
  marginBottom: 30,
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

});

export default styles;
