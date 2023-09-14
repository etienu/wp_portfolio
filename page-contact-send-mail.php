<?php
function console_log($data){
    echo '<script>';
    echo 'console.log('.json_encode($data).')';
    echo '</script>';
}

function contact__sendmail( $i_POST ){
    mb_language("japanese"); 
    mb_internal_encoding("UTF-8");

    //  引数がない場合はエラー終了
    if( count($i_POST) <= 0 ){
        return;
    }

    $sitecontactmail = "contact@etienu.com";
    $siteurl = "https://etienu.com";
    $sitename = get_bloginfo( 'name' );
    //----------------------------------------
    //  自分への通知
    //----------------------------------------
    $to      = $sitecontactmail;
    $subject = "[".$sitename."] お問い合わせがありました - [お名前]".$i_POST['your-name'];
    $headers = "From: ".$sitecontactmail;
    $message = ""
    ."━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
    ."以下の内容でメールを受け付けました。\n"
    ."━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
    ."[お名前]".$i_POST['your-name']."\n\n"
    ."[メール]".$i_POST['your-email']."\n\n"
    ."[お問い合わせ内容]\n".$i_POST['your-message']."\n"
    ."━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
    ."[reCAPTCHAスコア]".$i_POST['grc_score']."\n\n"
    ."このメールは [".$sitename."][".$siteurl."]のお問い合わせフォームから送信されました\n";
    if( !wp_mail( $to, $subject, $message, $headers ) ){
        console_log( "自分への通知 : 失敗" );
    }else{
    }

    //----------------------------------------
    //  相手への自動返信
    //----------------------------------------
    $to = $i_POST['your-email']; //  出す相手
    $subject = "【".$sitename."】お問い合わせありがとうございます！";
    $headers = "From: ".$sitename." <".$sitecontactmail.">";
    $message = ""
    ."────────────────────────────────────────\n"
    ."※このメールはシステムからの自動返信です\n"
    ."────────────────────────────────────────\n\n"
    .$i_POST['your-name']." 様\n\n"
    ."この度は【".$sitename."】にお問い合わせいただきありがとうございます！\n\n"
//    ."=========== お問い合わせ内容 ===========\n"
    ."- - - - - - - - - - - - - - - - - - - - - - - -\n"
    ."■お名前        : ".$i_POST['your-name']."\n"
    ."■メールアドレス : ".$i_POST['your-email']."\n"
    ."■お問い合わせ内容■\n"
    .$i_POST['your-message']."\n\n"
    ."- - - - - - - - - - - - - - - - - - - - - - - -\n"
    ."お問い合わせいただきました内容については\n"
    ."3営業日以内にご連絡いたします。\n\n"
    //."--------------\n"
    ."────────────────────────────────────────\n"
    ."このメールは".$sitename."(".home_url().") のお問い合わせフォームから送信されました";

    if( !wp_mail($to, $subject, $message, $headers) ){
        console_log( "相手への自動送信 : 失敗" );
    }else{
    }
}


//  PHPMailerを使った物
//  インストール方法と使い方がよくわからない
function sendmail__PHPMailer( $i_POST ){

    //  引数がない場合はエラー終了
    if( count($i_POST) <= 0 ){
//        console_log( "引数がない = 直接ページ指定なので終了" );
        return;
    }


    $sitemail = "contact@etienu.com";
    $siteurl = "https://etienu.com";
    $sitename = get_bloginfo( 'name' );

    // 文字エンコードを指定
    mb_language('uni');
    mb_internal_encoding('UTF-8');

    $mail = new PHPMailer(true);

    // 文字エンコードを指定
    $mail->CharSet = 'utf-8';

    // 送信設定
try{
    $mail->isSMTP();
    $mail->Host = 'sv****.xserver.jp';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact@etienu.com';
    $mail->Password = '************';
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;//587;

    //----------------------------------------
    //  自分への通知
    //----------------------------------------

    $mail->setFrom($sitemail, $sitename); // 送信者
    $mail->addAddress($sitemail, $sitename);   // 宛先
    $mail->addReplyTo($sitemail, 'お問い合わせ'); // 返信先
    //$mail->addCC('cc@example.com', '受信者名'); // CC宛先
    $mail->Sender = $sitemail; // Return-path
    //  件名と本文
    $mail->Subject = 'お問い合わせありがとうございます';
    $mail->Body = ""
    ."━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
    ."以下の内容でお問い合わせを受け付けました。\n"
    ."━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
    ."[お名前]".$i_POST['your-name']."\n\n"
    ."[メール]".$i_POST['your-email']."\n\n"
    ."[お問い合わせ内容]\n".$i_POST['your-message']."\n"
    ."━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
    ."[reCAPTCHAスコア]".$i_POST['grc_score']."\n\n"
    ."このメールは [".$sitename."][".$siteurl."]のお問い合わせフォームから送信されました\n";

    // メール送信
    $mail->send();
    } catch (Exception $e) {
        echo "メッセージの送信に失敗しました: {$mail->ErrorInfo}";
        exit;
    }



    //----------------------------------------
    //  相手への通知
    //----------------------------------------
    try{
    $mail->setFrom($sitemail, $sitename); // 送信者

    $mail->addAddress($i_POST['your-email'], $i_POST['your-name']);   // 宛先
    $mail->addReplyTo($sitemail, 'お問い合わせ'); // 返信先
    //$mail->addCC('cc@example.com', '受信者名'); // CC宛先
    $mail->Sender = $sitemail; // Return-path
    //  件名と本文
    $mail->Subject = "【".$sitename."】お問い合わせありがとうございます！";
    $mail->Body = ""
    ."────────────────────────────────────────\n"
    ."※このメールはシステムからの自動返信です\n"
    ."────────────────────────────────────────\n\n"
    .$i_POST['your-name']." 様\n\n"
    ."この度は【".$sitename."】にお問い合わせいただきありがとうございます！\n\n"
//    ."=========== お問い合わせ内容 ===========\n"
    ."- - - - - - - - - - - - - - - - - - - - - - - -\n"
    ."■お名前        : ".$i_POST['your-name']."\n"
    ."■メールアドレス : ".$i_POST['your-email']."\n"
    ."■お問い合わせ内容■\n"
    .$i_POST['your-message']."\n\n"
    ."- - - - - - - - - - - - - - - - - - - - - - - -\n"
    ."お問い合わせいただきました内容については\n"
    ."3営業日以内にご連絡いたします。\n\n"
    //."--------------\n"
    ."────────────────────────────────────────\n"
    ."このメールは".$sitename."(".home_url().") のお問い合わせフォームから送信されました";


    // メール送信
    $mail->send();
    } catch (Exception $e) {
        echo "メッセージの送信に失敗しました: {$mail->ErrorInfo}";
        exit;
    }
}


?>
