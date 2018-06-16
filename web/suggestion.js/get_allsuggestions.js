/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

findAllSuggestions();

function findAllSuggestions() {
 $.ajax({ 
    type: 'GET', 
    url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/suggestion/get', 
    dataType: 'json',
    success: function (data) { 
        $.each(data.suggestions, function(index, element) {
            var suggest_id = element.suggestId;
           $("#insertRow").append('<tr><td><a href="../suggestion.html/suggestion_details.html?id='+suggest_id+'">'+element.suggestId+"</a></td><td>"+element.description+"</td></tr>");
        });
    }
});
}

