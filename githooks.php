<?php
    error_reporting ( E_ALL );
    $dir = '/home/uikit/';//该目录为git检出目录
    $password = '12354';//这是是密码
    exec("cd /home/uikit/");
    $return= exec("git pull ");
    echo $return;   
?>
