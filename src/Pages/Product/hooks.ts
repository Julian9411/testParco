import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Alert} from 'react-native';
import {useQuery} from 'react-query';
import {QrRedingNavigationProp} from '../../navigation/types';

export const useGetProduct = (code: string) => {
  const navigation = useNavigation<QrRedingNavigationProp['navigation']>();
  return useQuery(
    'saveProduct',
    () => {
      return axios
        .get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
        .then(e => {
          if (e.data.status_verbose !== 'product not found') {
            return {
              code: e.data.code,
              name: e.data.product?.product_name,
              imageDisplay: e.data.product?.selected_images?.front?.display?.es,
              imageSmall: e.data.product?.selected_images?.front?.small.es,
              imageThumb: e.data.product?.selected_images?.front?.thumb.es,
              ingredients: e.data.product?.ingredients_text_es,
              status: e.data.status_verbose,
              count: 1,
            };
          } else {
            Alert.alert('Error', `El producto #${code} no fue encontrado`, [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('HOME'),
                style: 'cancel',
              },
            ]);
          }
        })
        .catch(() => Alert.alert(`El producto #${code} no fue encontrado`));
    },
    {enabled: Boolean(code !== '')},
  );
};
