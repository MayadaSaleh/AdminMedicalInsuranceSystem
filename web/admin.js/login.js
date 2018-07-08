

function checkLoginData() {

    var adminName = document.getElementById("userName").value;
    console.log("name" + adminName);
    var adminPassword = document.getElementById("password").value;
    console.log("passsss" + ('#password').val);
    console.log(adminName);
    console.log(adminPassword);


    $.ajax({
        url: 'http://192.168.1.8:8084/MedicalInsuranceSystem/api/version1/admin/checkAdmin',
        type: 'POST',
        data: JSON.stringify(eval({"username": adminName, "password": adminPassword})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {
            console.log(response.message);

            if (response.status === true) {
                setCookie("usernameAdminConsolto", adminName, 30);
                setCookie("passwordAdminConsolto", adminPassword, 30);

                window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/index.html";

            } else {
                alert("Login error, please try again");
                window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/login.html";

            }
        },
        error: function (err) {
            alert("Login error, please try again");
            window.location.href = "http://192.168.1.8:8084/AdminMedicalInsuranceSystem/admin.html/login.html";
        }
    });

}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
