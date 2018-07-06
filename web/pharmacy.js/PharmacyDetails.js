/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var c;

empname =null;
empid=0;
serviceReviews();
serviceComplains();
findPharmacyDetails();

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function findPharmacyDetails() {
    rootURL = 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/details/get';
    var str = window.location.href;
    var url = new URL(str);
     c = url.searchParams.get("id");
    $.ajax({
        type: 'GET',
        url: rootURL + '?tid=3&sid=' + c,
        dataType: 'json',
        success: function (data) {

            var phones = [];
            var phonesarray = [];

            phones = data.pharmacyPhones;
            for (var i = 0; i < phones.length; i++)
            {
                phonesarray.push(phones[i]);

            }
            $("#nameAr").append(data.nameAr);
            $("#nameEn").append(data.nameEn);

            $("#address").append(data.address);
            $("#openH").append(data.openHour);
            $("#closedH").append(data.closeHour);
            $("#startD").append(data.startDate);
            $("#endD").append(data.endDate);
            $("#nameE").append(data.nameEn);

            $("#lat").append(data.latitude);
            $("#long").append(data.longitude);

            $("#serviceId").append(data.id);
            $("#list").append("Pharmacies List");
                        $("#rate").append(data.rate);

            $("#edit").append("Edit Pharmacy");
            
                        $("#del").append("Delete Pharmacy");


            $("#details").append("Pharmacies Details");

            if (phonesarray[0] !== null)
                $("#phoneOne").append(phonesarray[0]);
            else
            {
                $("#phoneOne").append("");
            }

            if (phonesarray[1] !== null)
                $("#phoneTwo").append(phonesarray[1]);
            else
            {
                $("#phoneTwo").append("");
            }

            if (phonesarray[2] !== null)
                $("#phoneThree").append(phonesarray[2]);
            else
            {
                $("#phoneThree").append("");
            }




        }
    });
}
function serviceReviews() {
    var str = window.location.href;
    var url = new URL(str );
    var c = url.searchParams.get("id");
 $.ajax({ 
    type: 'GET', 
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getreview/3/'+c, 
    dataType: 'json',
    success: function (data) { 
        $.each(data.list_review, function(index, element) {
          
          empid=element.employeeEmployeeId;
          
          $.ajax({
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/user/getEmployee/employeeID='+empid,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            if (response.responseMessage.status == true) {       
                empname=response.employeePojo.name;
                console.log(empname);
    $("#exampleTabsLineOne").append('<div class="media"><div class="media-left"><a class="avatar avatar-lg" href="javascript:void(0)"><img src='+response.employeePojo.image+'alt="..."></a></div><div class="media-body"><h4 class="media-heading">'+empname+'</h4><small><i class="fas fa-calendar-alt"></i>'+element.date+'</small><p>'+element.description+'</p></div></div>');
            } else {
                resultElement.html("error in Loading data");
            }
        },
        error: function (err) {
            alert(err);
        }
    });
          console.log(empname);
        });
    }
});
}

function serviceComplains() {
    var str = window.location.href;
    var url = new URL(str );
    var c = url.searchParams.get("id");
 $.ajax({ 
    type: 'GET', 
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getcomplain/3/'+c, 
    dataType: 'json',
    success: function (data) { 
        $.each(data.list_review, function(index, element) {
          
          empid=element.employeeEmployeeId;
          
          $.ajax({
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/user/getEmployee/employeeID='+empid,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            if (response.responseMessage.status == true) {       
                empname=response.employeePojo.name;
                console.log(empname);
    $("#exampleTabsLineTwo").append('<div class="media"><div class="media-left"><a class="avatar avatar-lg" href="javascript:void(0)"><img src='+response.employeePojo.image+'alt="..."></a></div><div class="media-body"><h4 class="media-heading">'+empname+'</h4><small><i class="fas fa-calendar-alt"></i>'+element.date+'</small><p>'+element.description+'</p></div></div>');
            } else {
                resultElement.html("error in Loading data");
            }
        },
        error: function (err) {
            alert(err);
        }
    });
          console.log(empname);
        });
    }
});
}
