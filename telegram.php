<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "6722893868:AAGv5V0l6YUWNfVTDvdo2qlKMfBXrvg3Jsc";
$chat_id = "-4079792198";
$arr = array(
  // 'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  // 'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  console.log('123')
  // header('Location: success.html');
} else {
  echo "Error";
}
?>
