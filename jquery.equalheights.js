/*global jQuery */
(function ($) {
    /* A better equal heights plugin for jQuery
     * Version 0.1
     *
     * Copyright (c) 2011 Luminosity Group
     */
    $.fn.equalheights = function (options) {
        var container = this;

        defaults = {
            selector: '.column',
            animate: false,
            duration: 1000
        };

        /* Merge options with defaults */
        settings = $.extend(true, {}, defaults, options);

        return $(container).each(function () {
            var target = 0, height;

            $(settings.selector, this).each(function () {
                height = $(this).height();
                console.log(height);
                if (height > target)
                    target = height;
            });

            $(settings.selector, this).each(function () {
                if (settings.animate) {
                    $(this).animate({'height': target}, settings.duration, 'linear');
                } else {
                    $(this).css({'height': target});
                }
            });
        });
    };
}(jQuery));
