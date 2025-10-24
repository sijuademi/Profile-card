document
	.getElementById("contact-form")
	.addEventListener("submit", function (e) {
		e.preventDefault();
		console.log("success");

		const name = document.getElementById("fullname");
		const email = document.getElementById("email");
		const message = document.getElementById("message");
		const success = document.getElementById("success");

		let valid = true;

		document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
		success.textContent = "";

		if (!isNaN(name.value.trim())) {
			document.getElementById("error-name").textContent =
				"Enter a valid Full Name";
			valid = false;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
			document.getElementById("error-email").textContent =
				"Enter a valid email.";
			valid = false;
		}

		if (message.value.trim().length < 10) {
			document.getElementById("error-message").textContent =
				"Message must be at least 10 characters.";
			valid = false;
		}

		if (valid) {
			document.querySelector(".success").style.visibility = "visible";
			success.textContent =
				"✅ Thank you for contact us! We'll be in touch shortly...";
			// setTimeout(() => {
			// 	window.location.href = "about.html";
			// }, 1000);
		}
	});
