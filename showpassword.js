/*
*	@name							Twitter Bootstrap Show Password
*	@descripton						
*	@version						0.7
*	@requires						Jquery 1.8.1
*
*	@author							Jeroen van Meerendonk
*	@author-email					jeroen@cyneek.com
*	@author-website					http://cyneek.com
* 
*	@author							Joseba Juániz
*	@author-email					joseba@cyneek.com
*	@author-website					http://cyneek.com
*	@licens							MIT License - http://www.opensource.org/licenses/mit-license.php
*/
(function($){
	$.fn.extend({
		showPassword: function(options) {

			var defaults	= {
				white	: false
			}
			var settings	= $.extend({}, defaults, options);

			var input_password	= $(this);
			var icon_white		= '';

			if (settings.white)
			{
				var icon_white	= ' icon-white';
			}

			//create the icon and assign 
			var icon_password = $('<span tabindex="100" class="add-on"><i class="icon-eye-open' + icon_white + '"></i></span>').css('cursor', 'help').tooltip({trigger:'click'});
			
			input_password.on({
				input	: function() {
					icon_password.attr('data-original-title', $(this).val());
				}
			});
			
			// Create the wrap and append the icon
			input_password.wrap('<div class="input-append" />').after(icon_password);

		}
	});
})(jQuery);