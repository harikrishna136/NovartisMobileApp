function addWidgetsfrmLaunch() {
    frmLaunch.setDefaultUnit(kony.flex.DP);
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
    var flxswitchCountry = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxswitchCountry",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "6%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxswitchCountry.setDefaultUnit(kony.flex.DP);
    var listBoxCountry = new kony.ui.ListBox({
        "centerY": "50.45%",
        "id": "listBoxCountry",
        "isVisible": true,
        "left": "12.00%",
        "masterData": [
            ["Ire", "Ireland"],
            ["Ger", "Germany"]
        ],
        "onSelection": AS_ListBox_e992f66b44a64209b1a35f9bb0694ef2,
        "right": "0%",
        "skin": "listboxSkinorg",
        "top": 0,
        "width": "76%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "arrow_down1.png",
        "placeholder": "Select Coutry",
        "placeholderSkin": "listboxSkinorg",
        "viewType": constants.LISTBOX_VIEW_TYPE_SPINNER
    });
    flxswitchCountry.add(listBoxCountry);
    var flxBanners = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxBanners",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBanners.setDefaultUnit(kony.flex.DP);
    if (typeof initializeFBox0c62eb40da60148 === 'function') initializeFBox0c62eb40da60148();
    var Segment0i6ecf1bc987f4c = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Image0he47b3fecb1648": "signupheart.png"
        }, {
            "Image0he47b3fecb1648": "heart_pulse.png"
        }, {
            "Image0he47b3fecb1648": "imagedrag.png"
        }, {
            "Image0he47b3fecb1648": "imagedrag.png"
        }, {
            "Image0he47b3fecb1648": "imagedrag.png"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "Segment0i6ecf1bc987f4c",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0c62eb40da60148,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "aaaaaa00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "Image0he47b3fecb1648": "Image0he47b3fecb1648"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBanners.add(Segment0i6ecf1bc987f4c);
    var flxswitchlang = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxswitchlang",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
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
        "left": "12%",
        "masterData": [
            ["German", "German"],
            ["English", "English"]
        ],
        "onSelection": AS_ListBox_f4e012aa29004fc8845eb5f58ccdc456,
        "right": "0%",
        "skin": "listboxSkinorg",
        "top": 0,
        "width": "76%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "arrow_down1.png",
        "placeholder": "Select Language",
        "placeholderSkin": "listboxSkinorg",
        "viewType": constants.LISTBOX_VIEW_TYPE_SPINNER
    });
    flxswitchlang.add(listBoxLang);
    var btnLogin = new kony.ui.Button({
        "height": "50dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "20%",
        "onClick": AS_Button_ac1199e086cd41f1af9085bd4827a353,
        "skin": "btnOrange",
        "text": kony.i18n.getLocalizedString("proceed"),
        "top": "10%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMain.add(imgNovartis, flxswitchCountry, flxBanners, flxswitchlang, btnLogin);
    frmLaunch.add(flxMain);
};

function frmLaunchGlobals() {
    frmLaunch = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLaunch,
        "enabledForIdleTimeout": false,
        "id": "frmLaunch",
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