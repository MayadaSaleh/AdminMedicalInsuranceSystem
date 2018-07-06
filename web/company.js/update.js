dispalyCompany();

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}

function dispalyCompany() {

    var str = window.location.href;
    var url = new URL(str);
     c = url.searchParams.get("companyId");

    $.ajax({
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/company/getCompany/'+c,
                    method: 'get',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                          document.getElementById("companyName").value = response.companyObject.name; 
                           document.getElementById("companyEmail").value = response.companyObject.email;
                           document.getElementById("companyLat").value = response.companyObject.latitude;
                           document.getElementById("companyLong").value = response.companyObject.longitude;
                           document.getElementById("companyAdd").value =response.companyObject.address;
                          document.getElementById("companyPackage").value =response.companyObject.packageType;
                           document.getElementById("companyStartDate").value = response.companyObject.startDate;
                           document.getElementById("companyEndDate").value = response.companyObject.endDate;
                           document.getElementById("companyCeo").value = response.companyObject.ceo;            
                          document.getElementById("companyPhone1").value = response.companyObject.phones[0];
                       },
                    error: function (err) {
                        alert(err);
                    }
                }); 
}

function updateCompany(){
              var requestName = $('#companyName').val();
                var requestEmail = $('#companyEmail').val();
                var requestLat = $('#companyLat').val();
                var requestLong = $('#companyLong').val();
               var requestAdd = $('#companyAdd').val();
                var requestPackage = $('#companyPackage').val();
                var requestStartDate = $('#companyStartDate').val();
               var requestEndDate= $('#companyEndDate').val();
                var requestCeo = $('#companyCeo').val();
                var requestPhone1 = $('#companyPhone1').val();
    
    $.ajax({
                    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/company/update',
                    type: 'PUT',
                    data:JSON.stringify(eval({"id":c, "name":requestName, "email":requestEmail, "latitude":requestLat, "longitude":requestLong, "address":requestAdd, "packageType":requestPackage, "startDate":requestStartDate, "endDate":requestEndDate, "ceo":requestCeo, "medicalInsuranceId":1, "phones":[requestPhone1]})),
                    contentType: "application/json; charset=utf-8",
                    dataType:'json',
                    success: function (response) {
//                      
                          window.location.href="http://192.168.137.1:8084/AdminMedicalInsuranceSystem/company.html/companies.html";
                    },
                    error: function (err) {
                    }
                });
}

