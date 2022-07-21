<?php

$recepient = "osempua@gmail.com";
$siteName = "OSEMP";

$name = trim($_POST["name"]);
$milo = trim($_POST["milo"]);
$phone = trim($_POST["phone"]);
$smska = trim($_POST["smska"]);
$message = "Имя: $name \nПочта: $milo \nТелефон: $phone \nСообщение: $smska";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>