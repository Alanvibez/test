<?php
$to  = 'alihan9009@gmail.com';
$subject = 'Письмо от клиента';
$name = $_POST['name'];
$lname = $_POST['lname'];
$mail = $_POST['mail'];
$nation = $_POST['nation'];
$gender = $_POST['gender'];
mail(
    $to,
    $subject,
    'Имя и фамилия потенциального клиента: '.$name.
    '. Его почта: '.$mail.
    '. Его пол: '.$gender.
    '. Его национальность: '.$nation
);
?>