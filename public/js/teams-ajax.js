$(document).ready(function() {
  $('.delete-link').on('click', function(e) {
e.preventDefault();
  var teamElement = $(this);
  var teamUrl = teamElement.attr('href');
    
$.ajax({
    method: 'DELETE',
    url: teamUrl
}).done(function(data) {
    window.location = '/teams';
   });
});

$('.put-form').on('submit', function(e) {
     e.preventDefault();
     var teamElement = $(this);
     var teamUrl = teamElement.attr('action');
     var teamData = teamElement.serialize();
  
$.ajax({
      method: 'PUT',
      url: teamUrl,
      data: teamData
}).done(function(data) {
       window.location = '/teams';
     });
  });
  });
