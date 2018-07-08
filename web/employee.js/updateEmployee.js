dispalyEmployee();
function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}

function dispalyEmployee() {


    var resultElement = $('#resultDiv');
    var str = window.location.href;
    var url = new URL(str);
    var c = url.searchParams.get("employeeId");
    transferedCompanyId = url.searchParams.get("companyId");


    $.ajax({
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/getEmployee/employeeID=' + c,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            if (response.responseMessage.status == true) {
                resultElement.html(response.employeePojo.id + " " + response.employeePojo.email + " " + response.responseMessage.message);

                console.log("before " + document.getElementById("employeeId"));
                document.getElementById("employeeId").value = response.employeePojo.id;
                document.getElementById("email").value = response.employeePojo.email;
                document.getElementById("name").value = response.employeePojo.name;
                document.getElementById("address").value = response.employeePojo.address;
                document.getElementById("job").value = response.employeePojo.job;
                document.getElementById("password").value = response.employeePojo.password;
                document.getElementById("startDate").value = response.employeePojo.startDate;
                document.getElementById("endDate").value = response.employeePojo.endDate;
                document.getElementById("packageType").value = response.employeePojo.packageType;
                console.log("phoneeeee" + response.employeePojo.phones[0]);
                document.getElementById("phone1").value = response.employeePojo.phones[0];
                document.getElementById("urlImage").value = response.employeePojo.image;
                console.log("after " + response.employeePojo.email);

            } else {
                resultElement.html("error in Loading data");
            }

        },
        error: function (err) {
            alert(err);
        }
    });


}



function validateUpdateEmployee() {

    var resultElement = $('#resultDiv');
    var requestIDD = $('#employeeId').val();
    var requestName = $('#name').val();
    var requestEmail = $('#email').val();
    var requestAddress = $('#address').val();
    var requestJob = $('#job').val();
    var requestPassword = $('#password').val();
    var requestImage = $('#urlImage').val();
    var requestStartDate = $('#startDate').val();
    var requestEndDate = $('#endDate').val();
    var requestPackageType = $('#packageType').val();
    var requestPhone1 = $('#phone1').val();



    if (requestIDD !== "" && requestName !== "" && requestEmail !== "" && requestAddress !== "" &&
            requestJob !== "" && requestPassword !== "" && requestImage !== "" && requestStartDate !== "" && requestEndDate !== "" && requestPackageType !== "" && requestPhone1 !== "") {

        updateEmployeeInCompany(requestIDD, requestName, requestEmail, requestAddress, requestJob, requestPassword, requestImage, requestStartDate, requestEndDate, requestPackageType, requestPhone1)

    }
}
function updateEmployeeInCompany(requestIDD, requestName, requestEmail, requestAddress, requestJob, requestPassword, requestImage, requestStartDate, requestEndDate, requestPackageType, requestPhone1) {
    var requestCompanyID = transferedCompanyId;

    console.log("in update id= " + requestIDD);

    $.ajax({
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/updateEmployee/employeeID=' + requestIDD,
        type: 'PUT',
        data: JSON.stringify(eval({"id": requestIDD, "email": requestEmail, "name": requestName, "address": requestAddress, "password": requestPassword, "job": requestJob, "image": requestImage, "companyId": requestCompanyID, "startDate": requestStartDate, "endDate": requestEndDate, "packageType": requestPackageType, "phones": [requestPhone1]})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            if (response.responseMessage.message != null) {
                resultElement.html(response.responseMessage.status);
            } else {
                resultElement.html("error in updating employee");
            }


            window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + transferedCompanyId;
        },
        error: function (err) {
            alert(err);
        }
    });

}