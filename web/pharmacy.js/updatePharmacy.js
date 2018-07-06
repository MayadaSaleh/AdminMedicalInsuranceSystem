/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

dispalyPharmacy();
function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function validate() {
    var phones = [];
 
    var nameAr = $('#pharmacy_name_ar').val();
    var nameEn = $('#pharmacy_name_en').val();
    var address = $('#pharmacy_address').val();
    var longitude = $('#pharmacy_longitude').val();
    var latitude = $('#pharmacy_latitude').val();
    var startDate = $('#pharmacy_start_date').val();
    var endDate = $('#pharmacy_end_date').val();
    var openHour = $('#pharmacy_open_hour').val();
    var closeHour = $('#pharmacy_close_hour').val();
    
        var phone1=$('#phone1').val();

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
    
    var image = $('#urlImage').val();
    if(nameAr!==""&&nameEn!==""&&address!==""&&longitude!==""&&latitude!==""&&startDate!==""&&endDate!==""&&openHour!==""&&phone1!==""&&closeHour!==""&&image!=="")
    {

        updatePharmacy(nameAr,nameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,phones,image);
    }


}

function dispalyPharmacy() {

    var str = window.location.href;
    var url = new URL(str);
     c = url.searchParams.get("id");

console.log(c);
    $.ajax({
    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/details/get/?tid=3&sid=' + c,
                    method: 'get',
                    data: {},
                    dataType: 'json',
                    success: function (response) {
                          document.getElementById("pharmacy_name_ar").value = response.nameAr; 
                          console.log(response.doctorNameAr);
                           document.getElementById("pharmacy_name_en").value = response.nameEn;
                           document.getElementById("pharmacy_latitude").value = response.latitude;
                           document.getElementById("pharmacy_longitude").value = response.longitude;
                           document.getElementById("pharmacy_address").value =response.address;
                          document.getElementById("pharmacy_start_date").value =response.startDate;
                           document.getElementById("pharmacy_end_date").value = response.endDate;
                           document.getElementById("pharmacy_open_hour").value = response.openHour;
                            document.getElementById("pharmacy_close_hour").value = response.closeHour;
                       document.getElementById("urlImage").value = response.image;
                       document.getElementById("medical_type_id").value=response.medicalTypeId;
                            if(response.pharmacyPhones[0].length > 0 || response.pharmacyPhones[1].length > 0 || response.pharmacyPhones[2].length > 0)
                            {
//                            document.getElementById("phone1").type="number";
//                            document.getElementById("phone2").type="number";
//                            document.getElementById("phone3").type="number";
                          document.getElementById("phone1").value = response.pharmacyPhones[0];
                           document.getElementById("phone2").value = response.pharmacyPhones[1];
                           document.getElementById("phone3").value = response.pharmacyPhones[2];
                       }
                      
                    },
                    error: function (err) {
                        alert(err);
                    }
                }); 
}

function  updatePharmacy(nameAr,nameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,phones,image){
    
//    var phones=[];
//   if($('#phone1').val()!= "")
//    {
//       phones.push($('#phone1').val());
//    }
//    if($('#phone2').val()!= "")
//    {
//       phones.push($('#phone2').val());
//    }
//     if($('#phone3').val()!= "")
//    {
//       phones.push($('#phone3').val());
//    }
//              var requestNameAr = $('#pharmacy_name_ar').val();
//              var requestNameEn = $('#pharmacy_name_en').val();
//                var requestLat = $('#pharmacy_latitude').val();
//                var requestLong = $('#pharmacy_longitude').val();
//               var requestAdd = $('#pharmacy_address').val();
//                var requestStartDate = $('#pharmacy_start_date').val();
//               var requestEndDate= $('#pharmacy_end_date').val();
//               var requestOpenHour = $('#pharmacy_open_hour').val();
//               var requestCloseHour= $('#pharmacy_close_hour').val();
//               var requestImage= $('#urlImage').val();
               var requestMedicalType=$('#medical_type_id').val();

    $.ajax({
                    url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/pharmacy/update',
                    type: 'PUT',
                    data: JSON.stringify({"nameAr": nameAr,"medicalTypeId":requestMedicalType,"id":c, "nameEn":nameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "pharmacyPhones": phones,"image":image}),
                    contentType: "application/json; charset=utf-8",
                    dataType:'json',
                    success: function (response) {
//                      
                          window.location.href="http://192.168.137.1:8084/AdminMedicalInsuranceSystem/pharmacy/perService.html";
                    },
                    error: function (err) {
                    }
                });
}




