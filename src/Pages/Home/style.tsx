import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  itemSelected: {
    backgroundColor: colors.gray,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingBottom: 15,
    marginVertical: 5,
  },
  itemContainerImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainerName: {
    paddingHorizontal: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemDivider: {
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
  },
  spinner: {
    color: colors.white,
  },
});
