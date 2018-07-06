/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

findAllSuggestions();
function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function findAllSuggestions() {
 $.ajax({ 
    type: 'GET', 
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/suggestion/get', 
    dataType: 'json',
    success: function (data) { 
        $.each(data.suggestions, function(index, element) {
            var suggest_id = element.suggestId;
           $("#insertRow").append('<tr><td><a href="../suggestion.html/suggestion_details.html?id='+suggest_id+'">'+element.medicalServiceNameEn+"</a></td><td>"+element.suggestId+"</td><td>"+element.medicalType+"</td><td>"+element.date+"</td></tr>");
        });
    }
});
}

