# PHP-AJAX-CRUD + FILE UPLOAD + PAGINATION + MULTIPLE DELETE with CHECKBOX
 
 This is a simple CRUD Application for PHP AJAX with the following functionality .
 
 - Create, Update, Delete 
 - Pagination 
 - File upload
 - multiple delete with checkbox
 
 
### Folder Structure 
```php 
    ├── assets/
          ├── action.js -- your action js
          ├── custom.css -- your custom css
          ├── jquery-3.1.1.min -- jquery library
    ├── config/ -- your db connection 
    ├── template/ 
          ├── header.php
          ├── content.php
          ├── foorter.php
    ├── upload/ -- your stoarage for images
    ├── view / -- your pages 
    ├── index.php  -- your simple route logic 

```

 
#### SQL 
Create database and copy paste SQL Code below. 
```sql
    -- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2018 at 11:35 AM
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
(32, 'johnysd', 'bravo', 'atlanta', 'Penguins.jpg'),
(37, 'john ', 'tumulak', 'bankal', 'Chrysanthemum.jpg');

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
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```
### db.php
 Create database connection 
```php
<?php session_start() ?>
<?php 
	
	$ServerName = "localhost";
	$Username	= "root";
	$Password	= "";
	$DbName		= "crud_review_2018";
	$db = null;

	try {
		$db = new PDO("mysql:host=$ServerName;dbname=$DbName",$Username,$Password);
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
	} catch (PDOException $e) {
		echo "Connection Failed:" . $e->getMessage();
		die();
	}

 ?>
 <?php require 'functions.php' ?>
```

 
### just download to checkout the full details https://github.com/reyven90/php-ajax-login

### more question just pm me on facebook https://www.facebook.com/jay.romantiko

### thank you for following Goodbless :-)
