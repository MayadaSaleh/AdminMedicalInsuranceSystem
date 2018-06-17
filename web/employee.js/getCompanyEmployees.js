

var resultElement = $('#resultDiv');
var str = window.location.href;
var url = new URL(str);
var deletedEmployeeID = url.searchParams.get("employeeId");
console.log(deletedEmployeeID);
var deleteFlag = url.searchParams.get("DeleteFlag");
console.log(deleteFlag);

if (deleteFlag === "true") {
    deleteEmployee();
   // findAll();
    console.log('deleteeeeeee');

}



function deleteEmployee() {
//    console.log('delete');
    $.ajax({
        type: 'DELETE',
        url: "http://localhost:8084/MedicalInsuranceSystem/api/version1/user/deleteEmployee/employeeID=" + deletedEmployeeID,
        success: function (data, textStatus, jqXHR) {
         //   alert('Employee deleted successfully');
         window.location.href="http://localhost:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + c;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('error in delete Employee');
        }
    });
}


findAll();
console.log('findddddddddd');


function findAll() {

 var str = window.location.href;
    var url = new URL(str );
     c = url.searchParams.get("companyId");


    $.ajax({
        type: 'GET',
     //   url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/user/getEmployees/companyID=1',
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/user/getEmployees/companyID=' + c,
        dataType: 'json',
        success: function (data) {
            $.each(data.employeeListObject, function (index, element) {
                $("#insertRow").append('<tr><td><a href="../employee.html/getEmployee.html?employeeId=' + element.id + '">' + element.id + "</a></td><td>" + element.email + "</td><td>" + element.phones[0] + "</td>\n\
                <td>" + element.address + "</td><td>" + element.job + "</td><td>" + element.password + "</td><td>" + element.image + "</td><td>" + element.companyId + '</td><td><a href="../employee.html/updateEmployee.html?employeeId=' + element.id + '">' + 'Update' + '</a></td><td><a href="../employee.html/employee.html?employeeId=' + element.id + '&DeleteFlag=true">' + 'Delete' + "</a></td></tr>");

            });
        }
    });
}