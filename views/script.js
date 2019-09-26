$(document).ready (function () { 
  $('#submit').on("click", function (e) {
        e.preventDefault();
        if ($("select").val()=="none") {
            alert("Please rate this page.");
        }
        else {
            alert("You rated "+$('input').val()+" page " + $('select').val());
            $.ajax({
                type: "post",
                url: "http://localhost:3000/rate",
                crossDomain: true,
                data: JSON.stringify({ rating: $("select").val(), province: $("input").val() }),
                success: function (response) {
                    console.log("rated", response);
                    $('#rate').text(response);
                },
                error: function (err){
                    console.log('error');
                }
            })

            $('select').val("none");
        }

    });
});