/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var str = window.location.href;
var url = new URL(str);
var deleteFlag = url.searchParams.get("DeleteFlag");
if (deleteFlag === "true") {
    deletePharmacy();
    findAll();
} else
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
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/pharmacy/getAll',
        dataType: 'json', // data type of response
           headers: {
        'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Headers': 'Origin , X-Requested-With , Content-Type, Accept'

    },
      success: function (data) {
            $.each(data.pharmacies, function (index, element) {
                $("#insertRow").append('<tr><td><a href="../pharmacy.html/serviceDetails.html?id=' + element.id + '">' + element.id + "</a></td><td>" + element.nameEn + "</td><td>" + element.startDate + "</td><td>" + element.endDate + "</td><td>" + element.rate + "</td><td>" + element.address + '</td><td><a href="../pharmacy.html/perService.html?id=' + element.id + '&DeleteFlag=true" type="button" class="exampleWarningCancel">' + '<i class="fas fa-trash-alt"></i>' + '</a></td><td><a href="../pharmacy.html/updatePharmacy.html?id=' + element.id +'">' + '<i class="fas fa-pencil-alt"></i>'+"</a></td>\n\</tr>");
            });
        }
        ,
        error: function (request, status, error) {
            console.log('error');
        }
    });
}


function addPharmacy(nameAr,nameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,phones,image)
{
    console.log('addPharmacy');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/pharmacy/insert",
        dataType: "json",
        data: JSON.stringify({"nameAr": nameAr,"nameEn":nameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "pharmacyPhones": phones,"image":image}),
        success: function (data, textStatus, jqXHR) {
            window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/pharmacy.html/perService.html";

        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/pharmacy.html/perService.html";
        }
    });
}



function formToJSON() {
    return JSON.stringify({
        "nameEn": $('#pharmacy_name_en').val(),
        "latitude": $('#pharmacy_latitude').val(),
        "longitude": $('#pharmacy_longitude').val(),
        "startDate": $('#pharmacy_start_date').val(),
        "endDate": $('#pharmacy_end_date').val(),
        "rate": $('#pharmacy_rate').val(),
        "address": $('#pharmacy_address').val(),
        "openHour": $('#pharmacy_open_hour').val(),
        "closeHour": $('#pharmacy_close_hour').val(),
        "nameAr": $('#pharmacy_name_ar').val(),
        "pharmacyPhones": [$('#phone1').val(), $('#phone2').val(), $('#phone3').val()],
        "image": $('#urlImage').val()
    });
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
    
var term = phone1;
var re = new RegExp("^([0-9]{3}-[0-9]{11})$");
if (re.test(term)) {
     console.log("Valid");
} 
    var image = $('#urlImage').val();
    if(nameAr!==""&&nameEn!==""&&re.test(term)&&address!==""&&phone1!==""&&longitude!==""&&latitude!==""&&startDate!==""&&endDate!==""&&openHour!==""&&closeHour!==""&&image!=="")
    {

        addPharmacy(nameAr,nameEn,address,longitude,latitude,startDate,endDate,openHour,closeHour,phones,image);
    }


}
function deletePharmacy() {
    var result = confirm("You're about to delete Pharmacy , Delete?");
if (result) {
                
        var str = window.location.href;
        var url = new URL(str);
        var elementId = url.searchParams.get("id");
        console.log("id in delete method" + elementId);

        var requestData = elementId;
        $.ajax({
            url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/pharmacy/delete/' + requestData,
            type: 'DELETE',
            data: {},
            dataType: 'json',
            success: function (response) {
                if (response.message !== null) {
                    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/pharmacy.html/perService.html";

                }

            },
            error: function (err) {

            }
        });
    }
    }

  



//$("#p").click(function () {
//    console.log("button on click");
//    addPharmacy();
//});
