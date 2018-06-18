function checkLoginData(userName, password) {

    console.log(userName);
    console.log(password);

    console.log("hhhhhhh");

    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/admin/checkAdmin',
        type: 'POST',
        data: JSON.stringify(eval({"username": userName, "password": password})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            console.log(response.message);

            if (response.status === true) {
                setCookie("username", userName, 30);
                setCookie("password", password, 30);

              //  window.location.reload();

                //    window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";





                //     } else {
                //  document.getElementById("errorData").innerHTML = "Please Enter valid data";
            }
        },
        error: function (err) {
            window.location.reload();

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
    var user = getCookie("username");
    var password = getCookie("password");
    if (user != "" && password != "") {
        alert("Welcome again " + user);
       // window.location.reload();

        //window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";
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
    var cname = 'username';
    var cpass = 'password';

    deletecookie(cname, cpass);
    window.location.reload();
}


function deletecookie(cname, cpass) {

    console.log("deleteCookieeeee");
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = cpass + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    //window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";


}















suggestionsNumbersDashboard();
reviewsNumbersDashboard();




function suggestionsNumbersDashboard() {

    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 1,
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 4,
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 2,
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get/suggestionOfMedicalServiceId=' + 3,
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 1,
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 4,
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 2,
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
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/get/reviewOfMedicalServiceId=' + 3,
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