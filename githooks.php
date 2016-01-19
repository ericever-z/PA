<?php
    error_reporting ( E_ALL );
    echo "Start deployment";
    echo "<br>";
    echo exec("git reset --hard origin/master");
    echo "<br>";
    echo exec("git clean -f");
    echo "<br>";
    echo exec("git --git-dir=/home/uikit/.git pull");
    echo "<br>";
    echo "Changing permissions...";
    echo "<br>";
    echo exec("chown -R www *");
    echo "<br>";
    echo "Finished";
?>
