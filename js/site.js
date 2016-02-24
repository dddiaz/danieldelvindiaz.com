$(function(){
    //Formspree Setup
    var $contactForm = $('#contact-form');
    $contactForm.submit(function(e) {
    	e.preventDefault();
    	$.ajax({
    		url: '//formspree.io/daniel.delvin.diaz@gmail.com',
    		method: 'POST',
    		data: $(this).serialize(),
    		dataType: 'json',
    		beforeSend: function() {
    			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    		},
    		success: function(data) {
    			$contactForm.find('.alert--loading').hide();
    			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
    		},
    		error: function(err) {
    			$contactForm.find('.alert--loading').hide();
    			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
    		}
    	});
    });
    //Hide Certain Divs if screen is cmall
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (w>961){
        $("#small-screen-button-footer").hide();
    }else{
        $("#large-screen-button-footer").hide();
    }
});
