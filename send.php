<?php 
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Форматирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = true;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

  // Настройки вашей почты
  $mail->Host = 'smtp.yandex.ru'; // SMTP сервера вашей почты
  $mail->Username = 'iskvmksm@yandex.ru'; //Логин на почте
  $mail->Password = 'yoradafdhvwmakij'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;
  $mail->setFrom('iskvmksm@yandex.ru', 'Максим Исаков'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('isakovmaksim777@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отправленность сообщения
  if ($mail->send()) {$result = "succes";}
  else {$result = "error";}

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>