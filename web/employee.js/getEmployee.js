/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

getEmployee();

function getEmployee() {

    var resultElement = $('#resultDiv');

    var str = window.location.href;
    var url = new URL(str);
    var c = url.searchParams.get("employeeId");

//var requestData = $('#employeeId').val();
    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/user/getEmployee/employeeID=' + c,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            if (response.responseMessage.status == true) {
                resultElement.html(response.employeePojo.id + " " + response.employeePojo.email + " " + response.responseMessage.message);

                document.getElementById("employee_id").value = response.employeePojo.id;
                document.getElementById("email").value = response.employeePojo.email;
                document.getElementById("name").value = response.employeePojo.name;
                document.getElementById("address").value = response.employeePojo.address;
                document.getElementById("job").value = response.employeePojo.job;
                document.getElementById("password").value = response.employeePojo.password;
                document.getElementById("startDate").value = response.employeePojo.startDate;
                document.getElementById("endDate").value = response.employeePojo.endDate;
                document.getElementById("packageType").value = response.employeePojo.packageType;
                document.getElementById("phone1").value = response.employeePojo.phones[0];
                document.getElementById("phone2").value = response.employeePojo.phones[1];
                document.getElementById("phone3").value = response.employeePojo.phones[2];
                document.getElementById("image").src = response.employeePojo.image;


            } else {
                resultElement.html("error in Loading data");
            }
        },
        error: function (err) {
            alert(err);
        }
    });
}