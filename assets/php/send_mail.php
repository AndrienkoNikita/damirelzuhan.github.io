<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Проверяем заполненность полей
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Vul alle velden in.";
        exit;
    }

    // Проверяем корректность email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Voer een geldig e-mailadres in.";
        exit;
    }

    // Кому отправляем
    $to = "nikikitaandrienko@gmail.com"; // Укажи здесь свою почту
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Формируем текст письма
    $mailBody = "Naam: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Onderwerp: $subject\n\n";
    $mailBody .= "Bericht:\n$message\n";

    // Отправка письма
    if (mail($to, $subject, $mailBody, $headers)) {
        echo "success"; // JS поймает этот ответ
    } else {
        echo "Er is een fout opgetreden bij het verzenden van het bericht.";
    }
} else {
    echo "Ongeldige aanvraag.";
}
?>
