


var str = window.location.href;
var url = new URL(str);
var c = url.searchParams.get("companyId");

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function validateEmployee() {
    console.log("id of company in employee");

    var resultElement = $('#resultDiv');
    var requestName = $('#name').val();
    var requestEmail = $('#email').val();
    var requestAddress = $('#address').val();
    var requestJob = $('#job').val();
    var requestPassword = $('#password').val();
    var requestImage = $('#urlImage').val();
    var requestCompanyID = c;
    var requestStartDate = $('#startDate').val();
    var requestEndDate = $('#endDate').val();
    var requestPackageType = $('#packageType').val();
    var requestPhone1 = $('#phone1').val();


    if (requestAddress !== "" && requestName !== "" && requestEmail !== "" && requestJob !== "" &&
            requestPassword !== "" && requestImage !== "" && requestStartDate !== "" && requestEndDate !== "" && requestPackageType !== "") {
        insertEmployeeInCompany(requestEmail, requestName, requestAddress, requestPassword, requestJob, requestImage, requestCompanyID, requestStartDate, requestEndDate, requestPackageType, requestPhone1);
    }
}


function insertEmployeeInCompany(requestEmail, requestName, requestAddress, requestPassword, requestJob, requestImage, requestCompanyID, requestStartDate, requestEndDate, requestPackageType, requestPhone1) {

    $.ajax({
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/user/insertEmployee',
        type: 'POST',
        data: JSON.stringify(eval({"email": requestEmail, "name": requestName, "address": requestAddress, "password": requestPassword, "job": requestJob, "image": requestImage, "companyId": requestCompanyID, "startDate": requestStartDate, "endDate": requestEndDate, "packageType": requestPackageType, "phones": [requestPhone1]})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            if (response.message != null) {
                resultElement.html(response.status);
                // window.location.href = "http://hoa:4048/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html";

            } else {
                resultElement.html("error in Insertinng employee");
            }

            window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + requestCompanyID;

        },
        error: function (err) {
            console.log("in insert error");
            window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + requestCompanyID;

        }
    });


}




