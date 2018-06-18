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
                window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";
                //     } else {
                //  document.getElementById("errorData").innerHTML = "Please Enter valid data";
            }
        },
        error: function (err) {
            window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/errrrrr.html";

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
        window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/welcomePage.html";
        console.log("inside in");
    } else {
        user = prompt("Please enter your name:", "");
        password = prompt("Please enter your password:", "");

            console.log(user);
            console.log(password);
            
        checkLoginData(user, password);
    }
}

