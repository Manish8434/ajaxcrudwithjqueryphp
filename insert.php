<?php

include("connection.php");

$getData = file_get_contents("php://input");
$data = json_decode($getData, true);

$id = $data['id'];
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];


if(!empty($name) && !empty($email) && !empty($password)){

$query = "INSERT INTO studentajax (id, name, email, password) VALUES ('$id','$name','$email','$password') ON DUPLICATE KEY UPDATE name='$name',email='$email',password='$password'";


$run = mysqli_query($conn,$query);
if($run){
    echo "Student Added Successfully";
}else{
    echo "Filed to Add Student Data";
}

}else{
    echo "Please Filled All Inputs";
}


?>