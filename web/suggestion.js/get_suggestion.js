/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

findSuggest();
function findSuggest() {
    var str = window.location.href;
    var url = new URL(str );
    var c = url.searchParams.get("id");
 $.ajax({ 
    type: 'GET', 
    url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionID='+c, 
    dataType: 'json',
    success: function (data) { 
           $("#insertRow").append("<tr><td>"+c+"</td><td>"+data.description+"</td><td>"+data.medicalType+"</td>\n\
<td>"+data.address+"</td><td>"+data.contactPhone+"</td><td>"+data.supervisor+"</td><td>"+data.date+"</td><td>"+data.medicalServiceNameAr+"</td>\n\
<td>"+data.medicalServiceNameEn+"</td><td>"+data.employeeId+"</td><td>"+data.longitude+"</td><td>"+data.latitude+"</td></tr>");
      
    }
});
}