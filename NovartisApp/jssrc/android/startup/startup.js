//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "NovartisApp",
    appName: "NovartisApp",
    appVersion: "1.0.0",
    isturlbase: "https://m100023401001.konycloud.com/services",
    isDebug: false,
    isMFApp: true,
    appKey: "ea43c8782432a976aac9938f4850f799",
    appSecret: "27b9fac10d57f0ae64a4412d04b1e064",
    serviceUrl: "https://100023401.auth.konycloud.com/appconfig",
    svcDoc: {
        "identity_meta": {},
        "app_version": "1.0",
        "baseId": "551decc4-c771-41c4-8479-2ff375d8b748",
        "app_default_version": "1.0",
        "login": [{
            "provider_type": "azure_saml",
            "alias": "loginAuthentication",
            "type": "saml",
            "prov": "loginAuthentication",
            "url": "https://100023401.auth.konycloud.com"
        }],
        "services_meta": {
            "jsSample": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100023401001.konycloud.com/services/jsSample"
            }
        },
        "selflink": "https://100023401.auth.konycloud.com/appconfig",
        "integsvc": {
            "_internal_logout": "https://m100023401001.konycloud.com/services/IST",
            "jsSample": "https://m100023401001.konycloud.com/services/jsSample"
        },
        "service_doc_etag": "0000016A9BD98CD8",
        "appId": "e8664e61-02ca-4933-8229-f13509664069",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "NovartisApp",
        "reportingsvc": {
            "session": "https://m100023401001.konycloud.com/services/IST",
            "custom": "https://m100023401001.konycloud.com/services/CMS"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isI18nLayoutConfigEnabled: true,
        APILevel: 8300
    })
};

function appInit(params) {
    skinsInit();
    initializeMVCTemplates();
    initializeUserWidgets();
    initializeSampleRowTemplate();
    initializeSampleSectionHeaderTemplate();
    frmDashBoardGlobals();
    frmInvitationCodeGlobals();
    frmLaunchGlobals();
    frmLoginGlobals();
    PopupRegistrationGlobals();
    setAppBehaviors();
};

function postAppInitCallBack(eventObj) {};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: postAppInitCallBack,
        showstartupform: function() {
            frmLaunch.show();
        }
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
kony.i18n.setLocaleLayoutConfig({});
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
kony.print = function() {
    return;
};