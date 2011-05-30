/*
* File Field Mask  v0.0.2
 
* Requires jQuery JavaScript Library >= v1.4.2
* http://jquery.com/
 
* Copyright 2011, Nick Treadway
* Dual licensed under the MIT or GPL Version 2 licenses.
* Http://yeti-media.com
* Date: Fri May 30 2011
*/
(function($) {
// Masks the html file input[type=file] so you can style it with your own look and feel
$.fn.file_field_mask = function(options) {
  var opts = $.extend({}, $.fn.file_field_mask.defaults, options);

  return this.each(function() {
    var $this = $(this);
    
    //Create references to the options
    var selector = opts.selector;
    var input = opts.input;
    var klass = opts.klass;
    
    
    // Setup our fake file field masks
       var t = $this.find('label').after('<div id="fake-file-field"><div class="input"></div></div>');
       $('#fake-file-field').addClass(klass);
    
    
    // Charge our event
    $(input).each(function(){
      $(this).change(function(e){
      var target = $(e.target);
      target.siblings('#fake-file-field').children().html(target.val());
      });
    });

  });
  // private function for debugging
  function debug($obj) {
    if (window.console && window.console.log) {
      window.console.log($obj);
    }
  }
};

// default options
$.fn.file_field_mask.defaults = {
  input: 'input[type=file]',
  klass: 'image'
};

})(jQuery);
