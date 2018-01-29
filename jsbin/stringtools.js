/* String tools for generating all shorts of random strings... */
stringtools = {
	randomString: function(length=10, symbols=false) {
		var random_string = "";
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		if (symbols) chars += "!@#$%^&*";

		for (var i = 0; i < length; i++) {
			random_string += chars.charAt(Math.floor(Math.random() * chars.length));
		}

		return random_string;
	}
};