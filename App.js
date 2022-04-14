// Image Mapper in React Native to Create Clickable Areas on Image
// https://aboutreact.com/react-native-image-mapper/

// Import React
import React, { Component } from 'react';
// Import Required Components
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

//Import ImageMapper Component
import ImageMapper from 'react-native-image-mapper';

export default class App extends Component {
  state = {
    titlePageDisplay: 'block',
    instructionsPageDisplay: 'none',
    mainPageDisplay: 'none',
    selectedAreaId: [],
    //message: '',
    currentNote: '',
    RECTANGLE_MAP: [
      {
        id: '0',
        name: 'E',
        shape: 'rectangle',
        x2: 340,
        y2: 103,
        x1: 20,
        y1: 93,
        prefill: 'none',
      },
      {
        id: '1',
        name: 'F',
        shape: 'rectangle',
        x2: 340,
        y2: 91.5,
        x1: 20,
        y1: 81.5,
        prefill: 'none',
      },
      {
        id: '2',
        name: 'G',
        shape: 'rectangle',
        x2: 340,
        y2: 80.5,
        x1: 20,
        y1: 70.5,
        prefill: 'none',
      },
      {
        id: '3',
        name: 'A',
        shape: 'rectangle',
        x2: 340,
        y2: 69.5,
        x1: 20,
        y1: 59.5,
        prefill: 'none',
      },
      {
        id: '4',
        name: 'B',
        shape: 'rectangle',
        x2: 340,
        y2: 58.5,
        x1: 20,
        y1: 48.5,
        prefill: 'none',
      },
      {
        id: '5',
        name: 'C',
        shape: 'rectangle',
        x2: 340,
        y2: 47.5,
        x1: 20,
        y1: 37.5,
        prefill: 'none',
      },
      {
        id: '6',
        name: 'D',
        shape: 'rectangle',
        x2: 340,
        y2: 36.5,
        x1: 20,
        y1: 26.5,
        prefill: 'none',
      },
    ],
  };

  getRandomNote = () => {
    //Function to return random note
    const letters = 'EFGABCD';
    let note = '';
    note += letters[Math.floor(Math.random() * 7)];
    return note;
  };

  handleStartButtonPress = () =>
    this.setState((state) => ({
      titlePageDisplay: 'none',
      instructionsPageDisplay: 'block',
      mainPageDisplay: 'none',
    }));

  handleContinueButtonPress = () =>
    this.setState((state) => ({
      titlePageDisplay: 'none',
      instructionsPageDisplay: 'none',
      mainPageDisplay: 'block',
      currentNote: this.getRandomNote(),
    }));

  handleGoBackButtonPress = () =>
    this.setState((state) => ({
      titlePageDisplay: 'none',
      instructionsPageDisplay: 'block',
      mainPageDisplay: 'none',
    }));

  handleNextButtonPress = () =>
    this.setState((state) => ({
      message: '',
      currentNote: this.getRandomNote(),
    }));

  setSelectedAreaId = () =>
    this.setState((state) => ({
      selectedAreaId: [],
    }));

  //https://www.npmjs.com/package/react-native-image-mapper
  checkNote = (item, index, event) => {
    if (this.state.currentNote == item.name) {
      alert('You clicked the right space! Good job!');
    } else if (this.state.currentNote != item.name) {
      alert('You clicked the wrong note!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ display: this.state.titlePageDisplay }}>
          <View style={styles.container}>
            <Text style={styles.titleText}>MUSIC THEORY APP</Text>

            <TouchableHighlight onPress={this.handleStartButtonPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>START</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{ display: this.state.instructionsPageDisplay }}>
          <View style={styles.container}>
            <Text style={styles.instructionsText}>
              Welcome to the Music Theory app! On the next screen you will be
              prompted to click on the spaces where specific notes belong in the
              treble clef. Click the line where the note goes. A message will
              appear saying if you got it right or wrong. Good luck!
            </Text>

            <TouchableHighlight onPress={this.handleContinueButtonPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>CONTINUE</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{ display: this.state.mainPageDisplay }}>
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Click where the note {this.state.currentNote} belongs
            </Text>

            <ImageMapper
              imgHeight={deviceHeight / 5}
              imgWidth={deviceWidth}
              imgSource={{
                uri: 'https://sixstringacoustic.com/wp-content/uploads/2015/12/treble-clef-from-pixabay-extended.jpg',
              }}
              imgMap={this.state.RECTANGLE_MAP}
              onPress={(item, idx, event) => this.checkNote(item, idx, event)}
              containerStyle={{ top: 50 }}
              selectedAreaId={this.state.selectedAreaId}
              multiselect
            />

            <TouchableHighlight onPress={this.handleNextButtonPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightBlue',
  },
  titleText: {
    color: 'purple',
    fontSize: 45,
    fontWeight: 'bold',
    margin: 70,
  },
  button: {
    height: deviceHeight / 10,
    width: deviceWidth / 3,
    backgroundColor: 'white',
    borderWidth: 1,
    boderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  buttonText: {
    color: 'black',
  },
  instructionsText: {
    fontSize: 20,
    margin: 20,
  },
  paragraph: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
});
