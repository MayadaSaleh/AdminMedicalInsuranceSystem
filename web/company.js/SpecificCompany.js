
var resultElement = $('#resultDiv');
var str = window.location.href;
var url = new URL(str);
var deletedEmployeeID = url.searchParams.get("employeeId");
console.log(deletedEmployeeID);
var deleteFlag = url.searchParams.get("DeleteFlag");
console.log(deleteFlag);

if (deleteFlag === "true") {
    var companyID = url.searchParams.get("companyId");
    console.log(companyID);
    detailCompanyId = 0;
    detailCompanyId = companyID;
    deleteEmployee();
    console.log('deleteeeeeee');

}

var str = window.location.href;
var url = new URL(str);
var companyID = url.searchParams.get("companyId");
console.log(companyID);
var detailsFlag = url.searchParams.get("detailFlag");

detailCompanyId = 0;
detailCompanyId = companyID;

getCompany();


function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function getCompany() {


    console.log("id of company in getCompany is" + detailCompanyId);
    findAll(detailCompanyId);
    $.ajax({
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/company/getCompany/' + detailCompanyId,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            if (response.message != null) {
                $('#NameHeader').text(response.companyObject.name);
                $('#name').text(response.companyObject.name);
                $('#email').text(response.companyObject.email);
                $('#latitude').text(response.companyObject.latitude);
                $('#longitude').text(response.companyObject.longitude);
                $('#address').text(response.companyObject.address);
                $('#packageType').text(response.companyObject.packageType);
                $('#startDate').text(response.companyObject.startDate);
                $('#endDate').text(response.companyObject.endDate);
                $('#ceo').text(response.companyObject.ceo);
                $('#medicalInsuranceId').text(response.companyObject.medicalInsuranceId);
                $('#phone1').text(response.companyObject.phones[0]);
//                requestId =c;

                console.log("id of comapny c isssssssss" + detailCompanyId);
                resultElement.html(response.companyObject.id + " " + response.companyObject.email + " " + response.status);
            } else {
            }
        },
        error: function (err) {
        }
    });
}


function deleteEmployee() {
    console.log('deleteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    console.log("id of company in delete" + detailCompanyId);

    $.ajax({
        type: 'DELETE',
        url: "http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/deleteEmployee/employeeID=" + deletedEmployeeID,

        success: function (data, textStatus, jqXHR) {

            console.log("id of company in delete" + detailCompanyId);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //   alert('error in delete Employee');
        }
    });

    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + detailCompanyId;

}

function findAll() {



    $.ajax({
        type: 'GET',
        //   url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/getEmployees/companyID=1',
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/getEmployees/companyID=' + detailCompanyId,
        dataType: 'json',
        success: function (data) {
            $.each(data.employeeListObject, function (index, element) {

                $("#insertRow").append('<tr><td class="mainName"><a href="../employee.html/getEmployee.html?employeeId=' + element.id + '">' + element.id + "</a></td><td>" + element.name + "</td><td>" + element.job + "</td><td>" + element.startDate + "</td><td>" + element.endDate + '</td><td><a href="../employee.html/updateEmployee.html?employeeId=' + element.id + '&companyId=' + element.companyId + '">' + '<i class="fas fa-pencil-alt"></i>' + '</a></td><td><a href="../company.html/SpecificCompany.html?employeeId=' + element.id + '&companyId=' + element.companyId + '&DeleteFlag=true">' + '<i class="fas fa-trash-alt"></i>' + "</a></td></tr>");

            });
        }
    });
}



function insertEmp() {
    console.log("in insert method with id = " + detailCompanyId);
    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/employee.html/insertEmployee.html?companyId=" + detailCompanyId;

}


function upload()
{
    var filePath = document.getElementById("fileButton").value;
    var filename = filePath.replace(/^.*[\\\/]/, '');
    var path = document.getElementById("urlImage").value;
    var url = {path: path, name: filename};

    console.log('in uplaod form ' + filename);
    $.ajax({
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/upload',
        type: 'POST',
        data: JSON.stringify(url),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            console.log('in upload success');
            window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + detailCompanyId + "&detailFlag=true";

        },
        error: function (err) {
            console.log('in uplaod failed');

        }
    });


}