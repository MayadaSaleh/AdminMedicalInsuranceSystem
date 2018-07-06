/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

dispalyLab();

console.log("hellooooooooooooooooo");


function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function dispalyLab() {

    var str = window.location.href;
    var url = new URL(str);
    c = url.searchParams.get("id");

    $.ajax({
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/details/get/?tid=4&sid=' + c,
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
            document.getElementById("open_hour").value = response.openHour;
            document.getElementById("close_hour").value = response.closeHour;
            document.getElementById("urlImage").value = response.image;
            document.getElementById("ceo").value = response.ceo;

            document.getElementById("medical_type_id").value = response.medicalTypeId;
            if (response.labPhones[0].length > 0 || response.labPhones[1].length > 0 || response.labPhones[2].length > 0)
            {
//                document.getElementById("phone1").type = "number";
//                document.getElementById("phone22").type = "number";
//                document.getElementById("phone33").type = "number";
                document.getElementById("phone1").value = response.labPhones[0];
                document.getElementById("phone2").value = response.labPhones[1];
                document.getElementById("phone3").value = response.labPhones[2];
            }
            
          var specializations =  [];
         specializations =response.labSpecializations;
            for (var i=0;i<specializations.length;i++){
             if(specializations[i]=='Urine test')
                       {
                          $("#inputUnchecked1").prop( "checked", true ); 
                       }
                       
                       if(specializations[i]=='Tumor markers')
                       {
                          $("#inputChecked2").prop( "checked", true ); 
                       }
                       if(specializations[i]=='Blood tests')
                       {
                          $("#inputUnchecked3").prop( "checked", true ); 
                       }
            
            }

        },
        error: function (err) {
            alert(err);
        }
    });
}

function validate() {
    console.log("in validate");
    var phones = [];
 var departments=[];
 
    var nameAr = $('#name_ar').val();
    var nameEn = $('#name_en').val();
    var address = $('#address').val();
    var longitude = $('#longitude').val();
    var latitude = $('#latitude').val();
    var startDate = $('#start_date').val();
    var endDate = $('#end_date').val();
    var openHour = $('#open_hour').val();
    var closeHour = $('#close_hour').val();
    var ceo=$('#ceo').val();
    
var phone1 = $('#phone1').val();

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
    
    if(document.getElementById('inputUnchecked1').checked)
    {
        departments.push($('#inputUnchecked1').val());
    }
    if(document.getElementById('inputChecked2').checked)
    {
        departments.push($('#inputChecked2').val());
    }
    if(document.getElementById('inputUnchecked3').checked)
    {
        departments.push($('#inputUnchecked3').val());
    }
    
    console.log("phones= "+phones[0]+phones[1]+phones[2]);

    var image = $('#urlImage').val();
    if(nameAr!==""&&nameEn!==""&&address!==""&&longitude!==""&&latitude!==""&&startDate!==""&&endDate!==""&&openHour!==""&&phone1!==""&&closeHour!==""&&ceo!==""&&image!=="")
    {

        updateLab(nameAr,nameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,ceo,phones,departments,image);
    }


}

function  updateLab(nameAr,nameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,ceo,phones,departments,image) {

//    var phones = [];
//    var specializations = [];
//    if ($('#phone1').val() != "")
//    {
//        phones.push($('#phone11').val());
//    }
//    if ($('#phone22').val() != "")
//    {
//        phones.push($('#phone22').val());
//    }
//    if ($('#phone33').val() != "")
//    {
//        phones.push($('#phone33').val());
//    }
//     if($('#inputUnchecked1').is(':checked'))
//    {
//       specializations.push($('#inputUnchecked1').val()) ;
//    }
//    
//    if($('#inputChecked2').is(':checked'))
//    {
//       specializations.push($('#inputChecked2').val()) ;
//    }
//    if($('#inputUnchecked3').is(':checked'))
//    {
//       specializations.push($('#inputUnchecked3').val()) ;
//    }
//    var requestNameAr = $('#name_ar').val();
//    var requestNameEn = $('#name_en').val();
//    var requestLat = $('#latitude').val();
//    var requestLong = $('#longitude').val();
//    var requestAdd = $('#address').val();
//    var requestStartDate = $('#start_date').val();
//    var requestEndDate = $('#end_date').val();
//    var requestOpenHour = $('#open_hour').val();
//    var requestCloseHour = $('#close_hour').val();
//    var requestImage = $('#urlImage').val();
//        var requestCeo = $('#ceo').val();
        

    var requestMedicalType = $('#medical_type_id').val();
//                var requestPhone1 = $('#clinicPhone1').val();
//                var requestPhone2 = $('#clinicPhone2').val();
//                var requestPhone3 = $('#clinicPhone3').val();

    $.ajax({
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/lab/update',
        type: 'PUT',
       data: JSON.stringify({"nameAr": nameAr,"nameEn":nameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "ceo": ceo, "labPhones": phones,"labSpecializations":departments,"medicalTypeId":requestMedicalType,"id":c, "image":image}),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
//                      
            window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/lab.html/lab.html";
        },
        error: function (err) {
        }
    });
}




