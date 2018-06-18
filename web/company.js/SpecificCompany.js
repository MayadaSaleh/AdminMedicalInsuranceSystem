
var resultElement = $('#resultDiv');
var str = window.location.href;
var url = new URL(str);
var deletedEmployeeID = url.searchParams.get("employeeId");
console.log(deletedEmployeeID);
var deleteFlag = url.searchParams.get("DeleteFlag");
console.log(deleteFlag);

if (deleteFlag === "true") {
    var companyID = url.searchParams.get("companyId");
   console.log(companyID);
   detailCompanyId=0; 
   detailCompanyId=companyID;
    deleteEmployee();
   // findAll();
    console.log('deleteeeeeee');

}

var str = window.location.href;
var url = new URL(str);
var companyID = url.searchParams.get("companyId");
console.log(companyID);
var detailsFlag = url.searchParams.get("detailFlag");

//if(detailsFlag === "true"){
    detailCompanyId=0; 
     detailCompanyId=companyID;
//}else {
    
//}


getCompany();

function getCompany() {
        console.log('getttttttttttttttttttttttttt');

//    var str = window.location.href;
//    var url = new URL(str);
//     c = url.searchParams.get("companyId");
     console.log("id of company in getCompany is"+detailCompanyId);
//     getIdCompany(c);
      findAll(detailCompanyId);
    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/company/getCompany/' + detailCompanyId,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            if (response.message != null) {
                $('#NameHeader').text(response.companyObject.name);
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
//                requestId =c;

     console.log("id of comapny c isssssssss"+detailCompanyId);
                resultElement.html(response.companyObject.id + " " + response.companyObject.email + " " + response.status);
            } else {
            }
        },
        error: function (err) {
        }
    });
}


//function getIdCompany(c){
//    
//   getIdCompanyEmp(c);
////   requestId =c;
//}


function deleteEmployee() {
    console.log('deleteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    console.log("id of company in delete"+detailCompanyId);

    $.ajax({
        type: 'DELETE',
        url: "http://localhost:4048/MedicalInsuranceSystem/api/version1/user/deleteEmployee/employeeID=" + deletedEmployeeID,
        success: function (data, textStatus, jqXHR) {
         //   alert('Employee deleted successfully');
      console.log("id of company in delete"+detailCompanyId);
   //window.location.href="http://localhost:8084/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + detailCompanyId;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('error in delete Employee');
        }
    });
    
     window.location.href="http://localhost:4048/AdminMedicalInsuranceSystem/company.html/SpecificCompany.html?companyId=" + detailCompanyId;

}


//findAll();
//console.log('findddddddddd');


function findAll(c) {

// var str = window.location.href;
//    var url = new URL(str );
//     c = url.searchParams.get("companyId");


    $.ajax({
        type: 'GET',
     //   url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/user/getEmployees/companyID=1',
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/user/getEmployees/companyID=' + detailCompanyId,
        dataType: 'json',
        success: function (data) {
            $.each(data.employeeListObject, function (index, element) {
//                $("#insertRow").append('<tr><td><a href="../employee.html/getEmployee.html?employeeId=' + element.id + '">' + element.id + "</a></td><td>" + element.email + "</td><td>" + element.phones[0] + "</td>\n\
//                <td>" + element.address + "</td><td>" + element.job + "</td><td>" + element.password + "</td><td>" + element.image + "</td><td>" + element.companyId + '</td><td><a href="../employee.html/updateEmployee.html?employeeId=' + element.id + '&companyId=' + element.companyId +'">' + 'Update' + '</a></td><td><a href="../company.html/SpecificCompany.html?employeeId=' + element.id+ '&companyId='+ element.companyId + '&DeleteFlag=true">' + 'Delete' + "</a></td></tr>");


  $("#insertRow").append('<tr><td class="mainName"><a href="../employee.html/getEmployee.html?employeeId=' + element.id + '">'+ element.id + "</a></td><td>" + element.name + "</td><td>" + element.job + "</td><td>" + element.startDate +"</td><td>" + element.endDate + '</td><td><a href="../employee.html/updateEmployee.html?employeeId=' + element.id + '&companyId=' + element.companyId +'">' + '<i class="fas fa-pencil-alt"></i>' + '</a></td><td><a href="../company.html/SpecificCompany.html?employeeId=' + element.id+ '&companyId='+ element.companyId + '&DeleteFlag=true">' + '<i class="fas fa-trash-alt"></i>' + "</a></td></tr>");

            });
        }
    });
} 



function insertEmp (){
    console.log("in insert method with id = "+detailCompanyId);
     window.location.href="http://localhost:4048/AdminMedicalInsuranceSystem/employee.html/insertEmployee.html?companyId=" + detailCompanyId;
  
}