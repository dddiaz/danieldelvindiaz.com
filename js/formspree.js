
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
            },
            success: function(data) {
                //$contactForm.find('#contact-form').hide();
                $(this).closest('form').find("input[type=text], textarea").val("");
                $contactForm.append('<div class="">Message sent! I will get back to you shortly!</div>');
            },
            error: function(err) {
                $contactForm.append('<div class=""> Dang it, there was an error. Please try again.</div>');
            }
        });
    });
});
