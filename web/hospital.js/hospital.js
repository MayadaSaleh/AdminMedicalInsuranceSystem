/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





var str = window.location.href;
var url = new URL(str);
var deleteFlag = url.searchParams.get("DeleteFlag");
console.log(deleteFlag);

if (deleteFlag === "true") {
    deleteHospital();
    findAll();
} else
{
    findAll();
}



function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}
function addHospital(nameAr, nameEn, address, longitude, latitude, startDate, endDate, openHour, closeHour, ceo, phones, departments, image) {
    console.log('addHospital');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/hospital/insert",
        dataType: "json",
        data: JSON.stringify({"nameAr": nameAr, "nameEn": nameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "ceo": ceo, "phones": phones, "departments": departments, "image": image}),
        success: function (data, textStatus, jqXHR) {
            window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/hospital.html/getAllHospitals.html";

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}



function formToJSON() {
    var departments = [];
    var phones = [];
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

    if ($('#phone1').val() != "")
    {
        phones.push($('#phone1').val());
    }
    if ($('#phone2').val() != "")
    {
        phones.push($('#phone2').val());
    }
    if ($('#phone3').val() != "")
    {
        phones.push($('#phone3').val());
    }

    return JSON.stringify({
        "nameAr": $('#name_ar').val(),
        "nameEn": $('#name_en').val(),
        "address": $('#address').val(),
        "longitude": $('#longitude').val(),
        "latitude": $('#latitude').val(),
        "startDate": $('#start_date').val(),
        "endDate": $('#end_date').val(),
        "openHour": $('#open_hour').val(),
        "closeHour": $('#close_hour').val(),
        "ceo": $('#ceo').val(),
        "rate": $('#rate').val(),
        "phones": phones,
        "departments": departments,
        "image": $('#urlImage').val()
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
    var regex = new RegExp("^(0?[1-9]|1[012]):[0-5][0-9]$");
    var term = phone1;
    var re = new RegExp("^([0-9]{3}-[0-9]{11})$");

    if (re.test(term)) {
        console.log("Valid");
    }

    if ($('#phone1').val() !== "" && re.test(term))
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
    if (nameAr !== "" && nameEn !== "" && address !== "" && longitude !== "" && latitude !== "" && startDate !== "" && endDate !== "" && openHour !== "" && closeHour !== "" && phone1 !== "" && re.test(term) && ceo !== "" && image !== "")
    {
        addHospital(nameAr, nameEn, address, longitude, latitude, startDate, endDate, openHour, closeHour, ceo, phones, departments, image);
    }
}


function findAll() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/hospital/getAll',
        dataType: 'json',
        success: function (data) {
            $.each(data.hospitals, function (index, element) {
                $("#insertRow").append('<tr><td><a href="../hospital.html/details.html?id=' + element.id + '">' + element.id + "</a></td><td>" + element.nameEn + "</td><td>" + element.startDate + "</td><td>" + element.endDate + "</td><td>" + element.rate + "</td><td>" + element.address + '</td><td><a href="../hospital.html/getAllHospitals.html?id=' + element.id + '&DeleteFlag=true" type="button" class="exampleWarningCancel">' + '<i class="fas fa-trash-alt"></i>' + '</a></td><td><a href="../hospital.html/updateHospital.html?id=' + element.id + '">' + '<i class="fas fa-pencil-alt"></i>' + "</a></td>\n\</tr>");
            });
        }
    });
}

function deleteHospital() {
    var result = confirm("You're about to delete hospital , Delete?");
    if (result) {
        var str = window.location.href;
        var url = new URL(str);
        var requestData = url.searchParams.get("id");

        $.ajax({
            url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/hospital/delete/' + requestData,
            type: 'DELETE',
            data: {},
            dataType: 'json',
            success: function (response) {
                if (response.message !== null) {
                    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/hospital.html/getAllHospitals.html";

                }

            },
            error: function (err) {

            }
        });
    }
}