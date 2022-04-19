<?php

include("connection.php");

$query = "SELECT * FROM studentajax";

$run = mysqli_query($conn, $query);
if($run){
    $row = mysqli_num_rows($run);
    if($row > 0){
        $data = array();
        while($result = mysqli_fetch_assoc($run)){
            $data[] = $result;
        }
    }
}


echo json_encode($data);




?>