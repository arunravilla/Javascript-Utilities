/*
* Author: Arun Prasad
* @param {String} name
* @param {String} value
* @param {int} days
*/

;(function(){
  cookies = {
    create: function (name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toString();
      } else {
        var expires = '';
      }
      document.cookie = name + '=' + value + expires + "; path=/";
    },
    read: function (name /* cookie name */) {
      var name = name + "=";
      var cookieList = document.cookie.split(";");
      for (var i = 0; i < cookieList.length; i++) {
        var cookie = cookieList[i];
        while (cookie.charAt(0) == " ") cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(name) === 0) return cookie.substring(name.length, cookie.length);
      }
      return null;
    },
    delete: function (name /* cookie name */) {
      // creating new cookie with empty value will be delete the cookie
      cookies.create(name, '', -1);
    }
  }
})();