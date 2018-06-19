
function validate() {
    var requestName = $('#companyName').val();
    var requestEmail = $('#companyEmail').val();
    var requestLat = $('#companyLat').val();
    var requestLong = $('#companyLong').val();
    var requestAdd = $('#companyAdd').val();
    var requestPackage = $('#companyPackage').val();
    var requestStartDate = $('#companyStartDate').val();
    var requestEndDate = $('#companyEndDate').val();
    var requestCeo = $('#companyCeo').val();
    var requestPhone1 = $('#companyPhone1').val();
    insert(requestName, requestEmail, requestLat, requestLong, requestAdd, requestPackage, requestStartDate, requestEndDate, requestCeo, requestPhone1);


}



function insert(requestName, requestEmail, requestLat, requestLong, requestAdd, requestPackage, requestStartDate, requestEndDate, requestCeo, requestPhone1) {

    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/company/insert',
        type: 'POST',
        data: JSON.stringify(eval({"name": requestName, "email": requestEmail, "latitude": requestLat, "longitude": requestLong, "address": requestAdd, "packageType": requestPackage, "startDate": requestStartDate, "endDate": requestEndDate, "ceo": requestCeo, "medicalInsuranceId": 1, "phones": [requestPhone1]})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/company.html/getAllCompany.html";

        },
        error: function (err) {
            window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/company.html/getAllCompany.html";

        }
    });

}                  