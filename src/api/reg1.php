<?php

    //验证用户名
    include 'connect.php';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    // echo $username;
    
    $sql = "INSERT INTO reg(name,psw) VALUES('$username','$password')";

    $res = $conn->query($sql);


    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }


    $conn->close();