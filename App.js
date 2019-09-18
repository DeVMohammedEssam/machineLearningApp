import React, {PureComponent} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import RNCamera from './src/components/RNCamera';
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      source: null,
      camIsOpened: false,
    };
  }

  closeCamera = () => {
    this.setState({camIsOpened: false});
  };
  openCamera = () => {
    this.setState({camIsOpened: true});
  };
  takePicture = async camera => {
    const options = {quality: 0.5, base64: true, path: 'images'};
    const data = await camera.takePictureAsync(options);
    this.setState({source: data.base64}, () => {
      console.log('the data is:', data);
    });
  };
  render() {
    const {camIsOpened} = this.state;
    return camIsOpened ? (
      <RNCamera />
    ) : (
      <View style={styles.container}>
        <Button title="open cam" onPress={this.openCamera} />
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickImageBtn: {
    marginTop: 10,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
