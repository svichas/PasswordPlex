gen_btn = document.getElementById("generate_password");
gen_btn.addEventListener("click", function() {
	showResult(stringtools.randomString(22));
});

function showResult(result="") {
	result_panel = document.getElementById("result-panel");
	result_panel.innerHTML = result;
}


stringtools = {
	randomString: function(length=10) {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(0, length);
	}
};