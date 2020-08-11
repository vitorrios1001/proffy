import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: FONTS.Archivo_400Regular,
    color: COLORS.titleInPrimary,
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: FONTS.Poppins_600SemiBold,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: COLORS.primaryLighter,
  },

  buttonSecondary: {
    backgroundColor: COLORS.secondary,
  },

  buttonText: {
    fontFamily: FONTS.Archivo_700Bold,
    color: COLORS.titleInPrimary,
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: FONTS.Poppins_400Regular,
    color: COLORS.textInPrimary,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  }

})

export default styles