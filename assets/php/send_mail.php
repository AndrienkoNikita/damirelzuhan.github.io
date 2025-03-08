<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require `PHPMailer-6.9.3/src/Exception`;
require `PHPMailer-6.9.3/src/PHPMailer`;

$mail = new PHPMailer(true);
$mail->CharSet = `UTF-8`;
$mail->setLanguage('nl', `PHPMailer-6.9.3/language/`);
$mail->IsHTML(true);

$mail->setFrom(`nikikitaandrienko@gmail.com`,`Damirel Zuhan`);
$mail->addAddress(`andrienkonikita800@gmail.com`);
$mail->Subject = `
Hallo, dit is Damirel Zugan`;

$body = '<h1>Contactgegevens</h1>';

if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Naam: </strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><strong>E-mail: </strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['subject']))){
	$body.='<p><strong>Onderwerp: </strong> '.$_POST['subject'].'</p>';
}
if(trim(!empty($_POST['subject']))){
	$body.='<p><strong>Onderwerp: </strong> '.$_POST['subject'].'</p>';
}
if(trim(!empty($_POST['message']))){
	$body.='<p><strong>Bericht: </strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
	$message = 'Error';
} else {
	$message = '
Gegevens verzonden';
}

$response = ['message' => $message];

header('Contact-type: application/json');
echo json_encode($response);
?>