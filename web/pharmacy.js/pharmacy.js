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
        url: 'http://localhost:8585/MedicalInsuranceSystem/api/version1/pharmacy/getAll',
        dataType: "json", // data type of response
        success: function (data) {
            $.each(data.pharmacies, function (index, element) {
                $("#insertRow").append('<tr><td><a href="../pharmacy.html/serviceDetails.html?id=' + element.id + '">' + element.id + "</a></td><td>" + element.nameEn + "</td><td>" + element.startDate + "</td><td>" + element.endDate + "</td><td>" + element.rate + "</td><td>" + element.address + '</td><td><a href="perService.html?id=' + element.id + '&DeleteFlag=true" type="button" class="exampleWarningCancel">' + '<i class="fas fa-trash-alt"></i>' + '</a></td><td><a href="serviceForm.html?id=' + element.id +'">' + '<i class="fas fa-pencil-alt"></i>'+"</a></td>\n\</tr>");
            });
        }
        ,
        error: function (request, status, error) {
            console.log('error');
        }
    });
}


function addPharmacy() {
    console.log('addPharmacy');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://localhost:8585/MedicalInsuranceSystem/api/version1/pharmacy/insert",
        dataType: "json",
        data: formToJSON(),
        success: function (data, textStatus, jqXHR) {
            window.location.href = "http://localhost:8585/AdminMedicalInsuranceSystem/pharmacy.html/perService.html";

        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.href = "http://localhost:8585/AdminMedicalInsuranceSystem/pharmacy.html/perService.html";
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

function deletePharmacy() {
    
     $('.exampleWarningCancel').on("click", function () {
                    swal({
                        title: "You will delete this item",
                        text: "You will not be able to recover this item again",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: "No, cancel please !",
                        cancelButtonText: 'Yes, delete it !',
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                            function (isConfirm) {
                                if (isConfirm) {

                                   swal("Cancelled", "Your item is safe :)",
                                            "error");
                                } else {
                                   swal("Deleted ",
                                            "Your item has been deleted ",
                                            "success");
                                }
                            });
                });
               
                
        var str = window.location.href;
        var url = new URL(str);
        var elementId = url.searchParams.get("id");
        console.log("id in delete method" + elementId);

        var requestData = elementId;
        $.ajax({
            url: 'http://localhost:8585/MedicalInsuranceSystem/api/version1/pharmacy/delete/' + requestData,
            type: 'DELETE',
            data: {},
            dataType: 'json',
            success: function (response) {
                if (response.message !== null) {
                    window.location.href = "http://localhost:8585/AdminMedicalInsuranceSystem/perService.html";

                }

            },
            error: function (err) {

            }
        });
    }

  



$("#p").click(function () {
    console.log("button on click");
    addPharmacy();
});
