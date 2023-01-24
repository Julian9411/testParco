import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HOME: undefined;
  QR_REDING: undefined;
  PRODUCT: {code?: string} | undefined;
};

export type HomeNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'HOME'
>;
export type QrRedingNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'QR_REDING'
>;
export type ProductNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'PRODUCT'
>;
