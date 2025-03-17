let validation = new JustValidate('form')

validation
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Введите имя!',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа!',
		},
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Введите почту!',
		},
		{
			rule: 'email',
			errorMessage: 'Введите полную почту!',
		},
	])

	.addField('#subject', [
		{
			rule: 'required',
			errorMessage: 'Введите предмет!',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа!',
		},
	])
	.addField('#message', [
		{
			rule: 'required',
			errorMessage: 'Введите сообщение!',
		},
		{
			rule: 'minLength',
			value: 10,
			errorMessage: 'Минимум 10 символов!',
		},
	])
	.onSuccess(async function () {
		let data = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		}

		let response = await fetch('send_mail.php', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
		})

		let result = await response.text()

		alert(result)
	})
