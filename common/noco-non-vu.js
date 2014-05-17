/*
 * Get ready
 */
$(document).ready(function() {
   //console.log("DEBUG: page ready, gonna modify this.");

   // Override the original append function to emit and "append" event when
   // used
   append_override();

   // Add a "Non vu" button
   add_non_vu_button();
});

/*
 * Override the normal .append() function to emit a append event.
 */
function append_override() {
   (function($) {
      var original_append = $.fn.append;

      $.fn.append = function () {
         return original_append.apply(this, arguments).trigger("append", this);
      };
   })(jQuery);
}

/*
 * Create a "Non vu" button
 */
function add_non_vu_button() {
   // Definition of the button
   var button_nonvu = '<div id="tags-filtre" class="mod-1"><span id="filtre-nv" class="tag filtre disabled tags-list-all" onClick="toggle_nonvu()">Non vu</span></div>';

   // Add it just before the editors
   $('#tags-editeur').before(button_nonvu);

   // Make the other button aware of it
   inject_non_vu_button();
}

/*
 * Inject non vu button
 *
 * The system is a little weird, basically every button have a list of class in
 * their own class, representing the buttons that are compatible with it.
 *
 * i.e.: if you push "Magazine", "Action" will be disable because their is no
 * "Magazine" about "Action"
 *
 * This function made all the button aware that "Non vu" exist, and that it is
 * always compatible with everything
 *
 */
function inject_non_vu_button() {
   //Inject everywhere in all tags
   $('#tags-editeur, #tags-type, #tags-theme').children().addClass('filtre-nv');
}

/*
 * Hide items already read
 */
function hide_read_items() {
   $('.mark-read').closest('.item').hide();
}

/*
 * Show items already read
 */
function show_read_items() {
   $('.mark-read').closest('.item').show();
}

function toggle_nonvu() {
   if( $('#filtre-nv').hasClass('disabled') ) {
      hide_read_items();

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

