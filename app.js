


$(document).ready(function(){


	   
	    var facebook_token = "EAACEdEose0cBAPfBxKUwAOZCbh7oYTXHQRlEn38swI5mcZA4gWbwG3VuKeYO5rQbiCkGTr2RIX88GvWGuxGkc3zYWZBISSvls4EsNmDBoeaC2KZAjyimV5fcFuyZACCU1rSQMszH5oWyxlALxegqW1zRep8M6cXdDTXfRwenHHZBrxHs3GEhCuYac8E2bSIwsZD";

      function getFeed()
        {
           $.getJSON('https://graph.facebook.com/me?fields=picture&type=normal&access_token=' + facebook_token,function(fbPicture){
                   var url = fbPicture.picture.data.url;
                   
        	
	    $.getJSON('https://graph.facebook.com/me/feed?fields=from,story,name,description,picture&type=large&access_token=' + facebook_token, function(fbResults){
             var username = fbResults.data[0].from.name;
              
             $("#profilename").text(username);
             $('#headingtitle').text(username);
             $('#heading').text(username);
             $('#heading1').text(username);
             
             $.each(fbResults.data,function(){
                       $("#postimg").attr('src',this.picture);
                    

                      $('<div/>',{
                          'id' : 'postcontent',
                          'class' : 'post-content'

                      }).appendTo('#post').append( $('<img/>',{
                          'class' : 'profile-photo-md pull-left',
                          'id' : 'profileimg',
                          'src' : url
                        })).append(
                         $('<div/>',{
                          'class' : 'user-info',
                          'id' : 'userinfo'
                         }).append(
                             $('<a/>',{
                              'href' : 'index.html',
                              'class' : 'profile-link'
                             }).text(this.story)
                             )).append(
                        $('<img/>',{
                          'class' : 'img-responsive post-image',
                          'id' : 'postimg',
                          'src' : this.picture
                        })
                      ).append($('<div/>',{
                        'class' : 'post-container',
                        'id' : 'postcontainer'
                      })).append($('<div/>',{
                        'class' : 'post-detail',
                        'id' : 'post-detail'
                      }).append(
                         $('<div/>',{
                          'class' : 'user-info',
                          'id' : 'userinfo'
                         }).append(
                             $('<a/>',{
                              'href' : 'index.html',
                              'class' : 'profile-link'
                             }).text(this.name)

                         )

                      ).append( $('<div/>',{

                          'class' : 'line-divider'
                        })).append(
                          $('<div/>',{
                            'class' : 'post-text',
                             'id' : 'posttext'
                          }).text(this.description)
                      )

                      );
                     
             });


	    });

       });

          }


          function getAbout()
          {
                
          	  $.getJSON('https://graph.facebook.com/me?access_token=' + facebook_token, function(fbResults2){
        

                    var school = fbResults2.education[0].school.name;
                    var college = fbResults2.education[4].school.name;

                    var hometown = fbResults2.hometown.name;

                    var favorite_athlettes = fbResults2.favorite_athletes;

                    var languages = fbResults2.languages;

                    var bio = fbResults2.bio

                   $('#school').text(school);

                   $('#college').text(college);

                   $('#hometown').text(hometown);

                   $('#bio').text(bio);

                   $.each(favorite_athlettes,function(){
                       $('<div/>',{
                        'class' : 'organization',
                        'id' : 'orgdiv'
                       }).appendTo('#favoriteathlettes');


                       $('#orgdiv').append($('<div/>',{
                        'class' : 'work-info',
                        'id' : 'workinfo'
                       })
                       );


                       $('#workinfo').append($('<h5/>',{
 
                       }).text("Person"));

                         $('#workinfo').append($('<p/>',{

                         }).text(this.name));
                      });


                  

                   $.each(languages,function(){

                       $('#aboutcontentblock ul').append("<li> <a href='#'>"+this.name+"<a></li>");
                    });
               });

          }

          function getProfilePhoto()
          {
             $.getJSON('https://graph.facebook.com/me?fields=picture,cover&type=normal&access_token=' + facebook_token,function(fbPicture){
                   var urll = fbPicture.picture.data.url;

                   var coverpic = fbPicture.cover.source;

                $("#profilepic").attr('src',urll);
                $('#mainimg').attr('src',urll);
                $('#mainimg1').attr('src',urll);
                $('#headingimg').attr('src',urll).attr('width' , 30).attr('height' , 32);

                $('.timeline-cover').css('background-image','url(' + coverpic + ')')
                   
        });
          	    


              

          }

          $('#headingtitle').on('click',function(){
           
             $('#headingtitle').attr('href','about.html');
          });

           
          getFeed();
          getAbout();
          getProfilePhoto();




	});
