/*
*	@name							Twitter Bootstrap Show Password
*	@descripton						
*	@version						0.5
*	@requires						Jquery 1.8.1
*
*	@author							Jeroen van Meerendonk
*	@author-email					jeroen@cyneek.com
*	@author-website					http://cyneek.com
*
*	@license						MIT License - http://www.opensource.org/licenses/mit-license.php
*/

(function($){
	$.fn.extend({
		showPassword: function() {	

			var input_password	= $(this);

			// Create the wrap and append the icon
			input_password.wrap('<div class="input-append" />').after('<span class="add-on"><i class="icon-eye-open"></i></span>');

			var icon_password	= input_password.next().find('.icon-eye-open');

			// Add the cursor and the tooltip
			icon_password.css('cursor', 'help').tooltip();

			input_password.on({
				keyup	: function() {
					icon_password.attr('data-original-title', $(this).val());
				}
			});

        }
    });
})(jQuery);