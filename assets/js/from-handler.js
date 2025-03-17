let validation = new JustValidate('form')

validation
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Enter your name!',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Minimum 2 characters!',
		},
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Enter your email!',
		},
		{
			rule: 'email',
			errorMessage: 'Please enter a valid email!',
		},
	])
	.onSuccess(async function () {
		let data = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		}
		console.log(data)

		let response = await fetch('/assets/php/send_mail.php', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
		})

		let result = await response.text()

		alert(result)
	})
