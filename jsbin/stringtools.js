/* String tools for generating all shorts of random strings... */
stringtools = {
	randomString: function(length=10) {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(0, length);
	}
};