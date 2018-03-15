<?php require '../config/db.php'; ?>
<?php 
   if(isset($emp_id) && !empty($emp_id)){
   	       $sql = $db->query("DELETE FROM employee WHERE emp_id = '".$emp_id."'");
   	       if($sql){
   	       	   echo json_encode(array("response" => "success" ));
   	       }
   }
?>