//Donut
// $(function(){
//   setTimeout(function() {
//     $('.donut').addClass('three-quarter-filled');
//     setTimeout(function() {
//       $('.donut').addClass('one-quarter-filled');
//       setTimeout(function() {
//         $('.donut').addClass('half-filled');
//       }, 3000);
//     }, 3000);
//   }, 500);
// });

$(function(){
  setTimeout(function() {
    $('.donut').addClass('three-quarter-filled');
  }, 500);

  //Function to adjust donut
  // var _showBGInfo = function(bg){
  //   if (bg){ //bg is not null or empty
  //     if (bg < 80){
  //       alert("LOW");
  //     } else if ( bg > 180){
  //       alert("High");
  //     } else {
  //       //Normal
  //       alert(Normal);
  //     }
  //
  //   }
  // }

  //Querry for current bg, dont forget where there is no good data
  //Try generalizing by only dfoing 200+ or 80-
  // $.ajax({
  //     type: 'GET',
  //     url: 'https://uxlmtxq0vb.execute-api.us-east-1.amazonaws.com/test/last-bg-reading',
  //     //data: { get_param: 'value' },
  //     dataType: 'jsonp',
  //     contentType: "application/json",
  //     success: function (data) {
  //       alert(data[0]);
  //       var sgv = data[0].sgv;
  //       var trendDirection = data[0].direction;
  //       var trend = data[0].trend;
  //       alert(sgv);
  //       _showBGInfo(sgv);
  //         // $.each(data, function(index, element) {
  //         //     $('body').append($('<div>', {
  //         //         text: element.name
  //         //     }));
  //         // });
  //     },
  //     failure: function(error,response){
  //       alert("Call Failed");
  //     }
  // });
});
