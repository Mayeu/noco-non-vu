$(document).ready(function() {
   console.log("DEBUG: page ready, gonna modify this.");

   // Override the append function to emit and "append" event when used
   (function($) {
      var origAppend = $.fn.append;

      $.fn.append = function () {
         return origAppend.apply(this, arguments).trigger("append", this);
      };
   })(jQuery);

   var button_nonvu = '<div id="tags-filtre" class="mod-1"><span id="filtre-nv" class="tag filtre disabled tags-list-all" onClick="toggle_nonvu()">Non vu</span></div>';

   // Add a "Non vu" button
   $('#tags-editeur').before(button_nonvu);

   // Avoid the disabling button
   $('#editeur-nol').addClass('filtre-nv');
});

function hide_read_items() {
   $('.mark-read').closest('.item').hide();
}

function show_read_items() {
   $('.mark-read').closest('.item').show();
}

function toggle_nonvu() {
   if( $('#filtre-nv').hasClass('disabled') ) {
      hide_read_items()

      // Bind the append event to the item container, and hide all read items when
      // append is emitted
      $("#module-1-0-0-0-0").bind("append", function() {
         hide_read_items()
         //console.log("DEBUG: hidded!");
      });

      // remove disabled and switch to enabled
      $('#filtre-nv').removeClass('disabled').addClass('enabled');
   }
   else {
      // Unbind the append event to the item container, and hide all read items when
      $("#module-1-0-0-0-0").unbind("append");

      show_read_items();

      // remove enabled and switch to disable
      $('#filtre-nv').removeClass('enabled').addClass('disabled');
   }
}
