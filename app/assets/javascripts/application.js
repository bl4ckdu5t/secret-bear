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
$(function(){
	$('pre').click(function(){
		fnSelect('code');
	})
	$('#queryForm').submit(function(e){
		e.preventDefault();
		var input = $('[type="url"]').val();
		if(input){
			$.ajax({
				type: 'POST',
				data: 'long='+input,
				url: 'process'
			}).done(function(response){
				console.log(response.url);
				$('#code').fadeIn(function(){
					$(this).text(response.url)
				});
			}).fail(function(response){
				console.log('failed');
			});
		}
	});
});

function fnSelect(objId) {
	fnDeSelect();
	if (document.selection) {
	  var range = document.body.createTextRange();
	  range.moveToElementText(document.getElementById(objId));
	  range.select();
	}
	else if (window.getSelection) {
	  var range = document.createRange();
	  range.selectNode(document.getElementById(objId));
	  window.getSelection().addRange(range);
	}
}

function fnDeSelect() {
  if (document.selection) document.selection.empty(); 
	else if (window.getSelection)
    window.getSelection().removeAllRanges();
}