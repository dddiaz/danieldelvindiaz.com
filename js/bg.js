$(document).ready(function(){
    //console.log("Testing");
    //RETURN for testing
    //return;

    $.getJSON("https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading", function(data) {
        var bg = data['sgv'];
        var trend = data['trend'];
        var direction = data['direction'];
        _setBGInfoText(bg,trend,direction);
        _adjustBGInfoDonut(bg);
        //$('#bg-donut').css("background-image","url('images/sailing-compressed.jpg')");
    });

    //Function to adjust donut
    var _adjustBGInfoDonut = function(bg){
      if (bg){ //bg is not null or empty
        if (bg < 80){
          $('.donut').addClass('one-quarter-filled');
        } else if ( bg > 180){
          $('.donut').addClass('three-quarter-filled');
        } else {
          //Normal
          $('.donut').addClass('half-filled');
        }
      }
    }

    var _setBGInfoText = function(bg,trend,direction){
        $('#BGText').text(_generateBGText(bg,trend,direction));
    }

    var _generateBGTrendText = function(trend,direction){
        var dir = _getDirection(direction)
        if (trend){ //bg is not null or empty
            return (" is trending "
                + dir + " by " + trend + " points");
        }
    }

    var _generateBGText = function(bg,trend,direction){
        var dir = _getDirection(direction)
        var trendText = " and no current trend info.";
        var bgText = "";
        var result = "No Last Blood Glucose Reading...";
        if (trend && direction){ //bg is not null or empty
            trendText = " and is trending "
                + dir + " by " + trend + " points.";
        }
        if (bg){ //bg is not null or empty
          if (bg < 80){
              bgText = "Currently my Blood Glucose is below average";
          } else if ( bg > 180){
              bgText = "Currently my Blood Glucose is above average";
          } else {
            //Normal
            bgText = "Currently my Blood Glucose is average";
          }
        }

        if (bgText){
            return bgText + trendText;
        }

    }

    var _getDirection = function(direction){
        if (!direction) {
            return "down"
        }
        if (direction.lastIndexOf("Down") == -1){
            return "up"
        } else {
            return "down"
        }
    }
})
