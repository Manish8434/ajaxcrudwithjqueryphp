<?php

include('connection.php');

$getData = file_get_contents("php://input");
$data = json_decode($getData,true);


$id = $data['sid'];
if(!empty($id)){
$query = "DELETE FROM studentajax WHERE id = {$id}";

$run = mysqli_query($conn,$query);
if($run){
    echo "Student Deleted Successfully";
}else{
    echo "Failed To Delete Student";
}

}else{
    echo "Something Went Wrong, Try Again";
}





?>