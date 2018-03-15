<h1>CRUD-PHP-JQUERY-AJAX</h1>

This is a simple PHP JQUERY Ajax Crud 
with the following features.

<h3>SIMPLE FEATURES</h3>

- File upload 
- Multiple Delete with Checkbox
- Simple Pagination 


<h3>CREATE FOLDER STRUCTURES</h3>

- asset / it is  your action js
- config / it is your database config
- template /  it is your layout for header/footer/content
- upload / image storage file
- view  / it is your pages file and some simple native php logic  
index.php / it is your default page to execute 

<h3>CREATE DB</h3>
  Create database name crud_review_2018 and import the crud_review_2018.sql in you phpmyadmin.


 Create db connection 
 <b>db.php</b>

   extract($_POST);<br/>
   $servername = "localhost";<br/>
   $username = "root";<br/>
   $password = "";
   $database = "crud_review_2018";<br/>
   $db = NULL;<br/>


   try{
          $db = new PDO("mysql:host=$servername;dbname=$database",$username,$password);
          $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
   }catch(PDOException $e){
          echo "no db found".$e->getMessage();
   }





goto template <b>header.php</b> and link jquery cdn file 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

this is look like

<b>header.php</b>

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="asset/custom.css">
</head>
   <body>



<h3>You can download the Full Source Code and Free to Motify</h3>
<h3>HAPPY CODDING :-) THANK YOU and God bless </h3>

