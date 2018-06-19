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



function findAll() {
 $.ajax({ 
    type: 'GET', 
    url: 'http://localhost:8585/MedicalInsuranceSystem/api/version1/lab/getAll', 
    dataType: 'json',
     success: function (data) {
            $.each(data.labs, function (index, element) {
                $("#insertRow").append('<tr><td><a href="../lab.html/labDetails.html?id=' + element.id + '">' + element.id + "</a></td><td>" + element.nameEn + "</td><td>" + element.startDate + "</td><td>" + element.endDate + "</td><td>" + element.rate + "</td><td>" + element.address + '</td><td><a href="lab.html?id=' + element.id + '&DeleteFlag=true" type="button" class="exampleWarningCancel">' + '<i class="fas fa-trash-alt"></i>' + '</a></td><td><a href="labForm.html?id=' + element.id +'">' + '<i class="fas fa-pencil-alt"></i>'+"</a></td>\n\</tr>");
            });
        }
});
}


function addLab() {
    console.log('addLab');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://localhost:8585/MedicalInsuranceSystem/api/version1/lab/insert",
        dataType: "json",
        data: formToJSON(),
        success: function(data, textStatus, jqXHR){
          window.location.href="http://localhost:8585/AdminMedicalInsuranceSystem/lab.html/lab.html";

                    },
        error: function(jqXHR, textStatus, errorThrown){
          window.location.href="http://localhost:8585/AdminMedicalInsuranceSystem/lab.html/lab.html";

        }
    });
}



function formToJSON() {
    var departments=[];
    var phones=[];
    if(document.getElementById('c1').checked)
    {
        departments.push($('#c1').val());
    }
    if(document.getElementById('c2').checked)
    {
        departments.push($('#c2').val());
    }
    if(document.getElementById('c3').checked)
    {
        departments.push($('#c3').val());
    }
    if(document.getElementById('c4').checked)
    {
        departments.push($('#c4').val());
    }
    if(document.getElementById('c5').checked)
    {
        departments.push($('#c5').val());
    }
    if(document.getElementById('c6').checked)
    {
        departments.push($('#c6').val());
    }
    if(document.getElementById('c7').checked)
    {
        departments.push($('#c7').val());
    }if(document.getElementById('c8').checked)
    {
        departments.push($('#c8').val());
    }
    
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
        "departments":departments,
        "image": $('#urlImage').val()
   });
            }


