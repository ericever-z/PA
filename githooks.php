<?php
    error_reporting ( E_ALL );
    echo "Start deployment";
    echo exec("git reset --hard origin/master");
    echo exec("git clean -f");
    echo exec("git --git-dir=/home/uikit/.git pull");
    echo "Changing permissions...";
    echo exec("chown -R www *");
    echo "Finished";
?>
