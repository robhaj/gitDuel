function setCharAt(str,index,chr) {
  if(index > str.length-1) {return str;}
  return str.substr(0,index) + chr + str.substr(index+1);
}

// ajax request function
function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}

//append loading gif function
function loadingGif(id) {
  var styles = '<div id="loader"><img src="assets/img/loader.gif" alt="loading..."></div>';
  return $(id).html(styles);
}

//audio events function
function audioEvents() {
  $('.glyphicon-volume-off').on('click', function(){
    $('.audio').prop("volume", 0);
  });

  $('.glyphicon-volume-up').on('click', function(){
    $('.audio').prop("volume", 1);
  });
}

//bullethole timings
function appendBullets(id){
  var bullet = '<img src="assets/img/bullethole.png"></img>';
  return $(id).html(bullet);
}
