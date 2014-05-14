$(document).ready(function() {
   //console.log("DEBUG: page ready, gonna modify this.");

   // Override the append function to emit and "append" event when used
   (function($) {
      var origAppend = $.fn.append;

      $.fn.append = function () {
         return origAppend.apply(this, arguments).trigger("append", this);
      };
   })(jQuery);

   // Bind the append event to the item container, and hide all read items when
   // append is emitted
   $("#module-1-0-0-0-0").bind("append", function() {
      $('.mark-read').closest('.item').hide();
      //console.log("DEBUG: hidded!");
   });
});
