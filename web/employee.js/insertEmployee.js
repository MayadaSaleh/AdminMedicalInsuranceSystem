
//insertEmployeeInCompany();
//requestId=0;

//function  getIdCompanyEmp(c){
// requestId=c;  
// console.log("id of company in employee"+requestId);
//}


 var str = window.location.href;
    var url = new URL(str );
     c = url.searchParams.get("companyId");

function insertEmployeeInCompany() {
    //$(document).ready(function () {
    //  $('#btnInsertEmployee').click(function () {
    
     console.log("id of company in employee");

    var resultElement = $('#resultDiv');
    var requestName = $('#name').val();
    var requestEmail = $('#email').val();
    var requestAddress = $('#address').val();
    var requestJob = $('#job').val();
    var requestPassword = $('#password').val();
    var requestImage = $('#urlImage').val();
//    var requestCompanyID = $('#companyId').val();
    var requestCompanyID =c;
    var requestStartDate = $('#startDate').val();
    var requestEndDate = $('#endDate').val();
    var requestPackageType = $('#packageType').val();
    var requestPhone1 = $('#phone1').val();
    var requestPhone2 = $('#phone2').val();
    var requestPhone3 = $('#phone3').val();


    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/user/insertEmployee',
        type: 'POST',
        data: JSON.stringify(eval({"email": requestEmail, "name": requestName, "address": requestAddress, "password": requestPassword, "job": requestJob, "image": requestImage, "companyId": requestCompanyID, "startDate": requestStartDate, "endDate": requestEndDate, "packageType": requestPackageType, "phones": [requestPhone1, requestPhone2, requestPhone3]})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            if (response.message != null) {
                resultElement.html(response.status);
               // window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html";

            } else {
                resultElement.html("error in Insertinng employee");
            }

            window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId="+requestCompanyID;

        },
        error: function (err) {
            alert(err);
        }
    });
    //     });
    // });

}