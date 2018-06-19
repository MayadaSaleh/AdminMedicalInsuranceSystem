/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 findLabDetails(); 
function findLabDetails() {
    rootURL='http://localhost:8585/MedicalInsuranceSystem/api/version1/details/get';
    var str = window.location.href;
    var url = new URL(str);
    var c = url.searchParams.get("id");
 $.ajax({ 
    type: 'GET', 
    url: rootURL + '/?tid=4&sid=' + c, 
    dataType: 'json',
    success: function (data) { 
        
           $("#insertRow").append("<tr><td>"+data.id+"</td><td>"+data.nameEn+"</td><td>"+data.nameAr+"</td>\n\
<td>"+data.address+"</td><td>"+data.longitude+"</td><td>"+data.latitude+"</td><td>"+data.rate+"</td><td>"+data.ceo+"</td><td>"+data.openHour+"</td><td>"+data.closeHour+"</td></tr>");
        
    }
});
}