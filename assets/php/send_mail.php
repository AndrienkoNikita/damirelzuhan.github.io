<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer';
require 'phpmailer/SMTP';
require 'phpmailer/Exception';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

// Данные
$name = $data['name'];
$email = $data['email'];
$subject = $data['subject'];
$message = $data['message'];

// Контент письма
$title = 'Заявка с сайта'; // Название письма
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>E-mail: <strong>'.$email.'</strong></p>'.
        '<p>Предмет: <strong>'.$subject.'</strong></p>'.
        '<p>Сообщение: <strong>'.$message.'</strong></p>';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

  // Настройки почты отправителя
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'zuhandamirel833@gmail.com'; // Логин на почте
  $mail->Password   = 'kykaznffrnyiihhb'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('zuhandamirel833@gmail.com', 'Заявка с сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('zuhandamirel833@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('');

  // Сообщение об успешной отправке
  echo ('Сообщение отправлено успешно!');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
}
