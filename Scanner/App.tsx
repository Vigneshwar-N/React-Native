import {
  Clipboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  getCameraDevice,
  useCameraDevice,
  CodeScanner,
} from 'react-native-vision-camera';
export default function App() {
  const cameraPermission = Camera.getCameraPermissionStatus();
  const [scannedCode, setscannedCode] = useState('');

  const newCameraPermission = Camera.requestCameraPermission();

  const device = useCameraDevice('back');

  const codeScanner: CodeScanner = {
    codeTypes: [
      'qr',
      'ean-13',
      'code-128',
      'codabar',
      'aztec',
      'code-39',
      'code-93',
      'data-matrix',
      'ean-8',
      'itf',
      'pdf-417',
      'upc-a',
      'upc-e',
    ],
    onCodeScanned: codes => {
      setscannedCode(codes[0].value);
    },
  };

  return (
    <View style={styles.container}>
      <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 40}}>
        scan QR / Barcode Code
      </Text>
      <Text style={{color: '#000000', fontWeight: 'bold'}}>
        Place The Code inside frame to scan
      </Text>
      <Camera
        style={{
          height: '50%',
          width: '90%',
          alignSelf: 'center',
          position: 'relative',
        }}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
      {scannedCode ? (
        <Text
          style={{color: '#000000', fontWeight: 'bold', alignSelf: 'center'}}>
          Scanned Code: {scannedCode}
        </Text>
      ) : (
        <Text style={{color: '#000000', fontWeight: 'bold'}}>
          {' '}
          Code not scanned{' '}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
