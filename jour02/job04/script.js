document.addEventListener('keydown', function(e) {
    var key = e.key;
    if (key.length === 1 && key.match(/[a-z]/i)) {
      var textarea = document.getElementById('keylogger');
      if (document.activeElement === textarea) {
        textarea.value += key + key;
      } else {
        textarea.value += key;
      }
    }
  });