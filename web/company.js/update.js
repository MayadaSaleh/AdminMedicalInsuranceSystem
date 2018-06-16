dispalyCompany();


function dispalyCompany() {

    var str = window.location.href;
    var url = new URL(str);
     c = url.searchParams.get("companyId");

    $.ajax({
    url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/company/getCompany/'+c,
                    method: 'get',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                          document.getElementById("companyName").value = response.companyObject.name; 
                           console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeee dataaaaaaa"+response.companyObject.name);
                           document.getElementById("companyEmail").value = response.companyObject.email;
                           document.getElementById("companyLat").value = response.companyObject.latitude;
                           document.getElementById("companyLong").value = response.companyObject.longitude;
                           document.getElementById("companyAdd").value =response.companyObject.address;
                          document.getElementById("companyPackage").value =response.companyObject.packageType;
                           document.getElementById("companyStartDate").value = response.companyObject.startDate;
                           document.getElementById("companyEndDate").value = response.companyObject.endDate;
                           document.getElementById("companyCeo").value = response.companyObject.ceo;
                            document.getElementById("companyInsuranceId").value = response.companyObject.medicalInsuranceId;
                          document.getElementById("companyPhone1").value = response.companyObject.phones[0];
                           document.getElementById("companyPhone2").value = response.companyObject.phones[1];
                           document.getElementById("companyPhone3").value = response.companyObject.phones[2];
                      
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
                var requestInsuranceId = $('#companyInsuranceId').val();
                var requestPhone1 = $('#companyPhone1').val();
                var requestPhone2 = $('#companyPhone2').val();
                var requestPhone3 = $('#companyPhone3').val();
    
    $.ajax({
                    url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/company/update',
                    type: 'PUT',
                    data:JSON.stringify(eval({"id":c, "name":requestName, "email":requestEmail, "latitude":requestLat, "longitude":requestLong, "address":requestAdd, "packageType":requestPackage, "startDate":requestStartDate, "endDate":requestEndDate, "ceo":requestCeo, "medicalInsuranceId":requestInsuranceId, "phones":[requestPhone1, requestPhone2,requestPhone3]})),
                    contentType: "application/json; charset=utf-8",
                    dataType:'json',
                    success: function (response) {
//                      
                          window.location.href="http://localhost:4048/AdminMedicalInsuranceSystem/company.html/getAllCompany.html";
                    },
                    error: function (err) {
                    }
                });
}

