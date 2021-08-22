(function($){
    
    $.fn.passwordstrength = function(options) {
        
        // Options
        var settings = $.extend({
            'minlength': 6,
            'number'   : true,
            'lowercase'  : true,
            'uppercase'  : true,
            'special'  : true,
            'labels'   : {
                'general'   : 'The password must have:',
                'minlength' : 'At least 6 characters',
                'number'    : 'At least one number',
                'lowercase'   : 'At least one lowercase letter',
                'uppercase'   : 'At least one uppercase letter',
                'special'   : 'At least one special character'
            }
        }, options);

        
        return this.each(function(){
            
            var $this = $(this);

            // HTML
            $('<div id="passwordstrength-wrap" />').insertAfter($this);
            $('#passwordstrength-wrap').append('<strong>'+settings.labels.general+'</strong><ul></ul>');

            if (settings.minlength > 0)
                $('#passwordstrength-wrap ul').append('<li id="length">'+settings.labels.minlength.replace('{{minlength}}', settings.minlength)+'</li>');
            if (settings.number)
                $('#passwordstrength-wrap ul').append('<li id="pnum">'+settings.labels.number+'</li>');
            if (settings.lowercase)
                $('#passwordstrength-wrap ul').append('<li id="lowercase">'+settings.labels.lowercase+'</li>');
            if (settings.uppercase)
                $('#passwordstrength-wrap ul').append('<li id="uppercase">'+settings.labels.uppercase+'</li>');
            if (settings.special)
                $('#passwordstrength-wrap ul').append('<li id="spchar">'+settings.labels.special+'</li>');


            $this.on('focus keyup', function() {
                var value = $this.val();

                $('#passwordstrength-wrap').fadeIn(400);

                // password length
                if (value.length > 0)
                {
                    if (value.length >= settings.minlength)
                        $('#passwordstrength-wrap #length').addClass('valid');
                    else
                        $('#passwordstrength-wrap #length').removeClass('valid');
                }
         
                // at least 1 digit
                if (settings.number)
                {
                    if (value.match(/\d/))
                        $('#passwordstrength-wrap #pnum').addClass('valid');
                    else
                        $('#passwordstrength-wrap #pnum').removeClass('valid');
                }
         
                // at least 1 lowercase
                if (settings.lowercase)
                {
                    if (value.match(/[a-z]/))
                        $('#passwordstrength-wrap #lowercase').addClass('valid');
                    else
                        $('#passwordstrength-wrap #lowercase').removeClass('valid');
                }

                // at least 1 uppercase
                if (settings.uppercase)
                {
                    if (value.match(/[A-Z]/))
                        $('#passwordstrength-wrap #uppercase').addClass('valid');
                    else
                        $('#passwordstrength-wrap #uppercase').removeClass('valid');
                }
         
                // at least 1 special character
                if (settings.special)
                {
                    if (value.match(/[^\w]/))
                        $('#passwordstrength-wrap #spchar').addClass('valid');
                    else
                        $('#passwordstrength-wrap #spchar').removeClass('valid');
                }
            });


            $this.blur(function () {
                $('#passwordstrength-wrap').fadeOut(400);
            });
        });
    }

})(jQuery);

(function($){
    
    $.fn.passwordstrength2 = function(options) {
        
        // Options
        var settings = $.extend({
            'minlength': 6,
            'number'   : true,
            'lowercase'  : true,
            'uppercase'  : true,
            'special'  : true,
            'labels'   : {
                'general'   : 'The password must have:',
                'minlength' : 'At least 6 characters',
                'number'    : 'At least one number',
                'lowercase'   : 'At least one lowercase letter',
                'uppercase'   : 'At least one uppercase letter',
                'special'   : 'At least one special character'
            }
        }, options);

        
        return this.each(function(){
            
            var $this = $(this);

            // HTML
            $('<div id="passwordstrength-wrap-2" />').insertAfter($this);
            $('#passwordstrength-wrap-2').append('<strong>'+settings.labels.general+'</strong><ul></ul>');

            if (settings.minlength > 0)
                $('#passwordstrength-wrap-2 ul').append('<li id="length">'+settings.labels.minlength.replace('{{minlength}}', settings.minlength)+'</li>');
            if (settings.number)
                $('#passwordstrength-wrap-2 ul').append('<li id="pnum">'+settings.labels.number+'</li>');
            if (settings.lowercase)
                $('#passwordstrength-wrap-2 ul').append('<li id="lowercase">'+settings.labels.lowercase+'</li>');
            if (settings.uppercase)
                $('#passwordstrength-wrap-2 ul').append('<li id="uppercase">'+settings.labels.uppercase+'</li>');
            if (settings.special)
                $('#passwordstrength-wrap-2 ul').append('<li id="spchar">'+settings.labels.special+'</li>');


            $this.on('focus keyup', function() {
                var value = $this.val();

                $('#passwordstrength-wrap-2').fadeIn(400);

                // password length
                if (value.length > 0)
                {
                    if (value.length >= settings.minlength)
                        $('#passwordstrength-wrap-2 #length').addClass('valid');
                    else
                        $('#passwordstrength-wrap-2 #length').removeClass('valid');
                }
         
                // at least 1 digit
                if (settings.number)
                {
                    if (value.match(/\d/))
                        $('#passwordstrength-wrap-2 #pnum').addClass('valid');
                    else
                        $('#passwordstrength-wrap-2 #pnum').removeClass('valid');
                }
         
                // at least 1 lowercase
                if (settings.lowercase)
                {
                    if (value.match(/[a-z]/))
                        $('#passwordstrength-wrap-2 #lowercase').addClass('valid');
                    else
                        $('#passwordstrength-wrap-2 #lowercase').removeClass('valid');
                }

                // at least 1 uppercase
                if (settings.uppercase)
                {
                    if (value.match(/[A-Z]/))
                        $('#passwordstrength-wrap-2 #uppercase').addClass('valid');
                    else
                        $('#passwordstrength-wrap-2 #uppercase').removeClass('valid');
                }
         
                // at least 1 special character
                if (settings.special)
                {
                    if (value.match(/[^\w]/))
                        $('#passwordstrength-wrap-2 #spchar').addClass('valid');
                    else
                        $('#passwordstrength-wrap-2 #spchar').removeClass('valid');
                }
            });


            $this.blur(function () {
                $('#passwordstrength-wrap-2').fadeOut(400);
            });
        });
    }

})(jQuery);

function toggl1(){
    let password1 = document.getElementById("pwd1");
    let eye1 = document.getElementById("toggle1");

    if(password1.getAttribute("type") == "password"){
        password1.setAttribute("type","text");
        eye1.style.color = "#0be881";
    }
    else{
        password1.setAttribute("type","password");
        eye1.style.color = "#808080";
    }
}

function toggl2(){

    let password2 = document.getElementById("pwd2");
    let eye2 = document.getElementById("toggle2");

    if(password2.getAttribute("type") == "password"){
        password2.setAttribute("type","text");
        eye2.style.color = "#0be881";
    }
    else{
        password2.setAttribute("type","password");
        eye2.style.color = "#808080";
    }
}

function toggl3(){
    let password1 = document.getElementById("pwd1");
    let eye1 = document.getElementById("toggle3");

    if(password1.getAttribute("type") == "password"){
        password1.setAttribute("type","text");
        eye1.style.color = "#0be881";
    }
    else{
        password1.setAttribute("type","password");
        eye1.style.color = "#808080";
    }
}

function toggl4(){
    let password1 = document.getElementById("id_new_password1");
    let eye1 = document.getElementById("toggle4");

    if(password1.getAttribute("type") == "password"){
        password1.setAttribute("type","text");
        eye1.style.color = "#0be881";
    }
    else{
        password1.setAttribute("type","password");
        eye1.style.color = "#808080";
    }
}

function toggl5(){
    let password1 = document.getElementById("id_new_password2");
    let eye1 = document.getElementById("toggle5");

    if(password1.getAttribute("type") == "password"){
        password1.setAttribute("type","text");
        eye1.style.color = "#0be881";
    }
    else{
        password1.setAttribute("type","password");
        eye1.style.color = "#808080";
    }
}