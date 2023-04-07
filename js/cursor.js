const cursor = document.querySelector('.cursor');

addEventListener('click', event => {
	cursor.classList.add('press');
	cursor.style.top = `${event.pageY - 10}px`;
	cursor.style.left = `${event.pageX - 10}px`;
	setTimeout(() => {
		cursor.classList.remove('press');
	}, 500);
});
