const {css} = require('@bsi-cx/design-build');

module.exports = {

  /* ============================================================= */
  /*	                           Colors	                           */
  /* ============================================================= */

  /* ------------------------ Base Colors ------------------------ */

  primaryColor: css.color('#16616d'),
  secondaryColor: css.color('#ff7d00'),
  darkColor: css.color('#000000'),
  lightColor: css.color('#ffffff'),

  /* --------------------- Background Colors --------------------- */

  // Elements using layoutBaseBackgroundColor: layout base
  layoutBaseBackgroundColor: css.color('#ffffff'),

  // A bright and neutral color should be chosen here, a discrete color matching the primary or secondary color can be generated here: https://mycolor.space/
  // Elements using layoutColoredBackgroundColor: layout with background color
  layoutColoredBackgroundColor: css.color('#f4f4f4'),

  // Elements using highlightedBackgroundColor: highlighted content
  highlightBackgroundColor: css.color('#FFF1DE'),

  // Elements using eventBackgroundColor: event
  eventBackgroundColor: css.color('#ff7d00'),

  // Elements using footerBackgroundColor: footer layout base
  footerDarkBackgroundColor: css.color('#383e42'),
  // Elements using footerLightBackgroundColor: footer layout light
  footerLightBackgroundColor: css.color('#ffffff'),

  /* ------------------------ Text Colors ------------------------ */

  // Elements using textColor: text, header date, image caption
  baseTextColor: css.color('#000000'),

  // Elements using titleColor: heading 1, heading 2, heading 3
  titleTextColor: css.color('#16616d'),

  // Elements using eventTextColor: event
  eventTextColor: css.color('#ffffff'),

  // Elements using footerTextColor: footer address, 1 footer column, 2 footer column
  footerDarkTextColor: css.color('#ffffff'),
  // Elements using footerLightTextColor: footer address, 1 footer column, 2 footer column
  footerLightTextColor: css.color('#000000'),

  /* ---------------------- Button Colors ------------------------ */

  // Elements using buttonTextColor: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonTextColor: css.color('#ffffff'),

  // Elements using buttonBorderColor: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonBorderColor: css.color('#16616d'),

  // Elements using buttonBackgroundColor: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonBackgroundColor: css.color('#16616d'),

  /* -------------------------- Others --------------------------- */

  // Elements using preHeaderColor: linked text in pre-header
  linkColor: css.color('#ff7d00'),

  // Elements using dividerColor: divider
  dividerColor: css.color('#e6e6e6'),



  /* ============================================================= */
  /*	                           Fonts	                           */
  /* ============================================================= */

  // List for web safe CSS fonts: https://www.cssfontstack.com/
  // List for choosing fallback fonts: https://help.campaignmonitor.com/email-builder-font-compatibility

  // Elements using baseFontFamily: text, header date, pre-header, footer address, image caption
  baseFontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif, Trebuchet MS',

  // Elements using titleFontFamily: heading 1, heading 2, heading 3
  titleFontFamily: 'Calibri, Carlito, PT Sans, Trebuchet MS, sans‑serif, Tahoma, Verdana, Trebuchet MS',

  // Elements using buttonFontFamily: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonFontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif, Trebuchet MS',


  /* ============================================================= */
  /*	                           Sizes	                           */
  /* ============================================================= */

  /* ----------------------- Layout width ------------------------ */

  // Width of e-mail layout in px
  layoutWidth: 660,

  // Width of columns in px
  // Elements using colOneWidth: 1 column
  colOneWidth: 660,
  // Elements using colTwoWidth: 2 columns
  colTwoWidth: 330,
  // Elements using colTwoSlimWidth: 2 columns ratio 1:2, 2 columns ratio 2:1
  colTwoSlimWidth: 220,
  // Elements using colTwoWideWidth: 2 columns ratio 1:2, 2 columns ratio 2:1
  colTwoWideWidth: 440,
  // Elements using colThreeWidth: 3 columns
  colThreeWidth: 220,

  // Width of footer columns in px
  // Elements using colOneFooterWidth: 1 footer column
  colOneFooterWidth: 660,
  // Elements using colTwoFooterWidth: 2 footer columns
  colTwoFooterWidth: 300,

  /* --------------------- Margin / Padding ---------------------- */

  // Margin bottom in px
  // Elements using baseMarginBottom: images, cta (left, center, right), divider, event, header image, pre-header, highlighted content, news snippet, social media follow, table, text, titles
  baseMarginBottom: 12,

  // Padding top, right, bottom and left in px
  // Elements using columnPadding: 1 column, 2 columns, 2 columns ratio 1:2, 2 columns ratio 2:1, 3 columns
  columnPadding: 10,
  // Elements using columnFooterPadding: 1 footer column, 2 footer columns
  columnFooterPadding: 10,

  // Footer paddings in px
  // Elements using footerBasePadding: footer layout base
  footerDarkPadding: 30,
  // Elements using footerLightPadding: footer layout light
  footerLightPadding: 5,
  // Elements using footerLinkPaddingBottom: footer link
  footerLinkPaddingBottom: 10,

  /* --------------------------- Text ---------------------------- */

  // Font size in px

  // Elements using baseFontSize: images captions, cta (left, center, right), footer link, pre-header, table, text
  baseFontSize: 14,

  // Elements using fontSizeH1: heading 1
  fontSizeH1: 28,
  // Elements using fontSizeH2: heading 2
  fontSizeH2: 24,
  // Elements using fontSizeH3: heading 3
  fontSizeH3: 20,

  // Elements using fontSizeNewsTitle: news snippet
  fontSizeNewsTitle: 28,
  // Elements using fontSizeNewsHeadline: news snippet
  fontSizeNewsHeadline: 14,
  // Elements using fontSizeNewsText: news snippet
  fontSizeNewsText: 14,

  // Elements using fontSizeEventText: event
  fontSizeEventText: 16,

  // Line height in px

  // Elements using lineHeightH1: heading 1
  lineHeightH1: 32,
  // Elements using lineHeightH2: heading 2
  lineHeightH2: 28,
  // Elements using lineHeightH3: heading 3
  lineHeightH3: 24,

  // Elements using textLineHeight: text
  textLineHeight: 22,

  /* -------------------------- Images --------------------------- */

  // Width of images in px

  // Elements using imageWidth100Percent: image 100% width
  imageWidth100Percent: 640,
  // Elements using imageWidth66Percent: image 66% width
  imageWidth66Percent: 420,
  // Elements using imageWidth50Percent: image 50% width
  imageWidth50Percent: 310,
  // Elements using imageWidth33Percent: image 33% width
  imageWidth33Percent: 200,
  // Elements using imageWidth10Percent: image 10% width
  imageWidth10Percent: 60,

  // Elements using headerHeight: header image
  headerHeight: 320,

  // Elements using logoWidth: logo
  logoWidth: 90,

  /* -------------------------- Others --------------------------- */

  // Border radius in px
  // Elements using buttonBorderRadius: CTA button left aligned, CTA button center aligned, CTA button right aligned
  buttonBorderRadius: 5,

  // Height of spacing elements in px
  // Elements using spacerHeightSmall: spacing small
  spacerHeightSmall: 10,
  // Elements using spacerHeightMedium: spacing medium
  spacerHeightMedium: 25,
  // Elements using spacerHeightLarge: spacing large
  spacerHeightLarge: 40,

  // Divider height in px
  // Elements using dividerHeight: divider
  dividerHeight: 1,

  // Height of social media icons in px
  // Elements using socialMediaIconHeight: social media follow
  socialMediaIconHeight: 20,


  /* ============================================================= */
  /*	                          Layout  	                         */
  /* ============================================================= */

  // Elements using alignmentLeft: text, CTA button left aligned
  alignmentLeft: 'left',

  // Elements using alignmentCenter: CTA button center aligned, layout light footer
  alignmentCenter: 'center',

  // Elements using alignmentRight: CTA button right aligned
  alignmentRight: 'right',


  /* ============================================================= */
  /*	                          Address	                           */
  /* ============================================================= */

  // used in footer address element
  addressPhoneText: '+41 71 000 00 00',
  addressPhoneURL: 'tel:0041710000000',
  addressEmailText: 'info@example.com',
  addressEmailURL: 'mailto:info@example.com',
  addressWebText: 'www.example.com',
  addressWebURL: 'https://www.example.com/',

}