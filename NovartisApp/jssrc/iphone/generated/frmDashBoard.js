function addWidgetsfrmDashBoard() {
    frmDashBoard.setDefaultUnit(kony.flex.DP);
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
    var flxheaderPotrait = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxheaderPotrait",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxheaderPotrait.setDefaultUnit(kony.flex.DP);
    var imgNovartis = new kony.ui.Image2({
        "centerY": "40%",
        "id": "imgNovartis",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "logo_prelogin.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image0e83cb90bafb147 = new kony.ui.Image2({
        "height": "40dp",
        "id": "Image0e83cb90bafb147",
        "isVisible": true,
        "onTouchEnd": AS_Image_db2098790f724ccfb4b1cc4cf53cc89c,
        "right": "4%",
        "skin": "slImage",
        "src": "logout.png",
        "top": "10dp",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxheaderPotrait.add(imgNovartis, Image0e83cb90bafb147);
    var flxpotrait = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "86%",
        "horizontalScrollIndicator": true,
        "id": "flxpotrait",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "1.00%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxpotrait.setDefaultUnit(kony.flex.DP);
    var flxInvitationCode = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxInvitationCode",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "isModalContainer": false,
        "skin": "flxgreyborder",
        "top": "0%",
        "width": "81%",
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
        "onTextChange": AS_TextField_f0ea23cd1ea1496692748f7a4862c139,
        "placeholder": "Search",
        "secureTextEntry": false,
        "skin": "tbxNoBorder",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "4dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblInvitationCode = new kony.ui.Label({
        "bottom": "7dp",
        "height": "1dp",
        "id": "lblInvitationCode",
        "isVisible": false,
        "left": "12%",
        "skin": "lblGreyLine",
        "textStyle": {},
        "width": "79%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxInvitationCode.add(TextField0e50aa818ffb540, lblInvitationCode);
    var Image0df2d38870b3e41 = new kony.ui.Image2({
        "height": "30%",
        "id": "Image0df2d38870b3e41",
        "isVisible": true,
        "left": "10%",
        "skin": "slImage",
        "src": "dummy_map.png",
        "top": "2%",
        "width": "81%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var dataGridP = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Col 1",
            "columnHeaderType": "text",
            "columnID": "col1",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "ide_onClick": null,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Col 2",
            "columnHeaderType": "text",
            "columnID": "col2",
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 34,
            "ide_onClick": null,
            "isColumnSortable": false
        }, ],
        "data": [{
            "col1": "Area",
            "col2": "Ireland"
        }, {
            "col1": "Population",
            "col2": "10000000077"
        }, {
            "col1": "Largest City",
            "col2": "Ire"
        }],
        "headerSkin": "slDataGridHead",
        "id": "dataGridP",
        "isMultiSelect": false,
        "isVisible": true,
        "left": "10%",
        "rowAlternateSkin": "slDataGridAltRow",
        "rowCount": 3,
        "rowFocusSkin": "slDataGridFocusedRow",
        "rowNormalSkin": "slDataGridRow",
        "showColumnHeaders": false,
        "top": "4%",
        "width": "81%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxpotrait.add(flxInvitationCode, Image0df2d38870b3e41, dataGridP);
    flxMain.add(flxheaderPotrait, flxpotrait);
    frmDashBoard.add(flxMain);
};

function frmDashBoardGlobals() {
    frmDashBoard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashBoard,
        "enabledForIdleTimeout": false,
        "id": "frmDashBoard",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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