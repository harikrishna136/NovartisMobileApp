function addWidgetsfrmInvitationCode() {
    frmInvitationCode.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
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
    var imgthumb = new kony.ui.Image2({
        "centerX": "50.00%",
        "id": "imgthumb",
        "isVisible": true,
        "skin": "slImage",
        "src": "agree_icon.png",
        "top": "10.00%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxInvitationCode = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxInvitationCode",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "12%",
        "isModalContainer": false,
        "skin": "flxgreyborder",
        "top": "7%",
        "width": "76%",
        "zIndex": 1
    }, {}, {});
    flxInvitationCode.setDefaultUnit(kony.flex.DP);
    var TextField0e50aa818ffb540 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "TextField0e50aa818ffb540",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": kony.i18n.getLocalizedString("invitationcode"),
        "secureTextEntry": false,
        "skin": "tbxNoBorder",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "6dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblInvitationCode = new kony.ui.Label({
        "bottom": "8dp",
        "height": "1dp",
        "id": "lblInvitationCode",
        "isVisible": false,
        "left": "12%",
        "skin": "lblGreyLine",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "79%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxInvitationCode.add(TextField0e50aa818ffb540, lblInvitationCode);
    var FlexContainer0db3398bf6de647 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "FlexContainer0db3398bf6de647",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "12%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "6%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0db3398bf6de647.setDefaultUnit(kony.flex.DP);
    var imgcheckBox = new kony.ui.Image2({
        "height": "32dp",
        "id": "imgcheckBox",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "flexi_uncheck.png",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var rcjtxttc = new kony.ui.RichText({
        "id": "rcjtxttc",
        "isVisible": true,
        "left": "10dp",
        "linkSkin": "defRichTextLink",
        "skin": "rctxtred",
        "text": kony.i18n.getLocalizedString("tandc"),
        "top": "4dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0db3398bf6de647.add(imgcheckBox, rcjtxttc);
    var FlexContainer0d8b91bb2295548 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "9%",
        "id": "FlexContainer0d8b91bb2295548",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "7%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0d8b91bb2295548.setDefaultUnit(kony.flex.DP);
    var btnsend = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "defBtnFocus",
        "height": "50dp",
        "id": "btnsend",
        "isVisible": true,
        "left": "0dp",
        "skin": "btnred",
        "text": kony.i18n.getLocalizedString("send"),
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0d8b91bb2295548.add(btnsend);
    flxMain.add(imgNovartis, imgthumb, flxInvitationCode, FlexContainer0db3398bf6de647, FlexContainer0d8b91bb2295548);
    frmInvitationCode.add(flxMain);
};

function frmInvitationCodeGlobals() {
    frmInvitationCode = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmInvitationCode,
        "enabledForIdleTimeout": false,
        "id": "frmInvitationCode",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};