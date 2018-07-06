
getPharmaciesCount();
getHospitalsCount();
getClinicsCount();
getLabsCount();

getPharmaciesComplainsCount();
getLabsComplainsCount();
getClinicsComplainsCount();
getHospitalsComplainsCount();

getPharmaciesReviewsCount();
getLabsReviewsCount();
getClinicsReviewsCount();
getHospitalsReviewsCount();

getClinicsSuggestions();
getLabsSuggestions();
getHospitalsSuggestions();
getPharmaciesSuggestions();


function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}


function getPharmaciesCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/pharmacy/retrieveCount',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#PharmacyCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });


}

function getHospitalsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/hospital/retrieveCount',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#HospitalCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });


}

function getClinicsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/clinic/retrieveCount',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#ClinicCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });


}

function getLabsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/lab/retrieveCount',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#LabCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}
function getPharmaciesComplainsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#PharmacyComplainsCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}
function getLabsComplainsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/4',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#LabComplainsCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}

function getClinicsComplainsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#ClinicComplainsCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}

function getHospitalsComplainsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/1',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#HospitalComplainsCount').text(data);
            // document.getElementById("hospital1").value="50";
            $('#hospitalll').attr("aria-valuenow", 100 + '%');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}

function getPharmaciesReviewsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#PharmacyReviewsCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}
function getLabsReviewsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/4',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#LabReviewsCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}

function getClinicsReviewsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#ClinicReviewsCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}

function getHospitalsReviewsCount() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/reviews/getReviewsCount/1',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#HospitalReviewsCount').text(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });
}

function getClinicsSuggestions() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=2',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#ClinicSuggestionsCount').text(data.serviceNumbers);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });


}

function getPharmaciesSuggestions() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=3',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#PharmacySuggestionsCount').text(data.serviceNumbers);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });


}

function getLabsSuggestions() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=4',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#LabSuggestionsCount').text(data.serviceNumbers);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });


}

function getHospitalsSuggestions() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.137.1:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=1',
        dataType: 'json',
         headers: {'Access-Control-Allow-Origin': '*'},
        success: function (data) {
            console.log(data);
            //document.getElementById("pharmaciesCount").value=data;
            $('#HospitalSuggestionsCount').text(data.serviceNumbers);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addClinic error: ' + errorThrown);
        }
    });


}