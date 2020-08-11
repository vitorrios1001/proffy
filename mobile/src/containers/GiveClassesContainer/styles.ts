import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: FONTS.Archivo_700Bold,
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: COLORS.textInPrimary,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: FONTS.Poppins_400Regular,
    maxWidth: 240,
  },

  button: {
    marginVertical: 40,
    backgroundColor: COLORS.secondary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: FONTS.Archivo_700Bold,
  },
})

export default styles