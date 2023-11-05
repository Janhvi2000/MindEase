import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-center',
    alignItems: 'center',
    marginBottom: '100',
    backgroundColor: '#ffffff',
  },
  testImage: {
    width: 200,
    height: 200,
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
    width: '100%', // Set the width to 100%
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    width: '100%', 
  },
  nextbuttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
  nextButton: {
    backgroundColor: '#9985FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%', 
  },
  summaryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: '100%',
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
});

export default styles;
