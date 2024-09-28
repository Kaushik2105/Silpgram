-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: products
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `address3` varchar(255) DEFAULT NULL,
  `cart_product_ids` text,
  `wishlist_product_ids` text,
  `order_product_ids` text,
  `order_statuses` text,
  `product_image` text,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'John Doe','123 Main St','Apt 4B','Springfield','101,102','103,104','105,106','pending,completed','https://www.silpgram.com/Products/bottle.jpg'),(2,'Jane Smith','456 Elm St','Suite 5','Springfield','107','108,109','110','completed','https://www.silpgram.com/Products/chandelier.jpg'),(3,'Mike Brown','789 Oak St','','Springfield','111,112,113','114','115','cancelled','https://www.silpgram.com/Products/clips.jpg'),(4,'Alice Johnson','321 Maple St','Apt 7','Shelbyville','116,117','118,119','120','pending','https://www.silpgram.com/Products/d-bottle.jpg'),(5,'Bob White','654 Pine St','Apt 2','Shelbyville','121,122','123','124,125','completed,cancelled','https://www.silpgram.com/Products/earring.jpg'),(6,'Carol King','987 Birch St','Suite 8','Springfield','126','127,128','129','completed','https://www.silpgram.com/Products/glass.jpg'),(7,'David Allen','741 Cedar St','Apt 9','Shelbyville','130,131,132','133','134,135','pending,completed','https://www.silpgram.com/Products/hanger.jpg'),(8,'Emma Harris','852 Oak St','Suite 3','Springfield','136','137,138','139','completed','https://www.silpgram.com/Products/necklace.jpg'),(9,'Frank Martin','963 Pine St','','Shelbyville','140,141','142','143,144','pending','https://www.silpgram.com/Products/plate.jpg'),(10,'Grace Lee','147 Maple St','Apt 5','Springfield','145,146','147,148','149','completed','https://www.silpgram.com/Products/regular-jug.jpg');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-19 10:16:04
