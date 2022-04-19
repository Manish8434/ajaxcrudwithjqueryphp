<?php

include("connection.php");

$getData = file_get_contents("php://input");
$data = json_decode($getData, true);

$id = $data['sid'];

$query = "SELECT * FROM studentajax WHERE id = {$id}";

$run = mysqli_query($conn,$query);
if($run){
    $result = mysqli_fetch_assoc($run);
}

echo json_encode($result);






?>