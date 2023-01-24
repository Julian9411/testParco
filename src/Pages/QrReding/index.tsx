import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, FC} from 'react';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {StyleSheet} from 'react-native';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {QrRedingNavigationProp} from '../../navigation/types';

export const QrReding: FC = () => {
  const navigation = useNavigation<QrRedingNavigationProp['navigation']>();
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const [isScanned, setIsScanned] = useState(false);

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    },
  );

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  useEffect(() => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);
      navigation.navigate('PRODUCT', {code: barcodes?.[0]?.rawValue});
    }
    return () => {
      barcodes;
    };
  }, [barcodes, isScanned, navigation]);

  return (
    <>
      {device != null && hasPermission && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={!isScanned}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
          audio={false}
        />
      )}
    </>
  );
};
