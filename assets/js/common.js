jQuery(document).ready(function($) {

    //to top
    $().UItoTop({ easingType: 'easeOutQuart' });

    (function() {

        var $menu = $('nav'),
            optionsList = '';

        $menu.find('li').each(function() {
            var $this   = $(this),
                $anchor = $this.children('a'),
                selected  = $this.hasClass('active') ? 'selected' : '';
                indent  = '';


            $(".nav li").parent().addClass("bold");


            optionsList += '<option value="' + $anchor.attr('href') + '" ' + selected + '>' + indent + ' ' + $anchor.text() + '</option>';
        }).end()
            .after('<select class="selectmenu">' + optionsList + '</select>');

        $('select.selectmenu').on('change', function() {
            window.location = $(this).val();
        });

    })();

});