import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import testImage from '../Pictures/Test.png';
import styles from '../Styles/styles';

const category1 = [
  'Do you consider yourself a risk-taker?',
  'Are you someone who values spontaneity?',
  'Would you describe yourself as open-minded?',
  'Do you tend to procrastinate?',
  'Would you say you are an ambitious person?',
  'How well do you adapt to new situations and environments?',
  'Do you prioritize self-improvement?'
];

const category2 = [
  'How well do you handle stress?',
  'Do you believe you possess a high level of empathy towards others?',
  'Are you comfortable with change and uncertainty?',
  'Do you enjoy social interactions?',
  'Are you able to handle criticism well?',
  'How important is honesty and transparency in your relationships?',
  'Would you say you are a patient person?'
];

const category3 = [
  'How organized are you in your daily life?',
  'How much do you value teamwork?',
  'Are you someone who seeks out new learning opportunities?',
  'Are you attentive to detail?',
  'How comfortable are you with delegating tasks to others?',
  'How important is work-life balance to you?'
];

const categories = ['Personal Characteristics & Traits', 'Emotional Intelligence & Interpersonal Skills', 'Learning & Development'];

const options = ['1', '2', '3', '4', '5']; // Radio button labels

const Questionnaire = ({navigation}) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(category1.length + category2.length + category3.length).fill('Not answered'));
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // State to manage selected option

  const categoryQuestions = [category1, category2, category3];

  const handleNext = () => {
    const totalCategories = categories.length;

    if (currentQuestion < categoryQuestions[currentCategory].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentCategory < totalCategories - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentQuestion(0);
    } else {
      setShowSummary(true);
    }
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    const updatedAnswers = [...answers];
    const questionIndex = currentQuestion + currentCategory * categoryQuestions[0].length;
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const getQuestionNumber = (categoryIndex, questionIndex) => {
    return categoryIndex * categoryQuestions[0].length + questionIndex + 1;
  };

  useEffect(() => {
    setSelectedOption(null); 
  }, [currentQuestion, currentCategory]);

  const handleNextAndNavigate = () => {
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      {showSummary ? (
        <ScrollView style={styles.summaryScrollView}>
        <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Summary</Text>
        
          <View style={styles.summaryBox}>
            {answers.map((answer, index) => (
              <View key={index} style={styles.summaryAnswer}>
                <Text style={styles.summaryQuestion}>
                  {answer !== 'Not answered'
                    ? `${getQuestionNumber(
                        Math.floor(index / categoryQuestions[0].length),
                        index % categoryQuestions[0].length
                      )}. ${
                        categoryQuestions[Math.floor(index / categoryQuestions[0].length)][
                          index % categoryQuestions[0].length
                        ]
                      }`
                    : `${getQuestionNumber(
                        Math.floor(index / categoryQuestions[0].length),
                        index % categoryQuestions[0].length
                      )}. ${
                        categoryQuestions[Math.floor(index / categoryQuestions[0].length)][
                          index % categoryQuestions[0].length
                        ]
                      }`
                  }
                </Text>
                <Text style={styles.summaryAnswerText}>
                  Answer: {answer !== 'Not answered' ? answer : 'Not answered'}
                </Text>
              </View>
            ))}
          </View>
          <View style= {styles.bottomContainer}>
          <TouchableOpacity onPress={handleNextAndNavigate} style={styles.nextButton}>
              <Text style={styles.nextbuttonText}>Next</Text>
            </TouchableOpacity>
          </View>

      </View>
      </ScrollView>
      ) : (
      <View style={styles.questionBox}>
          <Image source={testImage} style={styles.image} />
          <View style={styles.box}>
            <Text style={styles.questionText}>{categories[currentCategory]}</Text>
            <Text style={styles.questionText1}>{getQuestionNumber(currentCategory, currentQuestion)}.{' '}{categoryQuestions[currentCategory][currentQuestion]}</Text>
            <View style={styles.optionsBox}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleOptionChange(option)}
                  style={[
                    styles.option,
                    selectedOption === option && { backgroundColor: '#9985FF', borderColor: '#9985FF' },
                  ]}
                >
                  <Text style={[styles.buttonText, selectedOption === option && { color: '#ffffff' }]}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          <View style= {styles.bottomContainer}>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextbuttonText}>Next</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
    )}
  </View>
);
};

export default Questionnaire;
