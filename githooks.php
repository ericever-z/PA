<?php
    error_reporting ( E_ALL );
    echo "Show status";
    echo "<br>";
    echo exec("git status");
    echo "<br>";
    echo "Start deployment";
    echo "<br>";
    echo exec("git reset --hard");
    echo "<br>";
    echo exec("git clean -f");
    echo "<br>";
    echo exec("git pull");
    echo "<br>";
    echo exec("git pull");
    echo "<br>";
    echo exec("git pull");
    echo "<br>";
    echo exec("git pull");
    echo "<br>";
    echo exec("git pull");
    echo "<br>";
    echo "Changing permissions...";
    echo "<br>";
    echo exec("chown -R www *");
    echo exec("chown -R www:www .git");
    echo "<br>";
    echo "Finished";
?>
