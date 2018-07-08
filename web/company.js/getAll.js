/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

findAll();

var resultElement = $('#resultDiv');
var str = window.location.href;
var url = new URL(str);
deletedCompanyID = url.searchParams.get("companyId");
console.log(deletedCompanyID);
var deleteFlag = url.searchParams.get("DeleteFlag");
console.log(deleteFlag);

if ( deleteFlag === "true") {
   deleteCompany();

}

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}

function deleteCompany(elementId){
var result = confirm("Want to delete?");
if (result) {
         console.log("id in delete method"+elementId);
                var requestData=elementId;
                $.ajax({
                    url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/company/delete/'+deletedCompanyID,
                    type : 'DELETE',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                        
                          window.location.href="http://192.168.1.8:8084/AdminMedicalInsuranceSystem/company.html/companies.html";

                    },

                    error: function (err) {
                       // alert(err);
                    }

});
}            

}



function findAll() {
 $.ajax({ 
    type: 'GET', 
    url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/company/getAll', 
    dataType: 'json',
    success: function (data) { 
        $.each(data.companiesList, function(index, element) {
                            console.log(element.id);      


  $("#insertRow").append('<tr><td class="mainName"><a href="SpecificCompany.html?companyId=' + element.id + '&detailFlag=true">'+ element.name + "</a></td><td>" + element.id + "</td><td>" + element.packageType + "</td><td>" + element.startDate +"</td><td>" + element.endDate + '</td><td><a href="../company.html/UpdateCompany.html?companyId=' + element.id + '">' + '<i class="fas fa-pencil-alt"></i>' + '</a></td><td><a  href="../company.html/companies.html?companyId=' + element.id + '&DeleteFlag=true">' + ' <i class="fas fa-trash-alt"></i>' + "</a></td></tr>");

            });
        
        }
    });
}
