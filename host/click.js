(function($) {
    $(function() {
        function callBkg(url) {
            $.ajax({
                type: 'GET',
                url: url
            });
        }

        $('#hall').click(function() {
            var checkbox = $(this);
            var label = $('.hall-text');

            
            label.text(checkbox.is(':checked') ? "Hall on" : "Hall off");
            
            if (label.text() == "Hall off") {
                callBkg("/?hallOff");
            } else if (label.text() == "Hall on") {
                callBkg("/?hallOn");
            }
        });
   /*     $('#hall-front').click(function() {
            var checkbox = $(this);
            var label = $('.hall-front-text');

            
            label.text(checkbox.is(':checked') ? "Hall Front on" : "Hall Front off");
            
            if (label.text() == "Hall Front off") {
                callBkg("/?frontOff");
            } else if (label.text() == "Hall Front on") {
                callBkg("/?frontOn");
            }
        });
        $('#hall-back').click(function() {
            var checkbox = $(this);
            var label = $('.hall-back-text');

            
            label.text(checkbox.is(':checked') ? "Hall Back on" : "Hall Back off");
            
            if (label.text() == "Hall Back off") {
                callBkg("/?backOff");
            } else if (label.text() == "Hall Back on") {
                callBkg("/?backOn");
            }
        }); */
        $('#walk').click(function() {
            var checkbox = $(this);
            var label = $('.walk-text');

            
            label.text(checkbox.is(':checked') ? "Walk on" : "Walk off");
            
            if (label.text() == "Walk off") {
                callBkg("/?walkOff");
            } else if (label.text() == "Walk on") {
                callBkg("/?walkOn");
            }
        });
        $('#lamp').click(function() {
            var checkbox = $(this);
            var label = $('.lamp-text');
            
            label.text(checkbox.is(':checked') ? "Lamp Post on" : "Lamp Post off");
            
            if (label.text() == "Lamp Post off") {
                callBkg("/?postOff");
            } else if (label.text() == "Lamp Post on") {
                callBkg("/?postOn");
            }
        });
    });
})(jQuery);