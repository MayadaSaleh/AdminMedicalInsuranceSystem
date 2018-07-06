/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

findSuggest();

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function findSuggest() {
    var str = window.location.href;
    var url = new URL(str );
    var c = url.searchParams.get("id");
 $.ajax({ 
    type: 'GET', 
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionID='+c, 
    dataType: 'json',
    success: function (data) { 
           $("#item1").append(data.suggestId);
           $("#item2").append(data.employeeId);
           $("#item3").append(data.date);
           $("#item4").append(data.medicalServiceNameEn);
           $("#item5").append(data.medicalServiceNameAr);
           switch (data.medicalType)
           {
              case 1:
               $("#item6").append("hospital");
               break;
             case 2:
                 $("#item6").append("Clinic");
               break;
               case 3:
                 $("#item6").append("Pharmacy");
               break; 
               case 4:
                 $("#item6").append("Lab");
               break; 
               
            }
           $("#item7").append(data.supervisor);
           $("#item8").append(data.contactPhone);
           $("#item9").append(data.latitude);
           $("#item10").append(data.longitude);
           $("#item11").append(data.address);
           $("#item12").append(data.description);
    }
});
}