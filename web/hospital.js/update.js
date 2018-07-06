/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dispalyHospital();

console.log("hellooooooooooooooooo");

function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}



function dispalyHospital() {

    var str = window.location.href;
    var url = new URL(str);
    c = url.searchParams.get("id");

    $.ajax({
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/details/get?tid=1&sid=' + c,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            document.getElementById("name_ar").value = response.nameAr;
            document.getElementById("name_en").value = response.nameEn;
            document.getElementById("latitude").value = response.latitude;
            document.getElementById("longitude").value = response.longitude;
            document.getElementById("address").value = response.address;
            document.getElementById("start_date").value = response.startDate;
            document.getElementById("end_date").value = response.endDate;
            document.getElementById("ceo").value = response.ceo;
            document.getElementById("open_hour").value = response.openHour;
            document.getElementById("close_hour").value = response.closeHour;
            document.getElementById("urlImage").value = response.image;
            console.log(response.medicalTypeId);
             document.getElementById("medical_type_id").value=response.medicalTypeId;

var depts = [];
depts = response.departments;
console.log(depts);
for (var i=0;i<depts.length;i++) {
            if (response.departments[i] == 'Accident and emergency (A&E)')
            {
                $("#c1").prop("checked", true);
            }

            if (response.departments[i] == 'Anaesthetics')
            {
                $("#c2").prop("checked", true);
            }
            if (response.departments[i] == 'Ear nose and throat (ENT)')
            {
                $("#c3").prop("checked", true);
            }
            if (response.departments[i] == 'Elderly services department')
            {
                $("#c4").prop("checked", true);
            }

            if (response.departments[i] == 'General surgery')
            {
                $("#c5").prop("checked", true);
            }

            if (response.departments[i] == 'Maternity departments')
            {
                $("#c6").prop("checked", true);
            }
            if (response.departments[i] == 'Neonatal unit')
            {
                $("#c7").prop("checked", true);
            }
            if (response.departments[i] == 'Obstetrics and gynaecology units')
            {
                $("#c8").prop("checked", true);
            }
            }
            if (response.phones[0].length > 0 || response.phones[1].length > 0 || response.phones[2].length > 0)
            {
//                document.getElementById("phone1").type = "number";
//                document.getElementById("phone2").type = "number";
//                document.getElementById("phone3").type = "number";
console.log("phone 1"+response.phones[0]);
console.log("phone 2"+response.phones[1]);
console.log("phone 3"+response.phones[2]);

                document.getElementById("phone1").value = response.phones[0];
                document.getElementById("phone2").value = response.phones[1];
                document.getElementById("phone3").value = response.phones[2];
            }


        },
        error: function (err) {
        }
    });
}

function updateHospital(nameAr, nameEn, address, longitude, latitude, startDate, endDate, openHour, closeHour, ceo, phones, departments, image)
{
//    
//    var phones=[];
//    var departments=[];
//    
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
//    
//    if($('#inputUnchecked1').is(':checked'))
//    {
//       departments.push($('#inputUnchecked1').val()) ;
//    }
//    
//    if($('#inputChecked2').is(':checked'))
//    {
//       departments.push($('#inputChecked2').val()) ;
//    }
//    if($('#inputUnchecked3').is(':checked'))
//    {
//       departments.push($('#inputUnchecked3').val()) ;
//    }
//    if($('#inputChecked4').is(':checked'))
//    {
//       departments.push($('#inputChecked4').val()) ;
//    }
//    if($('#inputUnchecked5').is(':checked'))
//    {
//       departments.push($('#inputUnchecked5').val()) ;
//    }
//    if($('#inputChecked6').is(':checked'))
//    {
//       departments.push($('#inputChecked6').val()) ;
//    }
//    if($('#inputUnchecked7').is(':checked'))
//    {
//       departments.push($('#inputUnchecked7').val()) ;
//    }
//    if($('#inputChecked8').is(':checked'))
//    {
//       departments.push($('#inputChecked8').val()) ;
//    }
//    
//              var requestNameAr = $('#name_ar').val();
//              var requestNameEn = $('#name_en').val();
//                var requestCeo = $('#ceo').val();
//                var requestLat = $('#latitude').val();
//                var requestLong = $('#longitude').val();
//               var requestAdd = $('#address').val();
//                var requestStartDate = $('#start_date').val();
//               var requestEndDate= $('#end_date').val();
//               var requestOpenHour = $('#open_hour').val();
//               var requestCloseHour= $('#close_hour').val();
//               var requestImage= $('#urlImage').val();
               var requestMedicalType=$('#medical_type_id').val();
//                var requestPhone1 = $('#clinicPhone1').val();
//                var requestPhone2 = $('#clinicPhone2').val();
//                var requestPhone3 = $('#clinicPhone3').val();

    $.ajax({
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/hospital/update',
        type: 'PUT',
        data: JSON.stringify({"nameAr": nameAr,"medicalTypeId":requestMedicalType,"id":c, "nameEn": nameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "ceo": ceo, "phones": phones, "departments": departments, "image": image}),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
//                      
            window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/hospital.html/getAllHospitals.html";
        },
        error: function (err) {
        }
    });
}

function validate() {
    var phones = [];
    var departments = [];

    var nameAr = $('#name_ar').val();
    var nameEn = $('#name_en').val();
    var address = $('#address').val();
    var longitude = $('#longitude').val();
    var latitude = $('#latitude').val();
    var startDate = $('#start_date').val();
    var endDate = $('#end_date').val();
    var openHour = $('#open_hour').val();
    var closeHour = $('#close_hour').val();
    var ceo = $('#ceo').val();


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
    if (document.getElementById('c1').checked)
    {
        departments.push($('#c1').val());
    }
    if (document.getElementById('c2').checked)
    {
        departments.push($('#c2').val());
    }
    if (document.getElementById('c3').checked)
    {
        departments.push($('#c3').val());
    }
    if (document.getElementById('c4').checked)
    {
        departments.push($('#c4').val());
    }
    if (document.getElementById('c5').checked)
    {
        departments.push($('#c5').val());
    }
    if (document.getElementById('c6').checked)
    {
        departments.push($('#c6').val());
    }
    if (document.getElementById('c7').checked)
    {
        departments.push($('#c7').val());
    }
    if (document.getElementById('c8').checked)
    {
        departments.push($('#c8').val());
    }
    console.log("phones= " + phones[0] + phones[1] + phones[2]);

    var image = $('#urlImage').val();
    if (nameAr !== "" && nameEn !== "" && address !== "" && longitude !== "" && latitude !== "" && startDate !== "" && endDate !== "" && openHour !== "" && closeHour !== "" &&phone1!==""&& ceo !== "" && image !== "")
    {

        updateHospital(nameAr, nameEn, address, longitude, latitude, startDate, endDate, openHour, closeHour, ceo, phones, departments, image);
    }


}


