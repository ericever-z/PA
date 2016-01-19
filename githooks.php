<?php
    error_reporting ( E_ALL );
    exec("cd /home/uikit/");
    $return= exec("git --git-dir=/home/uikit/.git pull");
    echo $return;   
?>
