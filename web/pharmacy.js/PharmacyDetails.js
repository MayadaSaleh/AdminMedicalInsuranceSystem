/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


findPharmacyDetails();
function findPharmacyDetails() {
    rootURL = 'http://localhost:8585/MedicalInsuranceSystem/api/version1/details/get';
    var str = window.location.href;
    var url = new URL(str);
    var c = url.searchParams.get("id");
    $.ajax({
        type: 'GET',
        url: rootURL + '?tid=3&sid=' + c,
        dataType: 'json',
        success: function (data) {

            var phones = [];
            var phonesarray = [];

            phones = data.pharmacyPhones;
            for (var i = 0; i < phones.length; i++)
            {
                phonesarray.push(phones[i]);

            }
            $("#nameAr").append(data.nameAr);
            $("#nameEn").append(data.nameEn);

            $("#address").append(data.address);
            $("#openH").append(data.openHour);
            $("#closedH").append(data.closeHour);
            $("#startD").append(data.startDate);
            $("#endD").append(data.endDate);
            $("#nameE").append(data.nameEn);

            $("#lat").append(data.latitude);
            $("#long").append(data.longitude);

            $("#serviceId").append(data.id);
            $("#list").append("Pharmacies List");
                        $("#rate").append(data.rate);

            $("#edit").append("Edit Pharmacy");
            
                        $("#del").append("Delete Pharmacy");


            $("#details").append("Pharmacies Details");

            if (phonesarray[0] !== null)
                $("#phoneOne").append(phonesarray[0]);
            else
            {
                $("#phoneOne").append("");
            }

            if (phonesarray[1] !== null)
                $("#phoneTwo").append(phonesarray[1]);
            else
            {
                $("#phoneTwo").append("");
            }

            if (phonesarray[2] !== null)
                $("#phoneThree").append(phonesarray[2]);
            else
            {
                $("#phoneThree").append("");
            }




        }
    });
}
