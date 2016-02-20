$(document).ready(function(){
    //console.log("Testing");

    $.getJSON("https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading", function(data) {
        // Get the element with id summary and set the inner text to the result.
        //$('#BG-Data').text(data);
        // console.log(data);
        // for (var key in data) {
        //   if (data.hasOwnProperty(key)) {
        //     console.log(key + " -> " + data[key]);
        //   }
        // }
        //$('#sgv').text(data['sgv']);
        //$('#trend').text(data['trend']);
        var bg = data['sgv'];
        var trend = data['trend'];
        var direction = data['direction'];
        _showBGInfo(bg);
        _showBGTrend(trend,direction);
    });

    //Function to adjust donut
    var _showBGInfo = function(bg){
      if (bg){ //bg is not null or empty
        if (bg < 80){
          $('.donut').addClass('one-quarter-filled');
          $('#BGText').text("Currently my Blood Glucose is below average.");
        } else if ( bg > 180){
          $('.donut').addClass('three-quarter-filled');
          $('#BGText').text("Currently my Blood Glucose is above average.");
        } else {
          //Normal
          $('.donut').addClass('half-filled');
          $('#BGText').text("Currently my Blood Glucose is in an average range.");
        }
      }
    }

    var _showBGTrend = function(trend,direction){
        var dir = _getDirection(direction)
        if (trend){ //bg is not null or empty
            $('#BGTrendText').text("Currently my Blood Glucose is trending "
                + dir + " by " + trend + " points");
        }
    }

    var _getDirection = function(direction){
        if (!direction) {
            return "Down"
        }
        if (direction.lastIndexOf("Down") == -1){
            return "Up"
        } else {
            return "Down"
        }
    }

    // function lastBGReadingCallback (data){
    //     var BGObj = jQuery.parseJSON(data);
    //     $('#sgv').text(BGObj.sgv);
    // }

})
