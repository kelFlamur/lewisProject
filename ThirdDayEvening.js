import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, View,  } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import storage from '@react-native-firebase/storage';


const { width } = Dimensions.get('screen');

export const getFileLocalPath = response => {
  const { path, uri } = response;
  return Platform.OS.path;
};

var myText = ""; // full text from file
var textUrl = "gs://capstone-project-d4246.appspot.com/Day3.txt"
var imageUrl = "gs://capstone-project-d4246.appspot.com/thirdDay.jpg"; // image for the day from the file
var storageUrl = "gs://capstone-project-d4246.appspot.com";
var image;
class ThirdDayAfternoon extends React.Component {
  
ImportFromFileBodyComponent = () => {
  let fileReader;
}
handleImageFileRead = () => {
  const uploadFile = () => {
    ImagePicker.launchImageLibrary(imagePickerOptions, response => {
      if (response.didCancel) {
        // user has stopped
      } else {
        image = setImageURI({ imageUrl: response.uri });
        console.log(getFileLocalPath(response));
      }
    });
  };
}

 exportFileFromFireBase = imagePickerResponse => {
  const fileSource = getFileLocalPath(textUrl);
  const storageRef = createStorageReferenceToFile(storageUrl);
  myFile = storageRef.readFile(fileSource);
  for (var line in file){
    myText = myText.concat(line);
  }
}
  render() {
    return (
      <ScrollView>
        <Block flex center style={styles.home}>
          <Text h3> center> Day Three Evening</Text>
          <Image>style={styles.text} {image}</Image>
          <Text>style={styles.text} {myText}</Text>

        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  text: {
    marginBottom: 20
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default ThirdDayAfternoon;