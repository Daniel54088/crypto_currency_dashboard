import {Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#0A7FC1',
  secondary: '#FFFFFF',
  textColor: '#9D9D9D',
  placeHolderColor: '#B0B0B0',
  headingColor: '#0A0A0A',
  subHeadingColor: '#4A4A4A',
  primaryText: '#0062A1',
  bgColor: '#FFFFFF',
  bgGrey: '#DBDBDB',
  warning: '#F28020',
  error: '#AB212D',
  border: '#E5ECED',
  white: '#FFFFFF',
  cyan: '#00FFFF',
  blue: '#0000FF',
  darkBlue: '#0000A0',
  lightBlue: '#ADD8E6',
  purple: '#800080',
  yellow: '#FFFF00',
  lime: '#00FF00',
  magenta: '#D30963',
  grey: '#808080',
  black: '#000000',
  green: '#008000',
  offWhite: '#F8F8F8',
  offLightBlue: '#E4ECED',
  subHeadingBgColor: '#dbdbdb',
  danger: '#AB212D',
  delete:'#E10000',
  transparent:'transparent',
  galleryHeading:'#dfdfdf',
};

export const padding = {
  sm: 5,
  md: 10,
  lg: 20,
  xl: 40,
  xxl: 60,
};

export const margin = {
  sm: 5,
  md: 10,
  lg: 20,
  xl: 40,
  xxl: 60,
};

export const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  xxl: 30,
  circle: '50%'
};

export const borderWidth = {
  none: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
};

export const compHeight = {
  sm: 40,
  md: 50,
  lg: 60,
  xl: 70,
  xxl: 80,
  xxxl: 120,
};

export const fonts = {
  sm: 12,
  mld: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 22,
  xxxl: 24
};

export const fontFamilyThin = {
  fontFamily: 'Roboto-Thin'
};
export const fontFamilyLight = {
  fontFamily: 'Roboto-Light'
};
export const fontFamilyRegular = {
  fontFamily: 'Roboto-Regular'
};
export const fontFamilyMedium = {
  fontFamily: 'Roboto-Medium'
};
export const fontFamilyBold = {
  fontFamily: 'Roboto-Bold'
};
export const fontFamilyBlack = {
  fontFamily: 'Roboto-Black'
};
export const fontFamilyItalic = {
  fontFamily: 'Roboto-Italic'
};

export const noShadow = {
  shadowOpacity: 0,
  shadowRadius: 0,
  shadowOffset: {
    height: 0,
    width: 0
  },
  elevation: 0
};


export const baseStyles = {
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  screenContainerFluid: {
    paddingHorizontal: padding.lg,
    paddingVertical: padding.lg,
    backgroundColor: colors.white,
    flex: 1
  },
  containerFluid: {
    paddingVertical: padding.lg,
    flex: 1,
    backgroundColor: colors.white
  },
  containerFull: {
    backgroundColor: colors.white
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.md
  },
  paddingSm: {
    padding: padding.sm
  },
  paddingMd: {
    padding: padding.md
  },
  paddingLg: {
    padding: padding.lg
  },
  paddingXl: {
    padding: padding.xl
  },
  paddingTopSm: {
    paddingTop: padding.sm
  },
  paddingBottomSm: {
    paddingBottom: padding.sm
  },
  paddingLeftSm: {
    paddingLeft: padding.sm
  },
  paddingRightSm: {
    paddingRight: padding.sm
  },
  paddingTopMd: {
    paddingTop: padding.md
  },
  paddingBottomMd: {
    paddingBottom: padding.md
  },
  paddingLeftMd: {
    paddingLeft: padding.md
  },
  paddingRightMd: {
    paddingRight: padding.md
  },
  paddingTopLg: {
    paddingTop: padding.lg
  },
  paddingBottomLg: {
    paddingBottom: padding.lg
  },
  paddingLeftLg: {
    paddingLeft: padding.lg
  },
  paddingRightLg: {
    paddingRight: padding.lg
  },
  paddingTopXl: {
    paddingTop: padding.xl
  },
  paddingBottomXl: {
    paddingBottom: padding.xl
  },
  paddingLeftXl: {
    paddingLeft: padding.xl
  },
  paddingRightXl: {
    paddingRight: padding.xl
  },
  paddingVerticalSm: {
    paddingVertical: padding.sm
  },
  paddingVerticalMd: {
    paddingVertical: padding.md
  },
  paddingVerticalLg: {
    paddingVertical: padding.lg
  },
  paddingVerticalXl: {
    paddingVertical: padding.xl
  },
  paddingHorizontalSm: {
    paddingHorizontal: padding.sm
  },
  paddingHorizontalMd: {
    paddingHorizontal: padding.md
  },
  paddingHorizontalLg: {
    paddingHorizontal: padding.lg
  },
  paddingHorizontalXl: {
    paddingHorizontal: padding.xl
  },
  paddingZero: {
    padding: 0
  },
  marginSm: {
    margin: margin.sm
  },
  marginMd: {
    margin: margin.md
  },
  marginLg: {
    margin: margin.lg
  },
  marginXl: {
    margin: margin.xl
  },
  marginTopSm: {
    marginTop: margin.sm
  },
  marginBottomSm: {
    marginBottom: margin.sm
  },
  marginLeftSm: {
    marginLeft: margin.sm
  },
  marginRightSm: {
    marginRight: margin.sm
  },
  marginTopMd: {
    marginTop: margin.md
  },
  marginBottomMd: {
    marginBottom: margin.md
  },
  marginLeftMd: {
    marginLeft: margin.md
  },
  marginRightMd: {
    marginRight: margin.md
  },
  marginTopLg: {
    marginTop: margin.lg
  },
  marginBottomLg: {
    marginBottom: margin.lg
  },
  marginLeftLg: {
    marginLeft: margin.lg
  },
  marginRightLg: {
    marginRight: margin.lg
  },
  marginTopXl: {
    marginTop: margin.xl
  },
  marginBottomXl: {
    marginBottom: margin.xl
  },
  marginLeftXl: {
    marginLeft: margin.xl
  },
  marginRightXl: {
    marginRight: margin.xl
  },
  marginVerticalSm: {
    marginVertical: margin.sm
  },
  marginVerticalMd: {
    marginVertical: margin.md
  },
  marginVerticalLg: {
    marginVertical: margin.lg
  },
  marginVerticalXl: {
    marginVertical: margin.xl
  },
  marginHorizontalSm: {
    marginHorizontal: margin.sm
  },
  marginHorizontalMd: {
    marginHorizontal: margin.md
  },
  marginHorizontalLg: {
    marginHorizontal: margin.lg
  },
  marginHorizontalXl: {
    marginHorizontal: margin.xl
  },
  marginZero: {
    marginBottom: 0,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0
  },
  radiusXs: {
    borderRadius: radius.xs
  },
  radiusSm: {
    borderRadius: radius.sm
  },
  radiusMd: {
    borderRadius: radius.md
  },
  radiusLg: {
    borderRadius: radius.lg
  },
  radiusXl: {
    borderRadius: radius.xl
  },
  radiusXxl: {
    borderRadius: radius.xxl
  },
  radiusCircle: {
    borderRadius: radius.circle
  },
  borderWidthNone: {
    borderWidth: borderWidth.none
  },
  borderWidthSm: {
    borderWidth: borderWidth.sm
  },
  borderWidthMd: {
    borderWidth: borderWidth.md
  },
  borderWidthLg: {
    borderWidth: borderWidth.lg
  },
  borderWidthXl: {
    borderWidth: borderWidth.xl
  },
  borderColor: {
    borderColor: colors.borderColor
  },
  borderPrimaryColor: {
    borderColor: colors.primary
  },
  borderSecondaryColor: {
    borderColor: colors.secondary
  },
  borderWarningColor: {
    borderColor: colors.warning
  },
  borderErrorColor: {
    borderColor: colors.error
  },
  borderWhiteColor: {
    borderColor: colors.white
  },
  borderBlackColor: {
    borderColor: colors.black
  },
  borderCyanColor: {
    borderColor: colors.cyan
  },
  borderBlueColor: {
    borderColor: colors.blue
  },
  borderDarkBlueColor: {
    borderColor: colors.darkBlue
  },
  borderLightBlueColor: {
    borderColor: colors.lightBlue
  },
  borderPurpleColor: {
    borderColor: colors.purple
  },
  borderYellowColor: {
    borderColor: colors.yellow
  },
  borderLimeColor: {
    borderColor: colors.lime
  },
  borderMagentaColor: {
    borderColor: colors.magenta
  },
  borderGreyColor: {
    borderColor: colors.grey
  },
  borderGreenColor: {
    borderColor: colors.green
  },
  fontsSm: {
    fontSize: fonts.sm
  },
  fontsMd: {
    fontSize: fonts.md
  },
  fontsLg: {
    fontSize: fonts.lg
  },
  fontsXl: {
    fontSize: fonts.xl
  },
  textColor: {
    color: colors.textColor
  },
  headingColor: {
    color: colors.headingColor
  },
  subHeadingColor: {
    color: colors.subHeadingColor
  },
  primaryText: {
    color: colors.primaryText
  },
  warningText: {
    color: colors.warning
  },
  errorText: {
    color: colors.error
  },
  whiteText: {
    color: colors.white
  },
  blackText: {
    color: colors.black
  },
  cyanText: {
    color: colors.cyan
  },
  blueText: {
    color: colors.blue
  },
  darkBlueText: {
    color: colors.darkBlue
  },
  lightBlueText: {
    color: colors.lightBlue
  },
  purpleText: {
    color: colors.purple
  },
  yellowText: {
    color: colors.yellow
  },
  limeText: {
    color: colors.lime
  },
  magentaText: {
    color: colors.magenta
  },
  greyText: {
    color: colors.grey
  },
  greenText: {
    color: colors.green
  },
  compHeightSm: {
    height: compHeight.sm
  },
  compHeightMd: {
    height: compHeight.md
  },
  compHeightLg: {
    height: compHeight.lg
  },
  compHeightXl: {
    height: compHeight.xl
  },
  compHeightXxl: {
    height: compHeight.xxl
  },
  compHeighthp: {
    height: '100%'
  },
  fullHeight: {
    height: dimensions.fullHeight
  },
  fullWidth: {
    width: dimensions.fullWidth
  },
  hpWidth: {
    width: '100%'
  },
  flexOne: {
    flex: 1
  },
  row: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  colOne: {
    width: '25%',
    paddingRight: 10
  },
  colTow: {
    width: '50%',
    paddingRight: 10
  },
  colThree: {
    width: '75%',
    paddingRight: 10
  },
  colFour: {
    width: '100%',
    paddingRight: 10
  }, colFive: {
    width: '33.333%',
    paddingRight: 10
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    flex: 1
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  justifyContentBetween: {
    justifyContent: 'space-between'
  },
  justifyContentAround: {
    justifyContent: 'space-around'
  },
  justifyContentEnd: {
    justifyContent: 'flex-end'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },

  alignItemsEnd: {
    alignItems: 'flex-end'
  },
  alignItemsStretch: {
    alignItems: 'stretch'
  },
  itemHorizontalCenter: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemVerticalCenter: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  media: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: margin.md
  },
  mediaLeft: {
    marginRight: 15
  },
  mediaRight: {
    marginLeft: 15
  },

  mediaBody: {
    flex: 1,
  },
  bgColor: {
    backgroundColor: 'red'
  },
  subHeadingContainer: {
    color: colors.primaryText,
    paddingVertical: padding.md,
    paddingHorizontal: padding.lg,
    fontSize: fonts.md
  },
  textAlignRight: {
    textAlign: 'right'
  },
  textAlignLeft: {
    textAlign: 'left'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  divider: {
    backgroundColor: colors.border,
    marginBottom: margin.md
  }
};
