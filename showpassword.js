/*
*	@name							Twitter Bootstrap Show Password
*	@descripton						
*	@version						0.9
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

!function ($) {

	"use strict"; // jshint ;_;

	$.fn.extend({
		showPassword: function (options) {

			var defaults	= {
				white	: false,
				message	: 'Click here to see/hide your password'
			}, settings, input_password, input_normal, display, icon_white, icon_password;

			settings		= $.extend({}, defaults, options);

			input_password	= $(this);
			icon_white		= '';

			if (settings.white) {
				icon_white	= ' icon-white';
			}

			// Get the same display property
			display			= input_password.css('display');

			// Create the new field
			input_normal	= $('<input type="text">').css('width', input_password.css('width')).hide();

			// Create the icon and assign 
			icon_password = $('<span tabindex="100" title="' + settings.message + '" class="add-on"><i class="icon-eye-open' + icon_white + '"></i></span>').css('cursor', 'pointer').tooltip();
			input_password.on({
				input	: function () {
					$(this).next().val($(this).val());
				}
			});
			input_normal.on({
				input	: function () {
					$(this).prev().val($(this).val());
				}
			});
			icon_password.on({
				click	: function () {
					if (input_password.is(':visible')) {
						input_password.hide();
						input_normal.css('display', display);
					} else {
						input_normal.hide();
						input_password.show();
					}

					$(this).parent().find('input').toggle();
					$(this).find('i').toggleClass('icon-eye-open').toggleClass('icon-eye-close');
				}
			});
			// Create the wrap and append the icon
			input_password.wrap('<div class="input-append" />').after(icon_password).after(input_normal);

		}
	});
	
}(window.jQuery);