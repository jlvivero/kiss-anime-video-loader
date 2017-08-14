//TODO: only do the checks on kissanime and maybe other video streaming sites
//TODO: add functionality for openload and other streaming sites
//TODO: add a way to change options like asking before redirecting or not

var kiss = function() {
  var object2 = document.getElementById("divContentVideo");
  if(object2) {
    var object = object2.innerHTML;
  }
  if(object) {
    var y = object.split('"');
    var z = '';
    y.forEach(function(value) {
      if(value[0] == 'h' && value[1] == 't') {
        z = value;
      }
    });
    if(window.confirm('If you click "ok" you will be redirected to the standalone video. Cancel will load this website')) {
      window.location.href = z;
      return true;
    }
  }
  return false;
}

var rapid = function() {
  object = document.getElementById("home_video");
  if(object) {
    object = object.getElementsByClassName('jw-video jw-reset');
    if(object) {
      window.location.replace(object[0].src);
    }
  }
}


kiss();
rapid();
