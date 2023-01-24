import React, {useEffect, useState} from 'react';
import StoreProvider from './redux/StoreProvider';
import AppNavigator from './navigation/AppNavigator';
import {Camera, CameraPermissionStatus} from 'react-native-vision-camera';
import {QueryClient, QueryClientProvider} from 'react-query';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] =
    useState<CameraPermissionStatus>();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);

  if (cameraPermission == null || microphonePermission == null) {
    return <></>;
  }

  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </StoreProvider>
  );
}

export default App;
