import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import {useGetProduct} from './hooks';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  addProduct,
  incrementProduct,
  IProduct,
} from '../../redux/slices/productsSlice';
import {ProductNavigationProp} from '../../navigation/types';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export const Product = () => {
  const navigation = useNavigation<ProductNavigationProp['navigation']>();
  const route = useRoute<ProductNavigationProp['route']>();
  const productList = useSelector(
    (state: RootState) => state.productList.productsList,
  );
  const code = route.params?.code || '';
  const dispatch = useDispatch();

  const {data: product, refetch, isLoading} = useGetProduct(code);

  useEffect(() => {
    code !== '' && refetch();
  }, [code, refetch]);

  const saveData = (barCode: string) => {
    if (productList.some(item => item.code === barCode)) {
      dispatch(
        incrementProduct({
          code: barCode,
        }),
      );
    } else {
      dispatch(addProduct(product as IProduct));
    }
    navigation.navigate('HOME');
  };

  return (
    <>
      {isLoading ? (
        <Spinner
          visible={isLoading}
          textContent={'Loading...'}
          textStyle={style.textButton}
        />
      ) : (
        <View style={style.containerDetail}>
          <Text style={style.title}>{product?.name}</Text>
          <Text style={style.subTitle}>Codigó de barras</Text>
          <Text style={style.code}>{product?.code}</Text>
          {product?.imageSmall && (
            <Image
              source={{uri: product?.imageSmall, width: 200, height: 200}}
            />
          )}
          <Pressable
            onPress={() => saveData(code)}
            style={[style.containerButton, style.backgroundButtonSave]}>
            <Text style={style.textButton}>Guardar</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('HOME')}
            style={[style.containerButton, style.backgroundButtonCancel]}>
            <Text style={style.textButton}>Cancelar</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};
