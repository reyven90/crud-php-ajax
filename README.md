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

<h3>Step 1</h3>
  Create database name crud_review_2018 and then copy the sql command bellow then paste it into your db name that you created.

 SQL 
  -- phpMyAdmin SQL Dump
  -- version 4.7.7
  -- https://www.phpmyadmin.net/
  --
  -- Host: 127.0.0.1
  -- Generation Time: Mar 15, 2018 at 07:08 PM
  -- Server version: 10.1.30-MariaDB
  -- PHP Version: 7.2.2

  SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
  SET AUTOCOMMIT = 0;
  START TRANSACTION;
  SET time_zone = "+00:00";


  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;

  --
  -- Database: `crud_review_2018`
  --

  -- --------------------------------------------------------

  --
  -- Table structure for table `employee`
  --

  CREATE TABLE `employee` (
    `emp_id` int(11) NOT NULL,
    `firstname` varchar(200) NOT NULL,
    `lastname` varchar(200) NOT NULL,
    `address` varchar(200) NOT NULL,
    `image_name` varchar(100) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  --
  -- Dumping data for table `employee`
  --

  INSERT INTO `employee` (`emp_id`, `firstname`, `lastname`, `address`, `image_name`) VALUES
  (30, 'randy', 'inso', 'bankal', 'Hydrangeas.jpg'),
  (32, 'johny', 'bravo', 'atlanta', 'Penguins.jpg'),
  (33, 'james', 'harden', 'dubai', 'Koala.jpg'),
  (34, 'carlo', 'pinote', 'casia', 'Lighthouse.jpg'),
  (35, 'randy', 'pinote', 'casia', 'Lighthouse.jpg'),
  (36, 'bryle', 'apaz', 'casia', 'Lighthouse.jpg'),
  (37, 'john ', 'tumulak', 'bankal', 'Chrysanthemum.jpg'),
  (38, 'mean', 'engracial', 'bankal', 'Penguins.jpg');

  --
  -- Indexes for dumped tables
  --

  --
  -- Indexes for table `employee`
  --
  ALTER TABLE `employee`
    ADD PRIMARY KEY (`emp_id`);

  --
  -- AUTO_INCREMENT for dumped tables
  --

  --
  -- AUTO_INCREMENT for table `employee`
  --
  ALTER TABLE `employee`
    MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
  COMMIT;

  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



<h3>Step 2</h3>

 Create db connection 

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


<h3>Step 3</h3>

goto template header.php and link jquery cdn file 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

this is look like

header.php

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="asset/custom.css">
</head>
   <body>


<h3>index.php</h3>


<?php require 'config/db.php' ?>
<?php 

  $pg = (isset($_GET['pg']) && !empty($_GET['pg'])? $_GET['pg']:'');
  
   switch($pg){
   	    case 'home':
               $title = 'home';
               $active = 'home';
               $content = 'view/home.php';
               $js=array("asset/action.js");
   	    break;

   	    default:
               $title = 'home';
               $active = 'home';
               $content = 'view/home.php';
               $js=array("asset/action.js");
   	    break;


   }

   include 'template/content.php';
?>