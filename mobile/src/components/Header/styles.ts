import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: COLORS.primary,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: FONTS.Archivo_700Bold,
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 32,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default styles