function addAdminApi() {

    var userName = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;



    $.ajax({
        url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/admin/insert',
        type: 'POST',
        data: JSON.stringify(eval({"username": userName, "password": password})),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (response) {

            console.log(response.status);

            if (response.status == true) {
                //resultElement.html(response.status);
                alert("admin " + userName + " is inserted successfuly");
                window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/index.html";


            } else {
                alert("error is  " + userName + " insertion");
                window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/index.html";
            }


        },
        error: function (err) {
           // alert(err);
            alert("errorm is  " + userName + " insertion");
            window.location.href = "http://localhost:8084/AdminMedicalInsuranceSystem/admin.html/index.html";
        }
    });


}