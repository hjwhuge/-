<?php

    include 'connect.php';
    
    //接收数据
    $username=isset($_POST['username']) ? $_POST['username'] : 'malin';
    $password=isset($_POST['password']) ? $_POST['password'] : '123456';

    //写查询语句
    $sql="SELECT * FROM reg WHERE `name`='$username' and `psw`='$password'";

    //执行：内部编译
    $res = $conn->query($sql);

    if($res->num_rows>0){
        echo 'yes';//用户名密码都正确，可以登陆
    }else{
        echo 'no';//不正确，不可以登陆
    }

    // $res->close();

    $conn->close();

?>
