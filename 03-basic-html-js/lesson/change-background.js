
const button = document.getElementById('change-bg-color');

function changeBg() {
	const h2 = document.getElementById('foo-bar');
	h2.style.backgroundColor = 'orange';
}

button.addEventListener('click', changeBg);