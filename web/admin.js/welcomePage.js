
///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//
//
function checkLoginData(userName, password) {

    // var adminName = document.getElementById("uname").value;

    //   $('#uname').val();
    //  var adminPassword = document.getElementById("psw").value;

    //$('#psw').val();

    console.log(userName);
    console.log(password);

    console.log("hhhhhhh");


    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/admin/checkAdmin',
        type: 'POST',
        data: JSON.stringify(eval({"username": userName, "password": password})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            console.log(response.message);

            if (response.status === true) {
                setCookie("usernameAdminConsolto", userName, 30);
                setCookie("passwordAdminConsolto", password, 30);
                suggestionsNumbersDashboard();
                reviewsNumbersDashboard();

                //window.location.href = "http://localhost:4048/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";

                //     } else {
                //  document.getElementById("errorData").innerHTML = "Please Enter valid data";
            } else {
                alert("Login error, please try again");
                window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";

            }
        },
        error: function (err) {

            window.location.href = "http://localhost:4048/AdminMedicalInsuranceSystem/admin.html/errrrrr.html";

                alert("Login error, please try again");

            //   document.getElementById("errorData").innerHTML = "Please Enter valid data";
        }
    });

}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("usernameAdminConsolto");
    var password = getCookie("passwordAdminConsolto");
    if (user != "" && password != "") {
        alert("Welcome again " + user);
        suggestionsNumbersDashboard();
        reviewsNumbersDashboard();

        //window.location.href = "http://localhost:4048/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";

        console.log("inside in");
    } else {
        user = prompt("Please enter your name:", "");
        password = prompt("Please enter your password:", "");

            console.log(user);
            console.log(password);
            
        checkLoginData(user, password);
    }
}



function deleteACookie() {

    console.log("deleteCookieeeee function 111111111111111111111111111"); 
    var cname = 'usernameAdminConsolto';
    var cpass = 'passwordAdminConsolto';

    deletecookie(cname, cpass);
    //window.location.reload();
}


function deletecookie() {

    console.log("deleteCookieeeee function 222222222222222222222");
//    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//    document.cookie = cpass + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

document.cookie = "usernameAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "passwordAdminConsolto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "http://localhost:4048/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";

}







function suggestionsNumbersDashboard() {

    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 1,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            //     console.log(response.serviceNumbers);
            document.getElementById("hospialNumberSuggestion").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });

    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 4,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            //     console.log(response.serviceNumbers);
            document.getElementById("labNumberSuggestion").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });


    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 2,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            //   console.log(response.serviceNumbers);
            document.getElementById("clinicNumberSuggestion").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });


    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 3,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            //    console.log(response.serviceNumbers);
            document.getElementById("pharmacyNumberSuggestion").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });
}

////////////////////////Reviews////////////////////////


function reviewsNumbersDashboard() {

    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 1,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            console.log(response.serviceNumbers);
            document.getElementById("hospialNumberReviews").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });

    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 4,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            console.log(response.serviceNumbers);
            document.getElementById("labNumberReviews").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });


    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 2,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            console.log(response.serviceNumbers);
            document.getElementById("clinicNumberReviews").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });


    $.ajax({
        url: 'http://localhost:4048/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 3,
        method: 'get',
        data: {},
        dataType: 'json',
        success: function (response) {
            console.log(response.serviceNumbers);
            document.getElementById("pharmacyNumberReviews").innerHTML = response.serviceNumbers;
        },
        error: function (err) {
            alert(err);
        }
    });
}