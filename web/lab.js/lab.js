/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var str = window.location.href;
var url = new URL(str);
var deleteFlag = url.searchParams.get("DeleteFlag");
if (deleteFlag === "true") {
    deleteLab();
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

function deleteLab() {
    var result = confirm("You're about to delete Pharmacy , Delete?");
    if (result) {

        var str = window.location.href;
        var url = new URL(str);
        var elementId = url.searchParams.get("id");
        console.log("id in delete method" + elementId);

        var requestData = elementId;
        $.ajax({
            url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/lab/delete/' + requestData,
            type: 'DELETE',
            data: {},
            dataType: 'json',
            success: function (response) {
                if (response.message !== null) {
                    window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/lab.html/lab.html";

                }

            },
            error: function (err) {

            }
        });
    }
}
function findAll() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/lab/getAll',
        dataType: 'json',

        success: function (data) {
            $.each(data.labs, function (index, element) {
                $("#insertRow").append('<tr><td><a href="../lab.html/labDetails.html?id=' + element.id + '">' + element.id + "</a></td><td>" + element.nameEn + "</td><td>" + element.startDate + "</td><td>" + element.endDate + "</td><td>" + element.rate + "</td><td>" + element.address + '</td><td><a href="../lab.html/lab.html?id=' + element.id + '&DeleteFlag=true" type="button" class="exampleWarningCancel">' + '<i class="fas fa-trash-alt"></i>' + '</a></td><td><a href="../lab.html/updateLab.html?id=' + element.id + '">' + '<i class="fas fa-pencil-alt"></i>' + "</a></td>\n\</tr>");
            });
        }
    });
}


function  addLab(nameAr, nameEn, address, longitude, latitude, startDate, endDate, openHour, closeHour, ceo, phones, departments, image)
{
    console.log('addLab');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/lab/insert",
        dataType: "json",
        data: JSON.stringify({"nameAr": nameAr, "nameEn": nameEn, "address": address, "longitude": longitude, "latitude": latitude, "startDate": startDate, "endDate": endDate, "openHour": openHour, "closeHour": closeHour, "ceo": ceo, "labPhones": phones, "labSpecializations": departments, "image": image}),
        success: function (data, textStatus, jqXHR) {
            window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/lab.html/lab.html";

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}


function formToJSON() {
    var departments = [];
    var phones = [];
    if (document.getElementById('inputUnchecked1').checked)
    {
        departments.push($('#inputUnchecked1').val());
    }
    if (document.getElementById('inputChecked2').checked)
    {
        departments.push($('#inputChecked2').val());
    }
    if (document.getElementById('inputUnchecked3').checked)
    {
        departments.push($('#inputUnchecked3').val());
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
        "labPhones": phones,
        "labSpecializations": departments,
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

    if (document.getElementById('inputUnchecked1').checked)
    {
        departments.push($('#inputUnchecked1').val());
    }
    if (document.getElementById('inputChecked2').checked)
    {
        departments.push($('#inputChecked2').val());
    }
    if (document.getElementById('inputUnchecked3').checked)
    {
        departments.push($('#inputUnchecked3').val());
    }

    console.log("phones= " + phones[0] + phones[1] + phones[2]);

    var image = $('#urlImage').val();
    if (nameAr !== "" && nameEn !== "" && address !== "" && longitude !== "" && re.test(term) && latitude !== "" && startDate !== "" && endDate !== "" && openHour !== "" && closeHour !== "" && ceo !== "" && phone1 !== "" && image !== "")
    {
        addLab(nameAr, nameEn, address, longitude, latitude, startDate, endDate, openHour, closeHour, ceo, phones, departments, image);
    }


}
