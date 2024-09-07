-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: silpgram
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `productratings`
--

DROP TABLE IF EXISTS `productratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productratings` (
  `product_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `prd_img1` text,
  `prd_img2` text,
  `rating_value` decimal(2,1) DEFAULT NULL,
  KEY `product_id` (`product_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `productratings_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  CONSTRAINT `productratings_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `productratings_chk_1` CHECK (((`rating_value` >= 1.0) and (`rating_value` <= 5.0)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productratings`
--

LOCK TABLES `productratings` WRITE;
/*!40000 ALTER TABLE `productratings` DISABLE KEYS */;
INSERT INTO `productratings` VALUES (1,1,'https://www.silpgram.com/Products/bottle.jpg','https://www.silpgram.com/Products/bottle.jpg',4.5),(2,2,'https://www.silpgram.com/Products/chandelier.jpg','https://www.silpgram.com/Products/chandelier.jpg',4.0),(3,3,'https://www.silpgram.com/Products/clips.jpg','https://www.silpgram.com/Products/clips.jpg',3.5),(4,4,'https://www.silpgram.com/Products/earring.jpg','https://www.silpgram.com/Products/earring.jpg',5.0),(5,5,'https://www.silpgram.com/Products/glass.jpg','https://www.silpgram.com/Products/glass.jpg',4.7),(6,6,'https://www.silpgram.com/Products/necklace.jpg','https://www.silpgram.com/Products/necklace.jpg',4.3),(7,7,'https://www.silpgram.com/Products/plate.jpg','https://www.silpgram.com/Products/plate.jpg',4.0),(8,8,'https://www.silpgram.com/Products/regular-jug.jpg','https://www.silpgram.com/Products/regular-jug.jpg',3.8);
/*!40000 ALTER TABLE `productratings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-07 14:31:21
