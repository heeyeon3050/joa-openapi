-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: j10a503.p.ssafy.io    Database: joa
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` binary(16) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `bank_id` binary(16) DEFAULT NULL,
  `dummy_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd2xb9a1gvm10rr2y2ks6l8yig` (`bank_id`),
  KEY `FKoobt4mqgrkdwpqg6scrgkr2fk` (`dummy_id`),
  CONSTRAINT `FKd2xb9a1gvm10rr2y2ks6l8yig` FOREIGN KEY (`bank_id`) REFERENCES `bank` (`id`),
  CONSTRAINT `FKoobt4mqgrkdwpqg6scrgkr2fk` FOREIGN KEY (`dummy_id`) REFERENCES `dummy` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (_binary '<�gހFꖱ_i	\ZЩ','2024-04-03 19:07:27.398619',_binary '\0','2024-04-03 19:07:27.398619',NULL,'랠갼긴',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '�Ah|�F�+��_vQ]','2024-04-03 14:10:05.047044',_binary '\0','2024-04-03 14:10:05.047044',NULL,'넷임뼙',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '\�\�!\�bN��U����\�','2024-04-03 14:10:04.841184',_binary '\0','2024-04-03 14:10:04.841184',NULL,'뚠놂켭',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '\��p�I~�k[\�\�\�N','2024-04-03 19:07:27.388501',_binary '\0','2024-04-03 19:07:27.388501',NULL,'윙휭벵',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '̦)��K{�\�ηo!7','2024-04-03 14:10:04.877156',_binary '\0','2024-04-03 14:10:04.877156',NULL,'튱앳잭',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '�j)(GC��ښ\�;\r\�','2024-04-03 14:10:05.004548',_binary '\0','2024-04-03 14:10:05.004548',NULL,'상밗여',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary 'q\�I��\��(XD�\�','2024-04-03 14:10:04.900784',_binary '\0','2024-04-03 14:10:04.900784',NULL,'잗푤옴',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary 'J\�\��K��\nc�i!�','2024-04-03 19:07:27.351490',_binary '\0','2024-04-03 19:07:27.351490',NULL,'챕케듈',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '*���\�K�����6F^Q','2024-04-03 19:13:39.464019',_binary '\0','2024-04-03 19:30:16.253300','joen@ssafy.com','이싸피','5555','01012345678',_binary '��=�M+��2�\"}�w',NULL),(_binary '*\�\�\�F¹=&�9�','2024-04-03 14:10:04.977671',_binary '\0','2024-04-03 14:10:04.977671',NULL,'다흔빵',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '+&�\��G��\�S\�Y )','2024-04-03 19:07:27.508652',_binary '\0','2024-04-03 19:07:27.508652',NULL,'릅쫬므',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '3��=ÇM霭lb_\�Pu','2024-04-03 14:10:05.145759',_binary '\0','2024-04-03 14:10:05.145759',NULL,'쳇쭐긴',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary ':m��>\�DV�1����d�','2024-04-03 19:07:27.360585',_binary '\0','2024-04-03 19:07:27.360585',NULL,'꽥멍쭘',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary 'A�>�\�GI녀\�\n�\Z�','2024-04-03 19:07:27.438899',_binary '\0','2024-04-03 19:07:27.438899',NULL,'경넌황',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary 'F���-0Dn�{fY\�\�s','2024-04-03 19:07:27.530991',_binary '\0','2024-04-03 19:07:27.530991',NULL,'쨋폐퀵',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary 'K�4\��A�\�X�3\�:','2024-04-03 19:07:27.408322',_binary '\0','2024-04-03 19:07:27.408322',NULL,'틱퍼쿳',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary 'N�\�MOzD\�a�JM%2:','2024-04-03 14:10:05.110390',_binary '\0','2024-04-03 14:10:05.110390',NULL,'꺽뤽홱',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary 'Z�FJ�!L�����\0e','2024-04-03 19:07:27.378963',_binary '\0','2024-04-03 19:07:27.378963',NULL,'셋괌섹',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '[*$\���K0��\�\�|��\�','2024-04-03 19:07:27.542374',_binary '\0','2024-04-03 19:07:27.542374',NULL,'귄굇횻',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '^7\�\�\�Fu�6+\�Ň(V','2024-04-03 14:10:05.097984',_binary '\0','2024-04-03 14:10:05.097984',NULL,'쭤착콴',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary 'a\�Q%�\�D��\�}\�D4n','2024-04-03 19:07:27.428693',_binary '\0','2024-04-03 19:07:27.428693',NULL,'빤똘휭',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary 'r^!��f@��\r�g:�\n','2024-04-03 14:10:05.073738',_binary '\0','2024-04-03 14:10:05.073738',NULL,'콸흘옙',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary 'u����(D\�a3�~2ck','2024-04-03 18:59:58.460126',_binary '\0','2024-04-03 18:59:58.460126','super@google.com','슈퍼','1234','01012341123',_binary 'X~KntO��D\�sn�\�',NULL),(_binary '|z\�6\�Dt�ꃀM\�\�','2024-04-03 14:10:04.865788',_binary '\0','2024-04-03 14:10:04.865788',NULL,'텃엽견',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '~hp#E��A`�\�!','2024-04-03 14:10:04.854580',_binary '\0','2024-04-03 14:10:04.854580',NULL,'벳헷쇤',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '~ܫs�\�Cc����1�','2024-04-03 14:10:04.990022',_binary '\0','2024-04-03 14:10:04.990022',NULL,'푯곡맙',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '�����\�@\Z��p7-R�V','2024-04-03 19:07:27.519683',_binary '\0','2024-04-03 19:07:27.519683',NULL,'족끅훑',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '�l0fq�KM�3yĐ\n�3','2024-04-03 14:10:04.965145',_binary '\0','2024-04-03 14:10:04.965145',NULL,'혁큄섰',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '�~�;!H��*Ak�l\'','2024-04-03 14:10:04.939108',_binary '\0','2024-04-03 14:10:04.939108',NULL,'썬읏뿔',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '�\�\�\��IH�\�e\�\'\"\\:','2024-04-03 19:07:27.369722',_binary '\0','2024-04-03 19:07:27.369722',NULL,'켱밭맥',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '�u\�#v�K�\Z\Z��%�','2024-04-03 14:10:04.889003',_binary '\0','2024-04-03 14:10:04.889003',NULL,'톼댓욀',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '�|y�.�J勸��e߯','2024-04-03 19:07:27.497078',_binary '\0','2024-04-03 19:07:27.497078',NULL,'탔뷕라',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '�H���HBǳDh_���','2024-04-03 14:10:05.061414',_binary '\0','2024-04-03 14:10:05.061414',NULL,'쇠칡섯',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '�c;�ۨLo�\Z�b7Av8','2024-04-03 19:07:27.472826',_binary '\0','2024-04-03 19:07:27.472826',NULL,'삭휫토',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '�v\�Q�BJ�\��\'l��','2024-04-03 14:10:04.913123',_binary '\0','2024-04-03 14:10:04.913123',NULL,'껼둔홑',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '��_�F�A��\�u֎\�','2024-04-03 14:10:04.926092',_binary '\0','2024-04-03 14:10:04.926092',NULL,'팟놉귐',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '���\��E#�q<I\�\�\�','2024-04-03 19:07:27.484953',_binary '\0','2024-04-03 19:07:27.484953',NULL,'렬각짝',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '��W�j�G��n���^�\�','2024-04-03 18:45:05.201561',_binary '\0','2024-04-03 18:45:05.201561','eurohand@naver.com','이유로','qwe123','01099306272',_binary '\r��r{*A �$`\�\�0',NULL),(_binary '��\�)ȡD3�@J���^�','2024-04-03 14:10:05.032554',_binary '\0','2024-04-03 14:10:05.032554',NULL,'렌쉈볼',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '\�ӊ+�\ZFˤ�g\�:��','2024-04-03 14:10:04.952083',_binary '\0','2024-04-03 14:10:04.952083',NULL,'손렝낑',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '\�hE�MԤ~�Ą\�','2024-04-03 14:10:05.085598',_binary '\0','2024-04-03 14:10:05.085598',NULL,'길힛즈',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '\�z\�#<O��8��q�ѵ','2024-04-03 19:07:27.339746',_binary '\0','2024-04-03 19:07:27.339746',NULL,'셔꺽삐',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '\�0N+�;A��^\n�Y3g','2024-04-03 14:10:05.122494',_binary '\0','2024-04-03 14:10:05.122494',NULL,'닦싯눠',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '\�Lan]�B���\�F-�7','2024-04-03 19:07:27.449445',_binary '\0','2024-04-03 19:07:27.449445',NULL,'남샴헒',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '\�N~\�R\�GZ��y@\�\�D','2024-04-03 19:27:21.622790',_binary '\0','2024-04-03 19:27:21.622790',NULL,'룟발삶',NULL,NULL,_binary '��=�M+��2�\"}�w',_binary 'P\�@�H�1A#w8%'),(_binary '\�)�O�zK���D�\�\�','2024-04-04 00:14:35.551042',_binary '\0','2024-04-04 00:14:35.551042','rnqhstmd0219@gmail.com','구본승','1234','01094010286',_binary '\r��r{*A �$`\�\�0',NULL),(_binary '\�0%�|A��Ȅ+b\�\�','2024-04-03 14:37:49.765588',_binary '\0','2024-04-03 14:37:49.765588','rnqhstmd0218@gmail.com','구본승','1234','01094010285',_binary '\�1\�\�PDF\��h\�ϯC',NULL),(_binary '\�M��@m��6{�\�\�_','2024-04-03 14:10:05.017990',_binary '\0','2024-04-03 14:10:05.017990',NULL,'빵데징',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '�^g�:O:�]\�=EE','2024-04-03 19:27:21.610445',_binary '\0','2024-04-03 19:27:21.610445',NULL,'등읍앙',NULL,NULL,_binary '��=�M+��2�\"}�w',_binary 'P\�@�H�1A#w8%'),(_binary '�\��L��y^7���E','2024-04-03 19:27:21.595045',_binary '\0','2024-04-03 19:27:21.595045',NULL,'뭬심땁',NULL,NULL,_binary '��=�M+��2�\"}�w',_binary 'P\�@�H�1A#w8%'),(_binary '�w�)AY�h\\�\�\�?','2024-04-03 19:07:27.418505',_binary '\0','2024-04-03 19:07:27.418505',NULL,'흠늄뿜',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v'),(_binary '��\0O��U2��\0�\\','2024-04-03 14:00:19.478522',_binary '\0','2024-04-03 14:00:19.478522','rnqhstmd0219@gmail.com','구본승','1234','01094010286',_binary '\rb�s��H���H\�7=�',NULL),(_binary '�O8ȼNO�=:\�\�|#','2024-04-03 14:10:05.134556',_binary '\0','2024-04-03 14:10:05.134556',NULL,'샜흼찝',NULL,NULL,_binary '\�1\�\�PDF\��h\�ϯC',_binary '�D��K��GT�ɵI'),(_binary '��6\�w\�BH�8*ڿ,�','2024-04-03 19:07:27.460821',_binary '\0','2024-04-03 19:07:27.460821',NULL,'맷찬늄',NULL,NULL,_binary '��=ƷNI߈\��5\�+P�',_binary '�\�\�v�Fi���\�q2�v');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04  9:24:50
