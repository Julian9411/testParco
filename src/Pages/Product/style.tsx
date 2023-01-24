import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  containerCamera: {
    height: '40%',
  },
  containerDetail: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray,
    marginVertical: 15,
  },
  code: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 20,
  },
  containerButton: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
  },
  backgroundButtonSave: {
    backgroundColor: colors.blue,
  },
  backgroundButtonCancel: {
    backgroundColor: colors.red,
  },
  textButton: {
    color: colors.white,
  },
});
