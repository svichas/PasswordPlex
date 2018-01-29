var password_history = [];


/* Generate password */
gen_btn = document.getElementById("generate_password");
gen_btn.addEventListener("click", function() {

	symbols = document.getElementById("symbols_input").checked;
	length = parseInt(document.getElementById("length_input").value);
	password_count = document.getElementById("password_count_input").value;
	costum_chars_input = document.getElementById("costum_chars_input").value;

	if (!password_count || password_count < 1) password_count = 1;
	if (!length || length < 1) length = 10;

	content = "";
	for (i=0;i<password_count;i++) {
		if (content != "") content += "<br /><br />"; 
		content += stringtools.randomString(length,symbols,costum_chars_input);
	}

	showResult(content);
});


/* Showing result */
function showResult(result="") {
	result_panel = document.getElementById("result-panel");
	result_panel.style.display = "block";
	result_panel.innerHTML = result;
}

/* Code for tabs */
tab_buttons = document.querySelectorAll(".tab-btn");

for (tab_button of tab_buttons) {
	tab_button.onclick = function() {

		for (tab_button_to_unselect of tab_buttons) {
			tab_button_to_unselect.classList.remove("selected");
		}

		tab = document.querySelector(this.getAttribute("href"));
		this.classList.add("selected");

		// HIDE all tabs
		tabs = document.querySelectorAll(".tab");
		for (tab_to_hide of tabs) {
			tab_to_hide.style.display = "none";
		}

		if (tab.style.display == "none") tab.style.display = "block"; 
	
	}
}