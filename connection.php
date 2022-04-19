<?php

$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "ajaxjqueryinphp";



$conn = mysqli_connect($hostname,$username,$password,$db_name);

if($conn){
    // echo "Connection done";
}else{
    echo "Connection Failed";
}




?>