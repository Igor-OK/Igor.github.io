<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset = windows-1251" />
<title>Отправка сообщения</title>
</head>
<body>

<?php
 /* Здесь проверяется существование переменных */
 if (isset($_POST['name'])) {$name = $_POST['name'];}
 if (isset($_POST['email'])) {$email = $_POST['email'];}
 if (isset($_POST['comments'])) {$comments = $_POST['comments'];}

/* Сюда впишите свою эл. почту */
 $address = "ig.sanko@gmail.com, ep2185@mail.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Имя: $name \nТелефон: $email \nТекст: $comments";

$from = "kupikupe.by";


/* А эта функция как раз занимается отправкой письма на указанный вами email */
 $send = mail ($address,'Заказ звонка kupikupe.by',$mes,$from);
 if ($send == 'true')
 {
 echo "Сообщение отправлено";
 }
 else 
 {
 echo "Сообщение не отправлено";
 }
?>

</body>
</html>