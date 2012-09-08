/*
*	@name							Twitter Bootstrap Show Password
*	@descripton						
*	@version						0.2
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
		showPassword: function() {

			

			var input_password	= $(this);



			//create the icon and assign 
			var icon_password = $('<span class="add-on"><i class="icon-eye-open"></i></span>');
			icon_password.css('cursor', 'help').autorefreshtooltip();
			
			input_password.on({
				input	: function() {
					icon_password.attr('data-original-title', $(this).val());
					icon_password.autorefreshtooltip('autoRefresh');
				}
			});
			
			// Create the wrap and append the icon
			input_password.wrap('<div class="input-append" />').after(icon_password);

        }
    });
})(jQuery);