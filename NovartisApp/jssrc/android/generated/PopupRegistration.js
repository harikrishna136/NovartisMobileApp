function addWidgetsPopupRegistration() {
    var HBox0b7e7736bc0534b = new kony.ui.Box({
        "id": "HBox0b7e7736bc0534b",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 10, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var VBox0b3017d46830b42 = new kony.ui.Box({
        "id": "VBox0b3017d46830b42",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 84,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    VBox0b3017d46830b42.add();
    var vbxcross = new kony.ui.Box({
        "id": "vbxcross",
        "isVisible": true,
        "onClick": AS_VBox_a0de32de17bc48978d4f59074935f74e,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 16,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var Image0cacefb0f403e4a = new kony.ui.Image2({
        "id": "Image0cacefb0f403e4a",
        "isVisible": true,
        "skin": "slImage",
        "src": "close_btn.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbxcross.add(Image0cacefb0f403e4a);
    HBox0b7e7736bc0534b.add(VBox0b3017d46830b42, vbxcross);
    var Image0dc06fc4957b84a = new kony.ui.Image2({
        "id": "Image0dc06fc4957b84a",
        "isVisible": true,
        "skin": "slImage",
        "src": "pop_prelogin.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblregistartion = new kony.ui.Label({
        "id": "lblregistartion",
        "isVisible": true,
        "skin": "defLabel",
        "text": kony.i18n.getLocalizedString("registration"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 7, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hbxusername = new kony.ui.Box({
        "id": "hbxusername",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 7, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxusername = new kony.ui.Box({
        "id": "vbxusername",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 0, 12, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var txtusername = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "id": "txtusername",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("uname"),
        "secureTextEntry": false,
        "skin": "tbxNoBorder",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "defTextBoxPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var luser = new kony.ui.Line({
        "id": "luser",
        "isVisible": true,
        "skin": "slLine"
    }, {
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbxusername.add(txtusername, luser);
    hbxusername.add(vbxusername);
    var hbxemail = new kony.ui.Box({
        "id": "hbxemail",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 8, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxemail = new kony.ui.Box({
        "id": "vbxemail",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 0, 12, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var txtemail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "id": "txtemail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("email"),
        "secureTextEntry": false,
        "skin": "tbxNoBorder",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "defTextBoxPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lemail = new kony.ui.Line({
        "id": "lemail",
        "isVisible": true,
        "skin": "slLine"
    }, {
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbxemail.add(txtemail, lemail);
    hbxemail.add(vbxemail);
    var hbxcalendar = new kony.ui.Box({
        "id": "hbxcalendar",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 8, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxcal = new kony.ui.Box({
        "id": "vbxcal",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 0, 12, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var caldob = new kony.ui.Calendar({
        "calendarIcon": "calender.png",
        "dateComponents": [null, null, null],
        "dateFormat": "dd/MM/yyyy",
        "hour": 0,
        "id": "caldob",
        "isVisible": true,
        "minutes": 0,
        "placeholder": "Date of Birth",
        "seconds": 0,
        "skin": "calskin",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var lcal = new kony.ui.Line({
        "id": "lcal",
        "isVisible": true,
        "skin": "slLine"
    }, {
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbxcal.add(caldob, lcal);
    hbxcalendar.add(vbxcal);
    var hbxcountry = new kony.ui.Box({
        "id": "hbxcountry",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 8, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxcountry = new kony.ui.Box({
        "id": "vbxcountry",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 0, 12, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var txtcountry = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "id": "txtcountry",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("residance"),
        "secureTextEntry": false,
        "skin": "tbxNoBorder",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "defTextBoxPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lcountry = new kony.ui.Line({
        "id": "lcountry",
        "isVisible": true,
        "skin": "slLine"
    }, {
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbxcountry.add(txtcountry, lcountry);
    hbxcountry.add(vbxcountry);
    var HBox0affa133028c64b = new kony.ui.Box({
        "id": "HBox0affa133028c64b",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 12, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnSave = new kony.ui.Button({
        "focusSkin": "defBtnFocus",
        "id": "btnSave",
        "isVisible": true,
        "skin": "btnred",
        "text": kony.i18n.getLocalizedString("save")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [15, 4, 15, 4],
        "marginInPixel": false,
        "padding": [4, 3, 4, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    HBox0affa133028c64b.add(btnSave);
    PopupRegistration.add(HBox0b7e7736bc0534b, Image0dc06fc4957b84a, lblregistartion, hbxusername, hbxemail, hbxcalendar, hbxcountry, HBox0affa133028c64b);
};

function PopupRegistrationGlobals() {
    PopupRegistration = new kony.ui.Popup({
        "addWidgets": addWidgetsPopupRegistration,
        "id": "PopupRegistration",
        "isModal": false,
        "transparencyBehindThePopup": 100
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_DEVICE_REFERENCE,
        "containerWeight": 100,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN
    });
};