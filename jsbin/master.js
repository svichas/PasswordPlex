show_options_btn = document.getElementById("show-options");
show_options_btn.onclick = function(e) {
	e.preventDefault();
	option_list = document.querySelector(".option-list");
	option_list.classList.toggle("show-block");
}


/* Generate password */
gen_btn = document.getElementById("generate_password");
gen_btn.addEventListener("click", function() {
	showResult(stringtools.randomString(22));
});


/* Showing result */
function showResult(result="") {
	result_panel = document.getElementById("result-panel");
	result_panel.innerHTML = result;
}
