const body = document.querySelector('body');
const backdrops = document.querySelectorAll('.backdrop');

body.addEventListener('click', onButtonClick);

function onBackdropClick(event) {
	if (event.currentTarget === event.target) {
		event.target.classList.remove('show-modal');
		body.classList.remove('noScroll');
	}
}

function onButtonClick(event) {
	if (!event.target.dataset.action) {
		return;
	}
	window.addEventListener('keydown', onEscKeyPress);

	backdrops.forEach(backdrop => {
		if (backdrop.dataset.modal === event.target.dataset.action) {
			backdrop.classList.toggle('show-modal');
			backdrop.addEventListener('click', onBackdropClick);
			body.classList.toggle('noScroll');
		}
	});
}

function onEscKeyPress(event) {
	if (event.code === 'Escape') {
		backdrops.forEach(backdrop => {
			backdrop.classList.remove('show-modal');
			body.classList.remove('noScroll');
		});

		window.removeEventListener('keydown', onEscKeyPress);
	}
}
