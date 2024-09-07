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
-- Table structure for table `productimages`
--

DROP TABLE IF EXISTS `productimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productimages` (
  `product_id` int DEFAULT NULL,
  `primary_image_url` text NOT NULL,
  `secondary_image_url1` text,
  `secondary_image_url2` text,
  `price` decimal(10,2) DEFAULT NULL,
  `ratings` decimal(2,1) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `prd_desc` text,
  KEY `product_id` (`product_id`),
  CONSTRAINT `productimages_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
INSERT INTO `productimages` VALUES (1,'https://www.silpgram.com/Products/bottle.jpg','https://www.silpgram.com/Products/bottle.jpg','https://www.silpgram.com/Products/bottle.jpg',699.99,4.5,'Bottle','Latest model bottle with advanced features.'),(2,'https://www.silpgram.com/Products/chandelier.jpg','https://www.silpgram.com/Products/chandelier.jpg','https://www.silpgram.com/Products/chandelier.jpg',1299.99,4.8,'Chandelier','An eye-catching chandelier for roofs'),(3,'https://www.silpgram.com/Products/clips.jpg','https://www.silpgram.com/Products/clips.jpg','https://www.silpgram.com/Products/clips.jpg',19.99,4.2,'Clips','Comfortable wooden clips in various colors & sizes.'),(4,'https://www.silpgram.com/Products/earring.jpg','https://www.silpgram.com/Products/earring.jpg','https://www.silpgram.com/Products/earring.jpg',14.99,4.7,'Bestselling Ear-rings','A gripping tale that ehance the beauty of ears.'),(5,'https://www.silpgram.com/Products/glass.jpg','https://www.silpgram.com/Products/glass.jpg','https://www.silpgram.com/Products/glass.jpg',149.99,4.6,'Mugs','Mugs which can store any type of li1uid.'),(6,'https://www.silpgram.com/Products/necklace.jpg','https://www.silpgram.com/Products/necklace.jpg','https://www.silpgram.com/Products/necklace.jpg',799.99,4.4,'Necklace','Modern and trending design Necklace.'),(7,'https://www.silpgram.com/Products/plate.jpg','https://www.silpgram.com/Products/plate.jpg','https://www.silpgram.com/Products/plate.jpg',29.99,4.3,'Plates','Sustainable strong plates.'),(8,'https://www.silpgram.com/Products/regular-jug.jpg','https://www.silpgram.com/Products/regular-jug.jpg','https://www.silpgram.com/Products/regular-jug.jpg',79.99,4.1,'Jug','Durable handy jugs.');
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-07 13:16:12
