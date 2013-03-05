# Twitter Bootstrap Show Password

It's a very simple jQuery plugin that shows the content of a password input, so you don't need to add a "repeat your password" annoying input.


## Requirements

* [Twitter Bootstrap](http://twitter.github.com/bootstrap/index.html) 2.1.0 and the [Tooltip plugin](http://twitter.github.com/bootstrap/javascript.html#tooltips).
* [jQuery](http://jquery.com) 1.9.0.


## Usage

Add the JS file.

	<script src="showpassword.js"></script>

Create a normal Twitter Bootstrap input field for the password.

	<div class="control-group">
		<label class="control-label" for="inputPassword">Password</label>
		<div class="controls">
			<input type="password" id="inputPassword" placeholder="Password">
		</div>
	</div>

And then, call the plugin in the password input.

	$('#inputPassword').showPassword();

You can define the color of the icon (black by default) or a custom tooltip text passing the options:

	$('#inputPassword').showPassword({
		white	: true,
		message	: 'Click here, dummie!'
	});


## Change log

### 0.9.5
* Bug solving (changed display method and defined the width of the new input).

### 0.9
* Code refactoring
* Switched to inputs instead of a tooltip.
* Added option 'message' to show a custom text in the tooltip.

### 0.7
* Added the icon color option.

### 0.6
* Changed some callbacks and added the "click" trigger.

### 0.5
* First commit. Yay.

## Future changes

* Add options like trigger, delay, etc.