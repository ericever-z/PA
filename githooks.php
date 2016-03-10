<?php
    error_reporting ( E_ALL );
    echo exec("git status");
    echo exec("git reset --hard");
    echo exec("git clean -f -d");
    echo exec("git pull");
    echo exec("chown -R www *");
    echo exec("chown -R www:www .git");
    $arr = array ('msg'=>'request received!');
    echo json_encode($arr);
?>
