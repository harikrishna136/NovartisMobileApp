//Type your code here
 var IRLandArray = [
        {
            "col1": "Area",
            "col2": "Ireland"
        },
        {
            "col1": "Population",
            "col2": "47.8 lakhs"
        },
        {
            "col1": "Largest City",
            "col2": "Dublin"
        }
    ]
  var JerArray = [
        {
            "col1": "Area",
            "col2": "Jerman"
        },
        {
            "col1": "Population",
            "col2": "8.28 crores"
        },
        {
            "col1": "Largest City",
            "col2": "Berlin"
        }
    ]
 
 

function setDashBoardData(){
  var dataGridData = [];
  if(NavgateCountryFlow == "Germany"){
    dataGridData = JerArray;
  }else{
   	dataGridData = IRLandArray; 
  }
  frmDashBoard.dataGridP.setData(dataGridData);
   kony.print(frmLogin.imgToggle.src)
    if(frmLogin.imgToggle.src == "on.png")
      {
        kony.print("--->>> saving usetrname");
        kony.store.setItem("username", frmLogin.tbxUserName.text);
        kony.print("--->>> after saving usetrname"+kony.store.getItem("username"));

      }
  else
    {
      kony.store.setItem("username", "");
    }
  frmDashBoard.show();
}

function searchInvCode(){
  var SearchKey = frmDashBoard.TextField0e50aa818ffb540.text;
  SearchKey = SearchKey.toLowerCase();
    kony.print("SearchKey"+SearchKey);

 // var data = frmDashBoard.dataGridP.data;
  var data = []
  if(NavgateCountryFlow == "Germany"){
    data = JerArray;
  }else{
   	data = IRLandArray; 
  }
  var dummyArray = [];  
  kony.print("data>>"+JSON.stringify(data))
  for(var i=0;i<data.length;i++){
    kony.print("row value"+JSON.stringify(data[i]))
    var tempObj = data[i];
	var lowerKey = tempObj["col1"].toLowerCase();
    kony.print("lowerKey>>"+lowerKey)
        kony.print("lowerKey>index>"+lowerKey.indexOf(SearchKey))

    if (lowerKey == SearchKey) {
      kony.print("search key matches"+data[i]);      
      dummyArray.push(tempObj);
    }
   
    kony.print("dummyArray"+JSON.stringify(dummyArray)); 

  }
  if(dummyArray.length> 0)
  frmDashBoard.dataGridP.setData(dummyArray);
 	else   
    frmDashBoard.dataGridP.setData(data);
   
  
}



function InvitationCodeOnClick(){
  var InviteCode = frmInvitationCode.TextField0e50aa818ffb540.text;
  
}