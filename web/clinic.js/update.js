/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

dispalyClinic();

console.log("hellooooooooooooooooo");


function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function dispalyClinic() {
     console.log("display clinic");

    var str = window.location.href;
    var url = new URL(str);
     c = url.searchParams.get("id");
     console.log("display clinic");

console.log(c);
    $.ajax({
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/details/get/?tid=2&sid=' + c,
                    method: 'get',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                          document.getElementById("clinic_doctor_name_ar").value = response.doctorNameAr; 
                          console.log(response.doctorNameAr);
                           document.getElementById("clinic_doctor_name_en").value = response.doctorNameEn;
                           document.getElementById("clinic_latitude").value = response.latitude;
                           document.getElementById("clinic_longitude").value = response.longitude;
                           document.getElementById("clinic_address").value =response.address;
                          document.getElementById("clinic_start_date").value =response.startDate;
                           document.getElementById("clinic_end_date").value = response.endDate;
                           document.getElementById("clinic_specialization").value = response.specialization;
                           document.getElementById("clinic_open_hour").value = response.openHour;
                            document.getElementById("clinic_close_hour").value = response.closeHour;
                       document.getElementById("urlImage").value = response.image;
                       document.getElementById("medical_type_id").value=response.medicalTypeId;
                            if(response.phones[0].length > 0 || response.phones[1].length > 0 || response.phones[2].length > 0)
                            {
//                            document.getElementById("phone1").type="number";
//                            document.getElementById("phone2").type="number";
//                            document.getElementById("phone3").type="number";
                          document.getElementById("phone1").value = response.phones[0];
                           document.getElementById("phone2").value = response.phones[1];
                           document.getElementById("phone3").value = response.phones[2];
                       }
                      
                    },
                    error: function (err) {
                        alert(err);
                    }
                }); 
}

function updateClinic(doctorNameAr,doctorNameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,specialization,phones,image){
    
//    var phones=[];
//   if($('#phone11').val()!= "")
//    {
//       phones.push(phone1);
//    }
//    if($('#phone22').val()!= "")
//    {
//       phones.push(phone2);
//    }
//     if($('#phone33').val()!= "")
//    {
//       phones.push(phone3);
//    }
//              var requestNameAr = $('#clinic_doctor_name_ar').val();
//              var requestNameEn = $('#clinic_doctor_name_en').val();
//                var requestSpecialization = $('#clinic_specialization').val();
//                var requestLat = $('#clinic_latitude').val();
//                var requestLong = $('#clinic_longitude').val();
//               var requestAdd = $('#clinic_address').val();
//                var requestStartDate = $('#clinic_start_date').val();
//               var requestEndDate= $('#clinic_end_date').val();
//               var requestOpenHour = $('#clinic_open_hour').val();
//               var requestCloseHour= $('#clinic_close_hour').val();
//               var requestImage= $('#urlImage').val();
               var requestMedicalType=$('#medical_type_id').val();
//                var requestPhone1 = $('#clinicPhone1').val();
//                var requestPhone2 = $('#clinicPhone2').val();
//                var requestPhone3 = $('#clinicPhone3').val();
    
    $.ajax({
                    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/clinic/update',
                    type: 'PUT',
                   data: JSON.stringify({"doctorNameAr": doctorNameAr, "medicalTypeId":requestMedicalType,"id":c,"doctorNameEn":doctorNameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "specialization": specialization, "phones": phones, "image":image}),
       contentType: "application/json; charset=utf-8",
                    dataType:'json',
                    success: function (response) {
//                      
                          window.location.href="http://192.168.137.1:8084/AdminMedicalInsuranceSystem/clinic.html/getAllClinics.html";
                    },
                    error: function (err) {
                    }
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
    if(doctorNameAr!==""&&doctorNameEn!==""&&address!==""&&longitude!==""&&latitude!==""&&startDate!==""&&endDate!==""&&openHour!==""&&closeHour!==""&&specialization!==""&&phone1!==""&&image!=="")
    {

        updateClinic(doctorNameAr,doctorNameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,specialization,phones,image);
    }


}