$(document).ready(function(){
    console.log("Testing");

    // $.ajax({
    //
    //   // The 'type' property sets the HTTP method.
    //   // A value of 'PUT' or 'DELETE' will trigger a preflight request.
    //   type: 'GET',
    //
    //   // The URL to make the request to.
    //   url: 'https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading',
    //
    //   // The 'contentType' property sets the 'Content-Type' header.
    //   // The JQuery default for this property is
    //   // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
    //   // a preflight. If you set this value to anything other than
    //   // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
    //   // you will trigger a preflight request.
    //   contentType: 'text/plain',
    //
    //   xhrFields: {
    //     // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    //     // This can be used to set the 'withCredentials' property.
    //     // Set the value to 'true' if you'd like to pass cookies to the server.
    //     // If this is enabled, your server must respond with the header
    //     // 'Access-Control-Allow-Credentials: true'.
    //     withCredentials: false
    //   },
    //
    //   headers: {
    //     // Set any custom headers here.
    //     // If you set any non-simple headers, your server must include these
    //     // headers in the 'Access-Control-Allow-Headers' response header.
    //   },
    //
    //   success: function() {
    //     // Here's where you handle a successful response.
    //     console.log("something worked")
    //   },
    //
    //   error: function() {
    //     // Here's where you handle an error response.
    //     // Note that if the error was due to a CORS issue,
    //     // this function will still fire, but there won't be any additional
    //     // information about the error.
    //     console.log("Cors request error")
    //   }
    // });

    $.ajax({
        url: "https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading",
        dataType: "json",
        success: function (data) {
            console.log(data)
            alert(data);
        }
    });

    function jsonCallback (data){
        console.log(data)
    }
    // $.ajax({
    //     url: 'https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading',
    //     jsonp : false,
    //     jsonpCallback: 'jsonCallback',
    //     //cache: 'true',
    //     dataType : 'jsonp'
    // });

    // $.ajax({
    //   dataType: 'json',
    //   url: 'https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading',
    //   //data: data,
    //   success: jsonCallback
    // });
})
