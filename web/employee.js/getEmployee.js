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

                console.log(response.employeePojo.email);

                $("#employee_id").text(response.employeePojo.id);
                $("#email").text(response.employeePojo.email);
                $("#name").text(response.employeePojo.name);
                $("#nameHeader").text(response.employeePojo.name);
                $("#address").text(response.employeePojo.address);
                $("#job").text(response.employeePojo.job);
                $("#password").text(response.employeePojo.password);
                $("#startDate").text(response.employeePojo.startDate);
                $("#endDate").text(response.employeePojo.endDate);
                $("#packageType").text(response.employeePojo.packageType);
                $("#phone1").text(response.employeePojo.phones[0]);
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