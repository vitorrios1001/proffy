import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: COLORS.lineInWhite,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: FONTS.Archivo_700Bold,
    color: COLORS.textTitle,
    fontSize: 20,
  },

  subject: {
    fontFamily: FONTS.Poppins_400Regular,
    color: COLORS.textBase,
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: FONTS.Poppins_400Regular,
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.textBase,
  },

  footer: {
    backgroundColor: COLORS.boxFooter,
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  cost: {
    fontFamily: FONTS.Poppins_400Regular,
    color: COLORS.textBase,
    fontSize: 14,
  },

  costValue: {
    fontFamily: FONTS.Archivo_700Bold,
    color: COLORS.primary,
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: COLORS.primary,
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d'
  },

  contactButton: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: '#FFF',
    fontFamily: FONTS.Archivo_700Bold,
    fontSize: 16,
    marginLeft: 16,
  },
})

export default styles
