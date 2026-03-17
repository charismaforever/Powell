(function($) { "use strict";
  $(".container").fitVids();
})(jQuery);

(function($) { "use strict";
  $('.vimeo a,.youtube a').click(function(e) {
    e.preventDefault();
    var videoLink = $(this).attr('href');
    var PlaceV = $(this).parent();
    if ($(this).parent().hasClass('youtube')) {
      $(this).parent().wrapAll('<div class="video-wrapper">');
      $(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
    } else {
      $(this).parent().wrapAll('<div class="video-wrapper">');
      $(PlaceV).html('<iframe src="' + videoLink + '?title=0&byline=0&portrait=0&autoplay=1&color=cfa144" width="500" height="281" frameborder="0"></iframe>');
    }
  });
})(jQuery);
