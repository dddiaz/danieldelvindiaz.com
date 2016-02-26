//BG Panel JS Logic
//By: Daniel Diaz 2016

$(document).ready(function(){
    setTimeout(function() {
      $('.donut').addClass('almost-empty');
    }, 500);
    //RETURN to disable too many aws calls during testing. Im on a budget here! haha
    //return;

    $.getJSON("https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading", function(data) {
        var bg = data['sgv'];
        var trend = data['trend'];
        var direction = data['direction'];
        //console.log("BG: " + bg);
        var returnBG = function() {
            return bg;
        }
        //Once Data is loaded, attatch an inview event to the donut
        _setBGInfoText(bg,trend,direction);
        $('.donut').bind('inview', function(event, visible) {
            if (visible) {
                _adjustBGInfoDonut(returnBG());
            } else {
                _adjustBGInfoDonutToMin();
            }
        });
    });

    //Function to adjust donut
    var _adjustBGInfoDonut = function(bg){
      if (bg){ //bg is not null or empty
        if (bg < 80){
          //$('.donut').addClass('one-quarter-filled');
          $('.donut').attr("class","donut one-quarter-filled");
        } else if ( bg > 180){
            //$('.donut').removeClass('almost-empty');
          //$('.donut').addClass('three-quarter-filled');
          $('.donut').attr("class","donut three-quarter-filled");
        } else {
          //Normal
          //$('.donut').addClass('half-filled');
          $('.donut').attr("class","donut half-filled");
        }
      }
    }

    var _adjustBGInfoDonutToMin = function(){
        $('.donut').attr("class","donut almost-empty");
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
