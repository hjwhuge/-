<?php

    //把用户名密码插入数据库的表格中
    include 'connect.php';

    $username = isset($_POST['username']) ? $_POST['username'] : '1';
    // echo $username;

    $sql = "SELECT * FROM reg where `name`='$username'";

    $res = $conn->query($sql);


    if($res->num_rows>0){
        echo '1';
    }else{
        echo '0';
    }

    $res->close();
    $conn->close();