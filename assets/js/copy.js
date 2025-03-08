document.querySelectorAll('.copy-text').forEach(item => {
	item.addEventListener('click', function () {
		const textToCopy = this.querySelector('p').innerText // Берем текст из <p>
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				alert('Скопировано: ' + textToCopy)
			})
			.catch(err => {
				console.error('Ошибка копирования: ', err)
			})
	})
})
