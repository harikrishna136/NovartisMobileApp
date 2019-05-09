function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxRoot = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "103.59%",
        "horizontalScrollIndicator": true,
        "id": "flxRoot",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyflxTransparent0d665059c9c4147",
        "top": "0dp",
        "verticalScrollIndicator": false,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRoot.setDefaultUnit(kony.flex.DP);
    var flxTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "4%",
        "id": "flxTop",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "flxTransparent",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTop.setDefaultUnit(kony.flex.DP);
    flxTop.add();
    var imgNovartis = new kony.ui.Image2({
        "id": "imgNovartis",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "logo_prelogin.png",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGap1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxGap1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "flxTransparent",
        "top": "6dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGap1.setDefaultUnit(kony.flex.DP);
    flxGap1.add();
    var lbltextlolgin = new kony.ui.Label({
        "id": "lbltextlolgin",
        "isVisible": true,
        "left": "16%",
        "skin": "lblLineGrey",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "textStyle": {},
        "top": "5%",
        "width": "74%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxUserName = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxUserName",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "16%",
        "isModalContainer": false,
        "skin": "flxTransparent",
        "top": "20dp",
        "width": "72%",
        "zIndex": 1
    }, {}, {});
    flxUserName.setDefaultUnit(kony.flex.DP);
    var flxUserNameBox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxUserNameBox",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "right": "0%",
        "skin": "flxgreyborder",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxUserNameBox.setDefaultUnit(kony.flex.DP);
    var imgUser = new kony.ui.Image2({
        "height": "32dp",
        "id": "imgUser",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "user.png",
        "top": "2dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tbxUserName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "tbxUserName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": kony.i18n.getLocalizedString("userName"),
        "secureTextEntry": false,
        "skin": "tbxNoBorder",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "defTextBoxPlaceholder",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxUserNameBox.add(imgUser, tbxUserName);
    var lblInvitationCode = new kony.ui.Label({
        "bottom": "8dp",
        "height": "1dp",
        "id": "lblInvitationCode",
        "isVisible": false,
        "left": "0%",
        "skin": "lblGreyLine",
        "textStyle": {},
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxUserName.add(flxUserNameBox, lblInvitationCode);
    var flxPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxPassword",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "16%",
        "isModalContainer": false,
        "skin": "flxgreyborder",
        "top": "20dp",
        "width": "72%",
        "zIndex": 1
    }, {}, {});
    flxPassword.setDefaultUnit(kony.flex.DP);
    var flxPasswordBox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxPasswordBox",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "right": "0%",
        "skin": "flxTransparent",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPasswordBox.setDefaultUnit(kony.flex.DP);
    var imgPassword = new kony.ui.Image2({
        "height": "32dp",
        "id": "imgPassword",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "key.png",
        "top": "2dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tbxPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "tbxPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": kony.i18n.getLocalizedString("password"),
        "secureTextEntry": true,
        "skin": "tbxNoBorder",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "defTextBoxPlaceholder",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxPasswordBox.add(imgPassword, tbxPassword);
    var CopylblInvitationCode0j029d5fa9dca4b = new kony.ui.Label({
        "bottom": "8dp",
        "height": "1dp",
        "id": "CopylblInvitationCode0j029d5fa9dca4b",
        "isVisible": false,
        "left": "0%",
        "skin": "lblGreyLine",
        "textStyle": {},
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxPassword.add(flxPasswordBox, CopylblInvitationCode0j029d5fa9dca4b);
    var Switch0cd06b6d0325a4d = new kony.ui.Switch({
        "height": "40dp",
        "id": "Switch0cd06b6d0325a4d",
        "isVisible": false,
        "leftSideText": "ON",
        "right": "11.99%",
        "rightSideText": "OFF",
        "selectedIndex": 0,
        "skin": "CopydefSwitchNormal0a8cdc765971d42",
        "top": "2.00%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgToggle = new kony.ui.Image2({
        "height": "43dp",
        "id": "imgToggle",
        "isVisible": true,
        "left": "76%",
        "onTouchStart": AS_Image_c1886afe9b7543f7b675a6e055dac322,
        "skin": "slImage",
        "src": "off.png",
        "top": 4,
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnLogin = new kony.ui.Button({
        "height": "50dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "16.00%",
        "skin": "btnOrange",
        "text": kony.i18n.getLocalizedString("login"),
        "top": "7%",
        "width": "72%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnNewUser = new kony.ui.Button({
        "height": "50dp",
        "id": "btnNewUser",
        "isVisible": true,
        "left": "16%",
        "onClick": AS_Button_b6e9100e4f0949a18c46179c0a95f190,
        "onTouchEnd": AS_Button_b77018cc125547eeb83c88c6be80ead1,
        "skin": "btnOrange",
        "text": kony.i18n.getLocalizedString("newUser"),
        "top": "3%",
        "width": "72%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flxswitchlang = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxswitchlang",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxswitchlang.setDefaultUnit(kony.flex.DP);
    var listBoxLang = new kony.ui.ListBox({
        "centerY": "50%",
        "id": "listBoxLang",
        "isVisible": true,
        "masterData": [
            ["German", "German"],
            ["English", "English"]
        ],
        "onSelection": AS_ListBox_gfb5d2e27b844d40aa6e61c1fcb910d6,
        "right": "6%",
        "skin": "listboxSkinorg",
        "top": 0,
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [12, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dropDownImage": "search.png",
        "groupCells": false,
        "placeholder": "Select Coutry/Language",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flxswitchlang.add(listBoxLang);
    var Button0daf02bb16e3b47 = new kony.ui.Button({
        "focusSkin": "defBtnFocus",
        "height": "30dp",
        "id": "Button0daf02bb16e3b47",
        "isVisible": false,
        "left": "30dp",
        "onClick": AS_Button_ff2f7bd5d00749b580d99e94204e3716,
        "skin": "defBtnNormal",
        "text": "EN",
        "top": "0dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Button0ecbb691b2f4342 = new kony.ui.Button({
        "focusSkin": "defBtnFocus",
        "height": "30dp",
        "id": "Button0ecbb691b2f4342",
        "isVisible": false,
        "left": "92dp",
        "onClick": AS_Button_d69f302ec00c4c85a6d5d985e602319f,
        "skin": "defBtnNormal",
        "text": "German",
        "top": "3dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxRoot.add(flxTop, imgNovartis, flxGap1, lbltextlolgin, flxUserName, flxPassword, Switch0cd06b6d0325a4d, imgToggle, btnLogin, btnNewUser, flxswitchlang, Button0daf02bb16e3b47, Button0ecbb691b2f4342);
    frmLogin.add(flxRoot);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "frmWhite"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};