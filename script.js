"use-strict";

const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
	const now = Date.now();
	timeElement.textContent = now;
}

document.addEventListener("DOMContentLoaded", updateTime);

setInterval(updateTime, 1000);

document.getElementById("contact").addEventListener("click", () => {
	window.location.href = "contact.html";
});
