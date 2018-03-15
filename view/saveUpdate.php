<?php require '../config/db.php' ?>
<?php 
   
   $name = (isset($_FILES['img_name']['name'])? $_FILES['img_name']['name']:'');
   $tmp_name = (isset($_FILES['img_name']['tmp_name'])? $_FILES['img_name']['tmp_name']:'');
   $size =  (isset($_FILES['img_name']['size'])? $_FILES['img_name']['size']:'');
   $location = "../upload/";
   $max = 20000000;
   $extension = pathinfo($name,PATHINFO_EXTENSION);
   $valid_format = array("jpg","JPEG","jpeg","JPG");


   if(isset($emp_id) && !empty($emp_id)){
        $validate = $db->query("SELECT * FROM employee WHERE firstname = '".$fname."' AND lastname = '".$lname."' ");
           if($validate->rowCount() > 0){
                   $response = array("response" => "exist", "message" => "nothing change ");
           }else{
          	    if(isset($name) && !empty($name)){
                       if(in_array($extension,$valid_format)){
                              if($size <= $max){
                                      if(move_uploaded_file($tmp_name, $location.$name)){
                                               $sql = $db->query("UPDATE employee SET firstname = '".$fname."', lastname = '".$lname."', address = '".$addr."', image_name = '".$name."' WHERE emp_id = '".$emp_id."'");
                                               if($sql){
                                               	$response = array("response" => "success", "message" => "successfully change !");
                                               }
                                      }else{
                                      	   $response = array("response" => "error", "message" => "uploading error please review your code :-)");
                                      }
                              }else{
                                	$response = array("response" => "size", "message" => "file too big please choose file 2mb !");
                              }
                       }else{
                       	  $response = array("response" => "invalid", "message" => "invalid format ");
                       }
          	    }else {
                      $response = array("response" => "empty", "message" => "please choose file!");
          	    }
           }
   }else{
   	    $validate = $db->query("SELECT * FROM employee WHERE firstname = '".$fname."' AND lastname = '".$lname."' ");
   	       if($validate->rowCount() > 0){
   	               $response = array("response" => "exist", "message" => "already exist");
   	       }else{
         	    if(isset($name) && !empty($name)){
                      if(in_array($extension,$valid_format)){
                             if($size <= $max){
                                     if(move_uploaded_file($tmp_name, $location.$name)){
                                            $sql = $db->query("INSERT INTO employee(firstname,lastname,address,image_name)VALUES('".$fname."','".$lname."','".$addr."','".$name."')");
                                              if($sql){
                                              	$response = array("response" => "success", "message" => "successfully save !");
                                              }
                                     }else{
                                     	   $response = array("response" => "error", "message" => "uploading error please review your code :-)");
                                     }
                             }else{
                               	$response = array("response" => "size", "message" => "file too big please choose file 2mb !");
                             }
                      }else{
                      	  $response = array("response" => "invalid", "message" => "invalid format ");
                      }
         	    }else {
                     $response = array("response" => "empty", "message" => "please choose file!");
         	    }
   	       }    
   }
   echo json_encode($response);
?>