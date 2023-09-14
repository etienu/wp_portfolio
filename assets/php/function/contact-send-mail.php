<?php
    mb_language("japanese"); 
    mb_internal_encoding("UTF-8");

    //----------------------------------------
    //  自分への通知
    //----------------------------------------
    $to = "contact@yoyonote.info";
    $subject = "[YOYO NOTE] お問い合わせがありました";
    $message = "[名前]".$_POST['your-name']."\n"
                ."メール".$_POST['your-mail']."\n"
                ."メッセージ".$_POST['your-message']."\n";
    $headers = "From: ".$_POST['your-mail'];//from@example.com";
    mb_send_mail( $to, $subject, $message, $headers ); 
    console.log( "自分への通知 [名前]".$_POST['your-name'] );

    //----------------------------------------
    //  相手への自動返信
    //----------------------------------------
    $to = $_POST['your-mail'];
    $subject = "お問い合わせありがとうございます！";
    $message = "[名前]".$_POST['your-name'];
    $headers = "From: contact@yoyonote.info";
    mb_send_mail($to, $subject, $message, $headers); 
?>