-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: music
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `outlet_number` int NOT NULL,
  `emp_number` int NOT NULL,
  `customer_id` int NOT NULL,
  `product_code` int NOT NULL,
  `sale_date` date DEFAULT NULL,
  `sale_time` time DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  KEY `sales_outlet_fk_idx` (`outlet_number`),
  KEY `sales_customer_fr_idx` (`customer_id`),
  KEY `sales_product_idx` (`product_code`),
  KEY `sales_emp_fk_idx` (`emp_number`),
  CONSTRAINT `sales_customer_fk` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sales_emp_fk` FOREIGN KEY (`emp_number`) REFERENCES `employees` (`emp_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sales_outlet_fk` FOREIGN KEY (`outlet_number`) REFERENCES `outlets` (`outlet_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sales_product` FOREIGN KEY (`product_code`) REFERENCES `products` (`product_code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (2,2,2,2,'2022-05-11','22:25:29',3),(2,2,5,1,'2022-05-22','18:50:12',2),(2,2,5,1,'2022-05-22','18:50:12',2),(2,2,5,1,'2022-05-22','18:50:12',2),(2,2,5,5,'2022-05-22','19:05:20',2),(2,2,5,6,'2022-05-22','19:05:20',4),(2,2,5,1,'2022-05-22','19:05:20',2),(2,5,5,1,'2022-05-23','16:16:39',2),(2,5,5,3,'2022-05-23','16:16:39',4),(2,5,5,5,'2022-05-23','16:16:39',2),(2,2,1,1,'2022-05-23','16:22:38',2),(2,2,1,3,'2022-05-23','16:22:38',4),(2,2,1,5,'2022-05-23','16:22:38',2);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-17 12:18:08
