/* String tools for generating all shorts of random strings... */
stringtools = {
	randomString: function(length=10, symbols=false,costum_chars_input="") {
		var random_string = "";
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		if (symbols) chars += "!@#$%^&*";

		if (costum_chars_input != "") chars = costum_chars_input;

		for (var i = 0; i < length; i++) {
			random_string += chars.charAt(Math.floor(Math.random() * chars.length));
		}

		return random_string;
	}
};