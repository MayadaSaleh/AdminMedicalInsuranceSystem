dispalyEmployee();


function dispalyEmployee() {

    //   console.log(c+"ccccc");

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

                document.getElementById("employeeId").value = response.employeePojo.id;
                document.getElementById("email").value = response.employeePojo.email;
                document.getElementById("name").value = response.employeePojo.name;
                document.getElementById("address").value = response.employeePojo.address;
                document.getElementById("job").value = response.employeePojo.job;
                document.getElementById("password").value = response.employeePojo.password;
                document.getElementById("startDate").value = response.employeePojo.startDate;
                document.getElementById("endDate").value = response.employeePojo.endDate;
                document.getElementById("packageType").value = response.employeePojo.packageType;
                document.getElementById("companyId").value = response.employeePojo.companyId;
                document.getElementById("urlImage").value = response.employeePojo.image;
                document.getElementById("phone1").value = response.employeePojo.phones[0];
                document.getElementById("phone2").value = response.employeePojo.phones[1];
                document.getElementById("phone3").value = response.employeePojo.phones[2];

            } else {
                resultElement.html("error in Loading data");
            }

        },
        error: function (err) {
            alert(err);
        }
    });


}

function updateEmployeeInCompany() {

    var resultElement = $('#resultDiv');
    var requestId = $('#employeeId').val();
    var requestName = $('#name').val();
    var requestEmail = $('#email').val();
    var requestAddress = $('#address').val();
    var requestJob = $('#job').val();
    var requestPassword = $('#password').val();
    var requestImage = $('#urlImage').val();
    var requestCompanyID = $('#companyId').val();
    var requestStartDate = $('#startDate').val();
    var requestEndDate = $('#endDate').val();
    var requestPackageType = $('#packageType').val();
    var requestPhone1 = $('#phone1').val();
    var requestPhone2 = $('#phone2').val();
    var requestPhone3 = $('#phone3').val();

    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/user/updateEmployee/employeeID=' + requestId,
        type: 'PUT',
        data: JSON.stringify(eval({"id": requestId, "email": requestEmail, "name": requestName, "address": requestAddress, "password": requestPassword, "job": requestJob, "image": requestImage, "companyId": requestCompanyID, "startDate": requestStartDate, "endDate": requestEndDate, "packageType": requestPackageType, "phones": [requestPhone1, requestPhone2, requestPhone3]})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            if (response.responseMessage.message != null) {
                resultElement.html(response.responseMessage.status);
            } else {
                resultElement.html("error in updating employee");
            }
            window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/employee.html/employee.html";
        },
        error: function (err) {
            alert(err);
        }
    });

}