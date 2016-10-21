(function($) {
    $(function() {
        $('a')  
        
        $('a').click(function() {
            var link = $(this);
        
            $.ajax({
                type: 'GET',
                url: link.prop('href'),
                success: function(html, textStatus) {
                    var text = link.text();
                    link.text('Success!');
                    
                    setTimeout(function() {
                        link.text(text);
                    }, 3000);
                }
            });

            return false;
        });
    });
})(jQuery);