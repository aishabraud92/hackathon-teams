console.log('Hello');

$('.delete-link').on('click', function(e) {
  e.preventDefault();
  var teamElement = $(this);
  var teamUrl = teamElement.attr('href');
  $.ajax({
    method: 'DELETE',
    url: teamUrl
  }).done(function(data) {
    console.log(data);
    teamElement.remove();
    window.location = '/teams';
  });
});

$.delete = function(url, data, callback, type){

  if ( $.isFunction(data) ){
    type = type || callback,
        callback = data,
        data = {}
  }

  return $.ajax({
    url: url,
    type: 'DELETE',
    success: callback,
    data: data,
    contentType: type
  });
}
