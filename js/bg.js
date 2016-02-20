$(document).ready(function(){
    console.log("Testing");

    $.getJSON("https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading", function(data) {
        // Get the element with id summary and set the inner text to the result.
        $('#BG-Data').text(data);
        console.log(data);
        //$('#BG-Data').load('https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading');
        //console.log(data.result);
    });

    function jsonCallback (data){
        console.log(data)
    }

})
