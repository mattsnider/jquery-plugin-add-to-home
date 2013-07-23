(function ($) {
  $.fn.showAddToHome = function (oOptions) {
    // This is the easiest way to have default options.
    var iWidth = $(window).width(),
    iTriangleDiameter = oOptions ? oOptions.triangleDiameter || 20 : 20,
    iHalfDiameter = iTriangleDiameter / 2,
    oSettings = $.extend(true, {
      arrowStyles: {
        borderLeft: iHalfDiameter + 'px solid transparent',
        borderRight: iHalfDiameter + 'px solid transparent',
        borderTop: iHalfDiameter + 'px solid black',
        bottom: '0',
        height: 0,
        position: 'fixed',
        width: 0
      },
      elStyles: {
        // These are the defaults.
        backgroundColor: 'black',
        borderRadius: '10px',
        bottom: iHalfDiameter + 'px',
        color: 'white',
        position: 'fixed',
        width: '200px',
        zIndex: 1000
      },
      pStyles: {
        margin: 0,
        padding: '0.5em',
        textAlign: 'center'
      },
      html: '<p>Add To Home</p>'
    }, oOptions),
    el, elArrow, elBody, iMargin;

    if (window.navigator.standalone === false) {
      elBody = $('body');
      el = $(document.createElement('div')).appendTo(elBody);

      el.html(oSettings.html);
      el.css(oSettings.elStyles);

      el.find('p').css(oSettings.pStyles);
      elArrow = $(document.createElement('div')).appendTo(elBody).css(
        oSettings.arrowStyles);

      // center the message
      iMargin = (iWidth - el.width()) / 2;
      el.css({
        marginLeft: iMargin + 'px',
        marginRight: iMargin + 'px'
      });

      // center the arrow
      iMargin = (iWidth - iTriangleDiameter) / 2;
      elArrow.css({
        marginLeft: iMargin + 'px',
        marginRight: iMargin + 'px'
      });

      function dismissalCallback(e) {
        el.remove();
        elArrow.remove();
        $(this).off('click', dismissalCallback).off('touch', dismissalCallback);
      }

      $(document).on('click', dismissalCallback).on('touch', dismissalCallback);
    }
  }
}(jQuery));