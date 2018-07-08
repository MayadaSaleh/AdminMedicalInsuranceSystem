/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
empname = null;
empid = 0;
serviceReviews();
serviceComplains();

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function serviceReviews() {
    var str = window.location.href;
    var url = new URL(str);
    var c = url.searchParams.get("typeid");
    var d = url.searchParams.get("serviceid");
    $.ajax({
        type: 'GET',
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/reviews/getreview/' + c + '/' + d,
        dataType: 'json',
        success: function (data) {
            $.each(data.list_review, function (index, element) {

                empid = element.employeeEmployeeId;

                $.ajax({
                    url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/getEmployee/employeeID=' + empid,
                    method: 'get',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                        if (response.responseMessage.status == true) {
                            empname = response.employeePojo.name;
                            console.log(empname);
                            $("#exampleTabsLineOne").append('<div class="media"><div class="media-left"><a class="avatar avatar-lg" href="javascript:void(0)"><img src=' + response.employeePojo.image + 'alt="..."></a></div><div class="media-body"><h4 class="media-heading">' + empname + '</h4><small><i class="fas fa-calendar-alt"></i>' + element.date + '</small><p>' + element.description + '</p></div></div>');
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
    var url = new URL(str);
    var c = url.searchParams.get("typeid");
    var d = url.searchParams.get("serviceid");
    $.ajax({
        type: 'GET',
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/reviews/getcomplain/' + c + '/' + d,
        dataType: 'json',
        success: function (data) {
            $.each(data.list_review, function (index, element) {

                empid = element.employeeEmployeeId;

                $.ajax({
                    url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/getEmployee/employeeID=' + empid,
                    method: 'get',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                        if (response.responseMessage.status == true) {
                            empname = response.employeePojo.name;
                            console.log(empname);
                            $("#exampleTabsLineTwo").append('<div class="media"><div class="media-left"><a class="avatar avatar-lg" href="javascript:void(0)"><img src=' + response.employeePojo.image + 'alt="..."></a></div><div class="media-body"><h4 class="media-heading">' + empname + '</h4><small><i class="fas fa-calendar-alt"></i>' + element.date + '</small><p>' + element.description + '</p></div></div>');
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

