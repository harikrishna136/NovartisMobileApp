var NavgateCountryFlow = "Ireland";

function onSelectionCountry(){
  //alert(""+frmLaunch.listBoxLang.selectedKey);
  if("Ger" == frmLaunch.listBoxCountry.selectedKey){
    NavgateCountryFlow = "Germany"; 
  }
  else if("Ire" == frmLaunch.listBoxCountry.selectedKey){
    NavgateCountryFlow = "Ireland"; 
  }else{
     NavgateCountryFlow = "Ireland"; 
  }

}

function NewuserLogin(){
  	 if(NavgateCountryFlow =="Germany"){
       frmInvitationCode.show();
     }else{
       PopupRegistration.show();
     }
  
}

function onSelectionLang(){
  //alert(""+frmLogin.listBoxLang.selectedKey);
  if("German" == frmLaunch.listBoxLang.selectedKey){
   langChange("de_DE");    
  }
  else if("English" == frmLaunch.listBoxLang.selectedKey){
   langChange("en_US");
  }else{
    langChange("en_US");
  }

}

function langChangeES() {
      kony.i18n.setCurrentLocaleAsync("de_DE", suc, fail);
  	  destroypages();
}


function langChangeEn() {
      kony.i18n.setCurrentLocaleAsync("en_US", suc, fail);
      destroypages();
}

function langChange(lang) {
      kony.i18n.setCurrentLocaleAsync(lang, suc, fail);
      destroypages();
}


function suc(){
  //frmLogin.lblLogin.text = kony.i18n.getLocalizedString('login');
  frmLogin.btnNewUser.text = kony.i18n.getLocalizedString('newUser')
  frmLogin.btnLogin.text = kony.i18n.getLocalizedString('login');
  //frmLogin.lblRegistration.text = kony.i18n.getLocalizedString('newUser');
  frmLogin.tbxUserName.placeholder = kony.i18n.getLocalizedString('userName');
  frmLogin.tbxPassword.placeholder = kony.i18n.getLocalizedString('password');
 // frmLogin.lblForgotPassword.text = kony.i18n.getLocalizedString('forgotPWD');
  frmLaunch.btnLogin.text = kony.i18n.getLocalizedString('proceed');
  kony.print("Language changed");
}

function fail(){
   //alert("Failed");
   kony.print("Language unchanged");
  
}

function destroypages(){
  frmInvitationCode.destroy();
  PopupRegistration.destroy();
  
}


function launchProceed(){
  if(NavgateCountryFlow == "Germany"){
    frmLogin.flxUserName.setVisibility(true);
    frmLogin.flxPassword.setVisibility(true);
    frmLogin.btnLogin.text = "Login";
    frmLogin.btnLogin.onClick =  germanLogin;
    var username = kony.store.getItem("username");
    if(username !== null && username !== "")
      {
        frmLogin.tbxUserName.text = username;
        frmLogin.imgToggle.src = "on.png";
      }
    else
      {
        frmLogin.tbxUserName.text = "";
        frmLogin.imgToggle.src = "off.png";
      }
    
    
  }else{
    frmLogin.flxUserName.setVisibility(false);
    frmLogin.flxPassword.setVisibility(false);
    frmLogin.btnLogin.text = "Azure Login"; 
    frmLogin.btnLogin.onClick =  onClickLogin;
  }
  frmLogin.show();
}


function germanLogin(){
  var userName = frmLogin.tbxUserName.text;
  var passWord = frmLogin.tbxPassword.text;
  if((userName == "Admin1" ||userName == "Admin2" ||userName == "Admin3" ||userName == "Admin4") && (passWord == "Test@123user")){
    setDashBoardData();
  }else{
    alert("Please enter valid credentials");
    frmLogin.tbxPassword.text = "";
  } 
}

function onClickLogin()
{
  var authClient = null;
  var providerName = "loginAuthentication";
  
  try
  {
  authClient = KNYMobileFabric.getIdentityService(providerName);
  }
  catch(exception)
  {
    kony.print("Exception_onClickLogin",exception);
  }

  authClient.login({},

  function(response)
  {
    setDashBoardData();
   
  },
  function(error)
  {
    alert("Login failed");
  }

  );
}


function onClickToggle()
{
 
  if(frmLogin.imgToggle.src == "off.png")
    {
      frmLogin.imgToggle.src = "on.png";
    }
  else
    {
      frmLogin.imgToggle.src = "off.png";
    }
}