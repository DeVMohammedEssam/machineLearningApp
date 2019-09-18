import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {commonStyles} from '../common/styles';
/* import {RNCamera} from 'react-native-camera'; */
class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      source: null,
    };
  }

  takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    alert(data.uri);
  };
  render() {
    const {source} = this.state;
    return (
      <View style={commonStyles.container}>
        {/*    <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') return <ActivityIndicator size="large" />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}>
                  <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera> */}
        <Text>Hello</Text>
        <Button
          onPress={this.pickImageHandler}
          title="open cam"
          style={styles.pickImageBtn}
        />
      </View>
    );
  }
}
export default HomeScreen;
const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
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
