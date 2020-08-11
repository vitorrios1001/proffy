import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  label: {
    color: COLORS.textInPrimary,
    fontFamily: FONTS.Poppins_400Regular,
  },

  input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlockWeekDay: {
    width: '60%',
  },

  inputBlockTime: {
    width: '36%',
  },

  submitButton: {
    backgroundColor: COLORS.secondary,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#FFF',
    fontFamily: FONTS.Archivo_700Bold,
    fontSize: 16,
  },
})

export default styles
