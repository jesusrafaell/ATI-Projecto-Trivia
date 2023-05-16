window.addEventListener('DOMContentLoaded', (event) => {
	// Obtener referencia al botón del temporizador
	const timerButton = document.querySelector('.timer');

	// Función para actualizar el temporizador
	function updateTimer() {
		let time = 60; // Duración en segundos

		// Función para formatear el tiempo en formato mm:ss
		function formatTime(time) {
			let minutes = Math.floor(time / 60);
			let seconds = time % 60;

			// Agregar un cero inicial si los segundos son menores a 10
			seconds = seconds < 10 ? `0${seconds}` : seconds;

			return `${minutes}:${seconds}`;
		}

		// Actualizar el texto y color de fondo del botón del temporizador
		function updateButton(time) {
			timerButton.textContent = formatTime(time);

			if (time <= 20) {
				timerButton.style.backgroundColor = '#CF205F';
			}
		}

		// Llamar a la función inicialmente
		updateButton(time);

		// Reducir el tiempo cada segundo
		const countdown = setInterval(() => {
			time--;

			// Actualizar el texto y color de fondo del botón del temporizador
			updateButton(time);

			// Detener el contador cuando el tiempo llegue a cero
			if (time === 0) {
				clearInterval(countdown);
				timerButton.disabled = true;
			}
		}, 1000);
	}

	// Ejecutar la función para iniciar el temporizador
	updateTimer();
	timerButton.disabled = true; // Desactivar el botón después de iniciado el contador
});
