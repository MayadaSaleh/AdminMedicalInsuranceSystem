/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

findAll();

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function findAll() {
 $.ajax({ 
    type: 'GET', 
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/retrieve', 
    dataType: 'json',
    success: function (data) { 
        $.each(data.list_review, function(index, element) {
           $("#insertRow").append("<tr><td>"+element.reviewId+"</td><td>"+element.medicalTypeId+'</td><td><a href="../review.html/service_reviews.html?typeid='+element.medicalTypeId+'&serviceid='+element.serviceId+'">'+element.serviceId+"</a></td>\n\
<td>"+element.description+"</td><td>"+element.date+"</td><td>"+element.type+"</td><td>"+element.employeeEmployeeId+"</td><td>"+element.reviewRate+"</td></tr>");
        });
    }
});
}
