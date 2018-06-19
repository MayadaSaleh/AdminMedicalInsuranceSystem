
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

//
//function checkLoginData(userName, password) {
//
//    // var adminName = document.getElementById("uname").value;
//
//    //   $('#uname').val();
//    //  var adminPassword = document.getElementById("psw").value;
//
//    //$('#psw').val();
//
//    console.log(userName);
//    console.log(password);
//
//    console.log("hhhhhhh");
//
//
//    $.ajax({
//        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/admin/checkAdmin',
//        type: 'POST',
//        data: JSON.stringify(eval({"username": userName, "password": password})),
//        contentType: "application/json; charset=utf-8",
//        dataType: 'json',
//        success: function (response) {
//            console.log(response.message);
//
//            if (response.status === true) {
//                setCookie("usernameAdminConsolto", userName, 30);
//                setCookie("passwordAdminConsolto", password, 30);
//                getPharmaciesCount();
//                getHospitalsCount();
//                getClinicsCount();
//                getLabsCount();
//
//                getPharmaciesComplainsCount();
//                getLabsComplainsCount();
//                getClinicsComplainsCount();
//                getHospitalsComplainsCount();
//
//                getPharmaciesReviewsCount();
//                getLabsReviewsCount();
//                getClinicsReviewsCount();
//                getHospitalsReviewsCount();
//
//                getClinicsSuggestions();
//                getLabsSuggestions();
//                getHospitalsSuggestions();
//                getPharmaciesSuggestions();
//
//                //window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/index.html";
//
//                //     } else {
//                //  document.getElementById("errorData").innerHTML = "Please Enter valid data";
//            } else {
//                alert("Login error, please try again");
//                window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/index.html";
//
//            }
//        },
//        error: function (err) {
//
//            window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/errrrrr.html";
//
//            alert("Login error, please try again");
//
//            //   document.getElementById("errorData").innerHTML = "Please Enter valid data";
//        }
//    });
//
//}
//
//
//function setCookie(cname, cvalue, exdays) {
//    var d = new Date();
//    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//    var expires = "expires=" + d.toGMTString();
//    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//}
//
//function getCookie(cname) {
//    var name = cname + "=";
//    var decodedCookie = decodeURIComponent(document.cookie);
//    var ca = decodedCookie.split(';');
//    for (var i = 0; i < ca.length; i++) {
//        var c = ca[i];
//        while (c.charAt(0) == ' ') {
//            c = c.substring(1);
//        }
//        if (c.indexOf(name) == 0) {
//            return c.substring(name.length, c.length);
//        }
//    }
//    return "";
//}
//
//function checkCookie() {
//    var user = getCookie("usernameAdminConsolto");
//    var password = getCookie("passwordAdminConsolto");
//    if (user != "" && password != "") {
//        alert("Welcome again " + user);
//
//
//        getPharmaciesCount();
//        getHospitalsCount();
//        getClinicsCount();
//        getLabsCount();
//
//        getPharmaciesComplainsCount();
//        getLabsComplainsCount();
//        getClinicsComplainsCount();
//        getHospitalsComplainsCount();
//
//        getPharmaciesReviewsCount();
//        getLabsReviewsCount();
//        getClinicsReviewsCount();
//        getHospitalsReviewsCount();
//
//        getClinicsSuggestions();
//        getLabsSuggestions();
//        getHospitalsSuggestions();
//        getPharmaciesSuggestions();
//        //window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/index.html";
//
//        console.log("inside in");
//    } else {
//
//        window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/login.html";
//
//
////        user = prompt("Please enter your name:", "");
////        password = prompt("Please enter your password:", "");
////
////        console.log(user);
////        console.log(password);
////
////        checkLoginData(user, password);
//    }
//}
//
//
//
//function deleteACookie() {
//
//    console.log("deleteCookieeeee function 111111111111111111111111111");
//    var cname = 'usernameAdminConsolto';
//    var cpass = 'passwordAdminConsolto';
//
//    deletecookie(cname, cpass);
//    //window.location.reload();
//}


function deletecookie() {

    document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/splashScreen.html";

}


function getPharmaciesCount() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/pharmacy/retrieveCount',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/hospital/retrieveCount',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/clinic/retrieveCount',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/lab/retrieveCount',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/4',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/1',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/4',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getComplainsCount/3',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/getReviewsCount/1',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=2',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=3',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=4',
        dataType: 'json',
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=1',
        dataType: 'json',
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