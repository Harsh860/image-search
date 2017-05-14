   $(document).ready(function() {

       var i = 0;
       var fli = {};

       var api = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
       $('button').click(function() {
           /*if (i != 0) {
                          $('div').remove();
                          $('img').remove();
                      }*/
           /*  $.getJSON('https://got-quotes.herokuapp.com/quotes?format=json', function(json) {

                 $("body").append("<div>" + "<p> " + json.quote + "</p>" + "<p>" + json.character + "</p>" + "</div>");

                 var a = json.character + "game of thrones";
                 $('div').css('background-color', 'red').addClass('i');*/


           if (i != 0) {


               $('img').remove();
           }
           var e = $('#usr').val();
           if (e != 0) {
               fli = {
                   tags: e,
                   format: "json"
               };
               $.getJSON(api, fli, function(data) {
                   console.log(data);
                   for (i = 0; i < 19; i++) {
                       var v = data.items[i].description;
                       var f = data.items[i].link;

                       $('.container').append($(v).find("img"));
                       $('img').width(300);
                       $('img').height(300);
                       $('img').css('margin', '10px');
                       $('.container').height('100%');
                   }


               });

           }

           i++;

       });




   });
   //});
