// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2.min
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var ShortURL = new function() {
  var _alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_',
  _base = _alphabet.length;
  this.encode = function(num) {
    var str = '';
    while (num > 0) {
      str = _alphabet.charAt(num % _base) + str;
      num = Math.floor(num / _base);
    }
    return str;
  };
  this.decode = function(str) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
      num = num * _base + _alphabet.indexOf(str.charAt(i));
    }
    return num;
  };
};
$(function(){
	$('pre').focus(function(){
		var $this = $(this);
		$this.select();
		$this.mouseup(function() {
      // Prevent further mouseup intervention
      $this.unbind("mouseup");
      return false;
    });
	});
	console.log(ShortURL('1'));
});