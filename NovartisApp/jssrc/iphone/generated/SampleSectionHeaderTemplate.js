function initializeSampleSectionHeaderTemplate() {
    flxSectionHeaderTemplate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flxSectionHeaderTemplate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "sknSampleSectionHeaderTemplate"
    }, {}, {});
    flxSectionHeaderTemplate.setDefaultUnit(kony.flex.DP);
    var lblHeading = new kony.ui.Label({
        "centerY": "50%",
        "height": "60%",
        "id": "lblHeading",
        "isVisible": true,
        "left": "4%",
        "maxWidth": "50%",
        "skin": "sknSectionHeaderLabelSkin",
        "text": "Heading",
        "textStyle": {},
        "top": "22.22%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxSectionHeaderTemplate.add(lblHeading);
}