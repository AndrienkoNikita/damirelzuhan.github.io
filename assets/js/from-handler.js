let validation = new JustValidate('form')

validation
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Voer uw naam in!',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Minimaal 2 karakters!',
		},
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Voer uw e-mailadres in!',
		},
		{
			rule: 'email',
			errorMessage: 'Voer uw volledige e-mailadres in!',
		},
	])

	.addField('#subject', [
		{
			rule: 'required',
			errorMessage: 'Voer artikel in!',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Minimaal 2 karakters!',
		},
	])
	.addField('#message', [
		{
			rule: 'required',
			errorMessage: 'Voer uw bericht in!',
		},
		{
			rule: 'minLength',
			value: 10,
			errorMessage: 'Minimaal 10 tekens!',
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
