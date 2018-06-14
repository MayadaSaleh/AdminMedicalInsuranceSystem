
getCompany();

function getCompany() {
    var str = window.location.href;
    var url = new URL(str);
     c = url.searchParams.get("companyId");
    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/company/getCompany/' + c,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            if (response.message != null) {
                $('#idComp').text(response.companyObject.id);
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
                $('#phone2').text(response.companyObject.phones[1]);
                $('#phone3').text(response.companyObject.phones[2]);
                resultElement.html(response.companyObject.id + " " + response.companyObject.email + " " + response.status);
            } else {
            }
        },
        error: function (err) {
        }
    });
}


function getIdCompany(){
   getIdCompanyEmp(c);
}