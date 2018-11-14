$(document).ready(function() {
  $.ajax({
    url: "https://api.github.com/users/unipartdigital",
    type: "GET",
    success: function(result) {
        if(result == undefined || Object.keys(result).length == 0) {
            $("#main").append("No data found.");
        }
        else {
          for(var key in result) {    
            $("#main").append("<div>" + key + " : " + result[key] + "</div>");
          }
        }
    },
    error: function(xhr, error, thrown) {
        $("#main").append("Error " + xhr.responseText);
    }
  })
})