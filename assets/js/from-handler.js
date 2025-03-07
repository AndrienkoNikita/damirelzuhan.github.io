document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contact-form')

	form.addEventListener('submit', function (event) {
		event.preventDefault() // Предотвращаем стандартную отправку формы

		const formData = new FormData(form)
		const loading = document.querySelector('.loading')
		const errorMessage = document.querySelector('.error-message')
		const sentMessage = document.querySelector('.sent-message')

		// Показываем индикатор загрузки
		loading.style.display = 'block'
		errorMessage.style.display = 'none'
		sentMessage.style.display = 'none'

		fetch('send_mail.php', {
			method: 'POST',
			body: formData,
		})
			.then(response => response.text())
			.then(data => {
				loading.style.display = 'none'
				if (data.trim() === 'success') {
					sentMessage.style.display = 'block'
					form.reset() // Очищаем форму после успешной отправки
				} else {
					errorMessage.style.display = 'block'
					errorMessage.textContent = data // Показываем ошибку
				}
			})
			.catch(error => {
				loading.style.display = 'none'
				errorMessage.style.display = 'block'
				errorMessage.textContent =
					'Er is een fout opgetreden. Probeer het later opnieuw.'
			})
	})
})
