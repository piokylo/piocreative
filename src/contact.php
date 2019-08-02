<?php
    $name = $_POST_Post['name'];
    $visiter_email = $_POST['email']
    $business = $_POST['business']
    $message = $_POST['message']


    $email_from = 'piocreative.com' 

    $email_subject = "New Query"

    $email_body = "User Name: $name.\n";
                    "User Email: $visiter_email.\n";
                        "User Message: $message.\n";

    $to = "piocreative.design@gmail.com" 
    $headers = "From $email_from \r\n";
    $headers .= "Replay-To:: $visiter_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    
    header("Location: index.html");

?>