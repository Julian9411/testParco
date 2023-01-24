import {View, Text, Button, FlatList, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {HomeNavigationProp} from '../../navigation/types';
import style from './style';
import colors from '../../theme/colors';
import {deleteSelectedItems} from '../../redux/slices/productsSlice';

export const Home = () => {
  const productList = useSelector(
    (state: RootState) => state.productList.productsList,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeNavigationProp['navigation']>();
  const [selectItem, setSelectItem] = useState(false);
  const [selectedIdItems, setSelectedIdItems] = useState<string[]>([]);

  const cancelDelete = () => {
    setSelectItem(false);
    setSelectedIdItems([]);
  };

  const deleteItemsSelected = () => {
    dispatch(deleteSelectedItems({selectedIdItems}));
    cancelDelete();
  };

  return (
    <>
      <View>
        <FlatList
          data={productList}
          keyExtractor={item => item.code}
          renderItem={({item}) => (
            <Pressable
              onLongPress={() => {
                if (!selectItem) {
                  setSelectItem(true);
                  setSelectedIdItems([item.code]);
                }
              }}
              onPress={() =>
                selectItem &&
                setSelectedIdItems([...selectedIdItems, item.code])
              }
              style={
                selectedIdItems.includes(item.code)
                  ? [style.itemContainer, style.itemSelected]
                  : style.itemContainer
              }>
              <View style={style.itemContainerImage}>
                {item.imageThumb && (
                  <Image
                    source={{uri: item.imageThumb, width: 80, height: 80}}
                  />
                )}
                <View style={style.itemContainerName}>
                  <Text style={style.itemName}>{item.name}</Text>
                  <Text>Cantidad: {item.count}</Text>
                </View>
              </View>
              <View style={style.itemContainerName}>
                <Text style={style.itemName}>barCode: </Text>
                <Text>{item.code}</Text>
              </View>
            </Pressable>
          )}
        />
        {selectItem && (
          <>
            <Button
              title="Eliminar elementos seleccionados"
              color={colors.red}
              onPress={() => deleteItemsSelected()}
            />
            <Button
              title="Cancelar"
              color={colors.blue}
              onPress={cancelDelete}
            />
          </>
        )}
        <Button
          title="Escanea un producto"
          onPress={() => navigation.navigate('QR_REDING')}
        />
      </View>
    </>
  );
};
