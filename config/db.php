<?php 
   extract($_POST);
   $servername = "localhost";
   $username = "root";
   $password = "";
   $database = "crud_review_2018";
   $db = NULL;


   try{
          $db = new PDO("mysql:host=$servername;dbname=$database",$username,$password);
          $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
   }catch(PDOException $e){
          echo "no db found".$e->getMessage();
   }

?>
