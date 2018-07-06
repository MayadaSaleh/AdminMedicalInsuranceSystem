/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template f0ile, choose Tools | Templates
 * and open the template in the editor.
 */

var str = window.location.href;
var url = new URL(str);
var deleteFlag = url.searchParams.get("DeleteFlag");
console.log(deleteFlag);

if (deleteFlag === "true") {
    deleteClinic();
findAll();
}
else
{
findAll();
}

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}

function findAll() {
 $.ajax({ 
    type: 'GET', 
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/clinic/getAll', 
    dataType: 'json',
   success: function (data) {
            $.each(data.clinics, function (index, element) {
                $("#insertRow").append('<tr><td><a href="../clinic.html/clinicDetails.html?id=' + element.id + '">' + element.id + "</a></td><td>" + element.doctorNameEn + "</td><td>" + element.startDate + "</td><td>" + element.endDate + "</td><td>" + element.rate + "</td><td>" + element.address + '</td><td><a href="getAllClinics.html?id=' + element.id + '&DeleteFlag=true" type="button" class="exampleWarningCancel">' + '<i class="fas fa-trash-alt"></i>' + '</a></td><td><a href="updateClinic.html?id=' + element.id +'">' + '<i class="fas fa-pencil-alt"></i>'+"</a></td>\n\</tr>");
            });
        }
});
}


function addClinic(doctorNameAr,doctorNameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,specialization,phones,image) {


    
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/clinic/insert",
        dataType: "json",
         headers: {
        'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Headers': 'Origin , X-Requested-With , Content-Type, Accept'

    },
         data: JSON.stringify({"doctorNameAr": doctorNameAr,"doctorNameEn":doctorNameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "specialization": specialization, "phones": phones, "image":image}),
        success: function(data, textStatus, jqXHR){
   
          window.location.href="http://192.168.137.1:8084/AdminMedicalInsuranceSystem/clinic.html/getAllClinics.html"

//            alert('Clinic created successfully');
                    },
        error: function(jqXHR, textStatus, errorThrown){
            alert('addClinic error: ' + errorThrown);
        }
    });
}

function deleteClinic(){
var result = confirm("You're about to delete Pharmacy , Delete?");
if (result) {
var str = window.location.href;
var url = new URL(str);
var requestData = url.searchParams.get("id");
              //  console.log("id in delete method"+elementId);
                //var requestData=elementId;
                $.ajax({
                    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/clinic/delete/'+requestData,
                    type : 'DELETE',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                        if (response.message !== null) {
                        window.location.href="http://192.168.137.1:8084/AdminMedicalInsuranceSystem/clinic.html/getAllClinics.html";

                        }
                       
                    },
                    error: function (err) {

                    }
});
}
}

function ClinicFormToJSON() {
    var phones=[];
   if($('#phone1').val()!= "")
    {
       phones.push($('#phone1').val());
    }
    if($('#phone2').val()!= "")
    {
       phones.push($('#phone2').val());
    }
     if($('#phone3').val()!= "")
    {
       phones.push($('#phone3').val());
    }
    
    console.log($('#clinic_address').val());
    return JSON.stringify({
        "doctorNameAr": $('#clinic_doctor_name_ar').val(),
        "doctorNameEn": $('#clinic_doctor_name_en').val(),
        "address": $('#clinic_address').val(),
        "longitude": $('#clinic_longitude').val(),
        "latitude": $('#clinic_latitude').val(),
        "startDate": $('#clinic_start_date').val(),
        "endDate": $('#clinic_end_date').val(),
        "openHour": $('#clinic_open_hour').val(),
        "closeHour": $('#clinic_close_hour').val(),
        "specialization": $('#clinic_specialization').val(),
        "phones": phones,
        "image": $('#urlImage').val()
   });
            }



function validate() {
    var phones = [];

    var doctorNameAr = $('#clinic_doctor_name_ar').val();
    var doctorNameEn = $('#clinic_doctor_name_en').val();
    var address = $('#clinic_address').val();
    var longitude = $('#clinic_longitude').val();
    var latitude = $('#clinic_latitude').val();
    var startDate = $('#clinic_start_date').val();
    var endDate = $('#clinic_end_date').val();
    var openHour = $('#clinic_open_hour').val();
    var closeHour = $('#clinic_close_hour').val();
    var specialization = $('#clinic_specialization').val();
    var phone1 = $('#phone1').val();
        var phone2 = $('#phone2').val();
    var phone3 = $('#phone3').val();

var term = phone1;
var re = new RegExp("^([0-9]{3}-[0-9]{11})$");
if (re.test(term)) {
     console.log("Valid");
} 
     if ($('#phone1').val() !== "")
    {
        phones.push($('#phone1').val());
    }
    if ($('#phone2').val() !== "")
    {
        phones.push($('#phone2').val());
    }
    if ($('#phone3').val() !== "")
    {
        phones.push($('#phone3').val());
    }
    console.log("phones= "+phones[0]+phones[1]+phones[2]);

    var image = $('#urlImage').val();
    if(doctorNameAr!==""&&doctorNameEn!==""&&address!==""&&longitude!==""&&latitude!==""&&startDate!==""&&endDate!==""&&openHour!==""&& re.test(term) &&closeHour!==""&&specialization!==""&&phone1!==""&&image!=="")
    {

        addClinic(doctorNameAr,doctorNameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,specialization,phones,image);
    }


}