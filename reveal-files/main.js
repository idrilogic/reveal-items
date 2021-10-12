window.addEventListener('scroll', reveal)

function reveal() {
	var reveals = document.querySelectorAll('.reveal');
	var i;

	for (i = 0; i < reveals.length; i++) {
		if (reveals[i].getBoundingClientRect().top < window.innerHeight) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active')
		}
	}
}