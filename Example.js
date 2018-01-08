import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import MapView from 'react-native-map';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
  },
});

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated          
        />
        <Text>Mapa</Text>
        <MapView
          style={{
            flex: 1,
          }}
          zoom={10}
          multiTouchControls={true}
          router={{
            titleA: 'Minha localização',
            descriptionA: 'teste',
            titleB: 'Cliente',
            descriptionB: 'Endereço do Cliente',      
            coordinates: [
                {
                  latitude: -11.8604538,
                  longitude: -55.5217464
                },
                {
                  latitude: -11.8602939,
                  longitude: -55.5216033
                },
                {
                  latitude: -11.8602939,
                  longitude: -55.5216033
                }
              ]
          }}
          />
      </View>
    );
  }
}
