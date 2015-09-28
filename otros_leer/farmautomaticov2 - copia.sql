-- MySQL dump 10.13  Distrib 5.6.26, for Win64 (x86_64)
--
-- Host: localhost    Database: farmautomaticov2
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `centrosmedicos`
--

DROP TABLE IF EXISTS `centrosmedicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `centrosmedicos` (
  `idCentrosMedicos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `comunas_idcomunas` int(11) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `esPublico` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idCentrosMedicos`),
  KEY `fk_CentrosMedicos_comunas1_idx` (`comunas_idcomunas`),
  CONSTRAINT `fk_CentrosMedicos_comunas1` FOREIGN KEY (`comunas_idcomunas`) REFERENCES `comunas` (`idcomunas`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centrosmedicos`
--

LOCK TABLES `centrosmedicos` WRITE;
/*!40000 ALTER TABLE `centrosmedicos` DISABLE KEYS */;
INSERT INTO `centrosmedicos` VALUES (1,'ACHS ACONCAGUA - SEDE CABILDO',48,'Humeres 371',0),(2,'ACHS ACONCAGUA - SEDE LA LIGUA',59,'Portales 746',0),(3,'ACHS ACONCAGUA - SEDE LOS ANDES',66,'Av. Argentina 50',0),(4,'ACHS ACONCAGUA - SEDE SAN FELIPE',60,'San Martin 120',0),(5,'ACHS SAN ANTONIO - SEDE SAN ANTONIO',42,'Barros Luco 1575',0),(6,'ACHS VALPARAISO - SEDE VALPARAISO',34,'Edwards 150',0),(7,'ACHS VIÑA DEL MAR - SEDE LA CALERA',50,'Avenida Latorre 98',0),(8,'ACHS VIÑA DEL MAR - SEDE VIÑA DEL MAR',37,'7 Norte 550',0),(9,'ASOMEL ASOCIACION DE MEDICOS LTDA',34,'Colon 2020',0),(10,'ASOMEL DE REÑACA',37,'Angamos 185 Of. 21',0);
/*!40000 ALTER TABLE `centrosmedicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comunas`
--

DROP TABLE IF EXISTS `comunas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comunas` (
  `idcomunas` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `regiones_idregiones` int(11) NOT NULL,
  PRIMARY KEY (`idcomunas`),
  KEY `fk_comunas_regiones1_idx` (`regiones_idregiones`),
  CONSTRAINT `fk_comunas_regiones1` FOREIGN KEY (`regiones_idregiones`) REFERENCES `regiones` (`idregiones`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunas`
--

LOCK TABLES `comunas` WRITE;
/*!40000 ALTER TABLE `comunas` DISABLE KEYS */;
INSERT INTO `comunas` VALUES (1,'ARICA',15),(2,'IQUIQUE',1),(3,'HUARA',1),(4,'PICA',1),(5,'POZO ALMONTE',1),(6,'TOCOPILLA',2),(7,'ANTOFAGASTA',2),(8,'MEJILLONES',2),(9,'TALTAL',2),(10,'CALAMA',2),(11,'CHAÑARAL',3),(12,'DIEGO DE ALMAGRO',3),(13,'COPIAPO',3),(14,'CALDERA',3),(15,'TIERRA AMARILLA',3),(16,'VALLENAR',3),(17,'FREIRINA',3),(18,'HUASCO',3),(19,'LA SERENA',4),(20,'LA HIGUERA',4),(21,'COQUIMBO',4),(22,'ANDACOLLO',4),(23,'VICUÑA',4),(24,'PAIHUANO',4),(25,'OVALLE',4),(26,'MONTE PATRIA',4),(27,'PUNITAQUI',4),(28,'RIO HURTADO',4),(29,'COMBARBALA',4),(30,'ILLAPEL',4),(31,'CANELA',4),(32,'SALAMANCA',4),(33,'LOS VILOS',4),(34,'VALPARAISO',5),(35,'QUINTERO',5),(36,'PUCHUNCAVI',5),(37,'VIÑA DEL MAR',5),(38,'QUILPUE',5),(39,'VILLA ALEMANA',5),(40,'CASABLANCA',5),(41,'ISLA DE PASCUA',5),(42,'SAN ANTONIO',5),(43,'SANTO DOMINGO',5),(44,'ALGARROBO',5),(45,'EL QUISCO',5),(46,'CARTAGENA',5),(47,'EL TABO',5),(48,'QUILLOTA',5),(49,'LA CRUZ',5),(50,'LA CALERA',5),(51,'HIJUELAS',5),(52,'NOGALES',5),(53,'LIMACHE',5),(54,'OLMUE',5),(55,'PETORCA',5),(56,'CABILDO',5),(57,'PAPUDO',5),(58,'ZAPALLAR',5),(59,'LA LIGUA',5),(60,'SAN FELIPE',5),(61,'PUTAENDO',5),(62,'PANQUEHUE',5),(63,'CATEMU',5),(64,'SANTA MARIA',5),(65,'LLAY LLAY',5),(66,'LOS ANDES',5),(67,'CALLE LARGA',5),(68,'RINCONADA',5),(69,'SAN ESTEBAN',5),(70,'SANTIAGO CENTRO',13),(71,'LAS CONDES',13),(72,'PROVIDENCIA',13),(73,'SANTIAGO OESTE',13),(75,'CONCHALI',13),(76,'COLINA',13),(77,'RENCA',13),(78,'LAMPA',13),(79,'QUILICURA',13),(80,'TIL-TIL',13),(81,'QUINTA NORMAL',13),(82,'PUDAHUEL',13),(83,'CURACAVI',13),(84,'SANTIAGO SUR',13),(85,'PEÑAFLOR',13),(86,'TALAGANTE',13),(87,'ISLA DE MAIPO',13),(88,'MELIPILLA',13),(89,'EL MONTE',13),(90,'MARIA PINTO',13),(91,'ÑUÑOA',13),(92,'LA REINA',13),(93,'LA FLORIDA',13),(94,'MAIPU',13),(95,'SAN MIGUEL',13),(96,'LA CISTERNA',13),(97,'LA GRANJA',13),(98,'SAN BERNARDO',13),(99,'CALERA DE TANGO',13),(100,'PUENTE ALTO',13),(101,'PIRQUE',13),(102,'SAN JOSE DE MAIPO',13),(103,'BUIN',13),(104,'PAINE',13),(105,'RANCAGUA',6),(106,'MACHALI',6),(107,'GRANEROS',6),(108,'SAN PEDRO',13),(109,'ALHUE',13),(110,'CODEGUA',6),(111,'SAN FRANCISCO DE MOSTAZAL',6),(112,'DOÑIHUE',6),(113,'COLTAUCO',6),(114,'COINCO',6),(115,'PEUMO',6),(116,'LAS CABRAS',6),(117,'SAN VICENTE',6),(118,'PICHIDEGUA',6),(119,'REQUINOA',6),(120,'OLIVAR',6),(121,'RENGO',6),(122,'MALLOA',6),(123,'QUINTA DE TILCOCO',6),(124,'SAN FERNANDO',6),(125,'CHIMBARONGO',6),(126,'NANCAGUA',6),(127,'PLACILLA',6),(128,'SANTA CRUZ',6),(129,'LOLOL',6),(130,'PALMILLA',6),(131,'PERALILLO',6),(132,'CHEPICA',6),(133,'PAREDONES',6),(134,'MARCHIGUE',6),(135,'PUMANQUE',6),(136,'LITUECHE',6),(137,'PICHILEMU',6),(138,'NAVIDAD',6),(139,'LA ESTRELLA',6),(140,'CURICO',7),(141,'ROMERAL',7),(142,'TENO',7),(143,'RAUCO',7),(144,'HUALA?âÔÇÿE',7),(145,'LICANTEN',7),(146,'VICHUQUEN',7),(147,'MOLINA',7),(148,'SAGRADA FAMILIA',7),(149,'RIO CLARO',7),(150,'TALCA',7),(151,'SAN CLEMENTE',7),(152,'PELARCO',7),(153,'PENCAHUE',7),(154,'MAULE',7),(155,'CUREPTO',7),(156,'SAN JAVIER',7),(157,'CONSTITUCION',7),(158,'EMPEDRADO',7),(159,'LINARES',7),(160,'YERBAS BUENAS',7),(161,'COLBUN',7),(162,'LONGAVI',7),(163,'VILLA ALEGRE',7),(164,'PARRAL',7),(165,'RETIRO',7),(166,'CAUQUENES',7),(167,'CHANCO',7),(168,'CHILLAN',8),(169,'PINTO',8),(170,'COIHUECO',8),(171,'PORTEZUELO',8),(172,'QUIRIHUE',8),(173,'TREHUACO',8),(174,'NINHUE',8),(175,'COBQUECURA',8),(176,'SAN CARLOS',8),(177,'SAN GREGORIO DE ÑIQUEN',8),(178,'SAN FABIAN',8),(179,'SAN NICOLAS',8),(180,'BULNES',8),(181,'SAN IGNACIO',8),(182,'QUILLON',8),(183,'YUNGAY',8),(184,'PEMUCO',8),(185,'EL CARMEN',8),(186,'COELEMU',8),(187,'RANQUIL',8),(188,'CONCEPCION',8),(189,'TALCAHUANO',8),(190,'TOME',8),(191,'PENCO',8),(192,'HUALQUI',8),(193,'FLORIDA',8),(194,'CORONEL',8),(195,'LOTA',8),(196,'SANTA JUANA',8),(197,'CURANILAHUE',8),(198,'ARAUCO',8),(199,'LEBU',8),(200,'LOS ALAMOS',8),(201,'CAÑETE',8),(202,'CONTULMO',8),(203,'TIRUA',8),(204,'LOS ANGELES',8),(205,'SANTA BARBARA',8),(206,'QUILLECO',8),(207,'YUMBEL',8),(208,'CABRERO',8),(209,'TUCAPEL',8),(210,'LAJA',8),(211,'SAN ROSENDO',8),(212,'NACIMIENTO',8),(213,'NEGRETE',8),(214,'MULCHEN',8),(215,'QUILACO',8),(216,'ANGOL',9),(217,'PUREN',9),(218,'LOS SAUCES',9),(219,'RENAICO',9),(220,'COLLIPULLI',9),(221,'ERCILLA',9),(222,'TRAIGUEN',9),(223,'LUMACO',9),(224,'VICTORIA',9),(225,'CURACAUTIN',9),(226,'LONQUIMAY',9),(227,'TEMUCO',9),(228,'VILCUN',9),(229,'FREIRE',9),(230,'CUNCO',9),(231,'LAUTARO',9),(232,'GALVARINO',9),(233,'PERQUENCO',9),(234,'NUEVA IMPERIAL',9),(235,'CARAHUE',9),(236,'PUERTO SAAVEDRA',9),(237,'PITRUFQUEN',9),(238,'GORBEA',9),(239,'TOLTEN',9),(240,'LONCOCHE',9),(241,'VILLARRICA',9),(242,'PUCON',9),(243,'VALDIVIA',14),(244,'CORRAL',14),(245,'MARIQUINA',14),(246,'MAFIL',14),(247,'LOS LAGOS',14),(248,'FUTRONO',14),(249,'LANCO',14),(250,'PANGUIPULLI',14),(251,'LA UNION',14),(252,'PAILLACO',14),(253,'RIO BUENO',14),(254,'LAGO RANCO',14),(255,'OSORNO',10),(256,'PUYEHUE',10),(257,'SAN PABLO',10),(258,'PUERTO OCTAY',10),(259,'RIO NEGRO',10),(260,'PURRANQUE',10),(261,'PUERTO MONTT',10),(262,'COCHAMO',10),(263,'MAULLIN',10),(264,'LOS MUERMOS',10),(265,'CALBUCO',10),(266,'PUERTO VARAS',10),(267,'LLANQUIHUE',10),(268,'FRESIA',10),(269,'FRUTILLAR',10),(270,'CASTRO',10),(271,'CHONCHI',10),(272,'QUEILEN',10),(273,'QUELLON',10),(274,'PUQUELDON',10),(275,'QUINCHAO',10),(276,'CURACO DE VELEZ',10),(277,'ANCUD',10),(278,'QUEMCHI',10),(279,'DALCAHUE',10),(280,'CHAITEN',10),(281,'FUTALEUFU',10),(282,'PALENA',10),(284,'COYHAIQUE',11),(285,'AYSEN',11),(286,'CISNES',11),(287,'CHILE CHICO',11),(288,'RIO IBAÑEZ',11),(289,'COCHRANE',11),(290,'PUNTA ARENAS',12),(291,'PUERTO NATALES',12),(292,'PORVENIR',12),(293,'GENERAL LAGOS',15),(294,'PUTRE',15),(295,'CAMARONES',15),(296,'CAMINA',1),(297,'COLCHANE',1),(298,'MARIA ELENA',2),(299,'SIERRA GORDA',2),(300,'OLLAGÜE',2),(301,'SAN PEDRO DE ATACAMA',2),(302,'ALTO DEL CARMEN',3),(303,'ANTUCO',8),(304,'MELIPEUCO',9),(305,'CURARREHUE',9),(306,'TEODORO SCHMIDT',9),(307,'SAN JUAN DE LA COSTA',10),(308,'HUALAIHUE',10),(309,'GUAITECAS',11),(310,'O\'HIGGINS',11),(311,'TORTEL',11),(312,'LAGO VERDE',11),(313,'TORRES DEL PAINE',12),(314,'RIO VERDE',12),(315,'SAN GREGORIO',12),(316,'LAGUNA BLANCA',12),(317,'PRIMAVERA',12),(318,'TIMAUKEL',12),(319,'NAVARINO',12),(320,'PELLUHUE',7),(321,'JUAN FERNANDEZ',5),(322,'PEÑALOLEN',13),(323,'MACUL',13),(324,'CERRO NAVIA',13),(325,'LO PRADO',13),(326,'SAN RAMON',13),(327,'LA PINTANA',13),(328,'ESTACION CENTRAL',13),(329,'RECOLETA',13),(330,'INDEPENDENCIA',13),(331,'VITACURA',13),(332,'LO BARNECHEA',13),(333,'CERRILLOS',13),(334,'HUECHURABA',13),(335,'SAN JOAQUIN',13),(336,'PEDRO AGUIRRE CERDA',13),(337,'LO ESPEJO',13),(338,'EL BOSQUE',13),(339,'PADRE HURTADO',13),(340,'CONCON',5),(341,'SAN RAFAEL',7),(342,'CHILLAN VIEJO',8),(343,'SAN PEDRO DE LA PAZ',8),(344,'CHIGUAYANTE',8),(345,'PADRE LAS CASAS',9),(346,'ALTO HOSPICIO',1);
/*!40000 ALTER TABLE `comunas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enfermedad`
--

DROP TABLE IF EXISTS `enfermedad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enfermedad` (
  `nombre_enfermedad` varchar(45) NOT NULL,
  PRIMARY KEY (`nombre_enfermedad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enfermedad`
--

LOCK TABLES `enfermedad` WRITE;
/*!40000 ALTER TABLE `enfermedad` DISABLE KEYS */;
/*!40000 ALTER TABLE `enfermedad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enfermedades_tiene_especialistas`
--

DROP TABLE IF EXISTS `enfermedades_tiene_especialistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enfermedades_tiene_especialistas` (
  `enfermedad_nombre_enfermedad` varchar(45) NOT NULL,
  `especialistas_id_especialista` int(11) NOT NULL,
  PRIMARY KEY (`enfermedad_nombre_enfermedad`,`especialistas_id_especialista`),
  KEY `fk_enfermedades_tiene_especialistas_especialistas1_idx` (`especialistas_id_especialista`),
  CONSTRAINT `fk_enfermedades_tiene_especialistas_enfermedad1` FOREIGN KEY (`enfermedad_nombre_enfermedad`) REFERENCES `enfermedad` (`nombre_enfermedad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_enfermedades_tiene_especialistas_especialistas1` FOREIGN KEY (`especialistas_id_especialista`) REFERENCES `especialistas` (`id_especialista`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enfermedades_tiene_especialistas`
--

LOCK TABLES `enfermedades_tiene_especialistas` WRITE;
/*!40000 ALTER TABLE `enfermedades_tiene_especialistas` DISABLE KEYS */;
/*!40000 ALTER TABLE `enfermedades_tiene_especialistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialistas`
--

DROP TABLE IF EXISTS `especialistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especialistas` (
  `id_especialista` int(11) NOT NULL,
  `nombre_especialista` varchar(45) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `especialidad` varchar(45) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `comunas_idcomunas` int(11) NOT NULL,
  PRIMARY KEY (`id_especialista`),
  KEY `fk_especialistas_comunas1_idx` (`comunas_idcomunas`),
  CONSTRAINT `fk_especialistas_comunas1` FOREIGN KEY (`comunas_idcomunas`) REFERENCES `comunas` (`idcomunas`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialistas`
--

LOCK TABLES `especialistas` WRITE;
/*!40000 ALTER TABLE `especialistas` DISABLE KEYS */;
/*!40000 ALTER TABLE `especialistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmacia`
--

DROP TABLE IF EXISTS `farmacia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `farmacia` (
  `nombre` int(11) NOT NULL,
  `turno` varchar(45) DEFAULT NULL,
  `comunas_idcomunas` int(11) NOT NULL,
  `coordenada1` int(11) DEFAULT NULL,
  `coordenada2` int(11) DEFAULT NULL,
  `hora_atencion` varchar(45) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`nombre`),
  KEY `fk_farmacia_comunas1_idx` (`comunas_idcomunas`),
  CONSTRAINT `fk_farmacia_comunas1` FOREIGN KEY (`comunas_idcomunas`) REFERENCES `comunas` (`idcomunas`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmacia`
--

LOCK TABLES `farmacia` WRITE;
/*!40000 ALTER TABLE `farmacia` DISABLE KEYS */;
/*!40000 ALTER TABLE `farmacia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regiones`
--

DROP TABLE IF EXISTS `regiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `regiones` (
  `idregiones` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idregiones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regiones`
--

LOCK TABLES `regiones` WRITE;
/*!40000 ALTER TABLE `regiones` DISABLE KEYS */;
INSERT INTO `regiones` VALUES (1,'Tarapacá'),(2,'Antofagasta'),(3,'Atacama'),(4,'Coquimbo'),(5,'Valparaíso'),(6,'Región del Libertador Gral. Bernardo O\'Higgins'),(7,'Región del Maule'),(8,'Región del Biobío'),(9,'Región de la Araucanía'),(10,'Región de Los Lagos'),(11,'Región Aisén del Gral. Carlos Ibáñez del Campo'),(12,'Región de Magallanes y de la Antártica Chilena'),(13,'Región Metropolitana de Santiago'),(14,'Región de Los Ríos'),(15,'Arica y Parinacota');
/*!40000 ALTER TABLE `regiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remedios`
--

DROP TABLE IF EXISTS `remedios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `remedios` (
  `nombre` varchar(100) NOT NULL,
  `indicaciones` text,
  `contraindicaciones` text,
  `conservacion` text,
  `interacciones` text,
  `otrosdatos` text,
  PRIMARY KEY (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remedios`
--

LOCK TABLES `remedios` WRITE;
/*!40000 ALTER TABLE `remedios` DISABLE KEYS */;
INSERT INTO `remedios` VALUES ('Loratadina','para la alergia','no se','En lugar Fresco y seco','ninguna',NULL),('Omeprazol','Para el reflujo','No comer por un rato','En lugar Fresco y seco','Con la comida','ninguno');
/*!40000 ALTER TABLE `remedios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonocm`
--

DROP TABLE IF EXISTS `telefonocm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonocm` (
  `telefono` varchar(20) NOT NULL,
  `CentrosMedicos_idCentrosMedicos` int(11) NOT NULL,
  PRIMARY KEY (`telefono`,`CentrosMedicos_idCentrosMedicos`),
  KEY `fk_telefonoCM_CentrosMedicos_idx` (`CentrosMedicos_idCentrosMedicos`),
  CONSTRAINT `fk_telefonoCM_CentrosMedicos` FOREIGN KEY (`CentrosMedicos_idCentrosMedicos`) REFERENCES `centrosmedicos` (`idCentrosMedicos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonocm`
--

LOCK TABLES `telefonocm` WRITE;
/*!40000 ALTER TABLE `telefonocm` DISABLE KEYS */;
INSERT INTO `telefonocm` VALUES ('2761551',1),('2711265',2),('2422797',3),('2511482',4),('2261000',5),('2206210',6),('2221686',7),('2657700',8),('2217194',9),('(32) 2890133',10),('2685758',10);
/*!40000 ALTER TABLE `telefonocm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonoespecialista`
--

DROP TABLE IF EXISTS `telefonoespecialista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonoespecialista` (
  `telefono` varchar(20) NOT NULL,
  `especialistas_id_especialista` int(11) NOT NULL,
  PRIMARY KEY (`telefono`,`especialistas_id_especialista`),
  KEY `fk_telefonoEspecialista_especialistas1_idx` (`especialistas_id_especialista`),
  CONSTRAINT `fk_telefonoEspecialista_especialistas1` FOREIGN KEY (`especialistas_id_especialista`) REFERENCES `especialistas` (`id_especialista`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonoespecialista`
--

LOCK TABLES `telefonoespecialista` WRITE;
/*!40000 ALTER TABLE `telefonoespecialista` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonoespecialista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonofarmacia`
--

DROP TABLE IF EXISTS `telefonofarmacia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonofarmacia` (
  `telefono` varchar(20) NOT NULL,
  `farmacia_nombre` int(11) NOT NULL,
  PRIMARY KEY (`telefono`,`farmacia_nombre`),
  KEY `fk_telefonoFarmacia_farmacia1_idx` (`farmacia_nombre`),
  CONSTRAINT `fk_telefonoFarmacia_farmacia1` FOREIGN KEY (`farmacia_nombre`) REFERENCES `farmacia` (`nombre`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonofarmacia`
--

LOCK TABLES `telefonofarmacia` WRITE;
/*!40000 ALTER TABLE `telefonofarmacia` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonofarmacia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `foto` varchar(40) DEFAULT NULL,
  `contrasena` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Erick','fotoerick.jpg','farmautomatico',NULL),(2,'Jorge','fotojorge.jpg','farmautomatico',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_comenta_remedio`
--

DROP TABLE IF EXISTS `usuarios_comenta_remedio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_comenta_remedio` (
  `idcomentarios` int(11) NOT NULL AUTO_INCREMENT,
  `remedios_nombre` varchar(100) NOT NULL,
  `usuario_idusuario` int(11) NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `fecha_comentario` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcomentarios`,`remedios_nombre`,`usuario_idusuario`),
  KEY `fk_remedios_has_usuario_usuario1_idx` (`usuario_idusuario`),
  KEY `fk_remedios_comenta_usuarios_remedios1_idx` (`remedios_nombre`),
  CONSTRAINT `fk_remedios_comenta_usuarios_remedios1` FOREIGN KEY (`remedios_nombre`) REFERENCES `remedios` (`nombre`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_remedios_has_usuario_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_comenta_remedio`
--

LOCK TABLES `usuarios_comenta_remedio` WRITE;
/*!40000 ALTER TABLE `usuarios_comenta_remedio` DISABLE KEYS */;
INSERT INTO `usuarios_comenta_remedio` VALUES (1,'Loratadina',1,'Este es mi primer comentario en loratadina','2015-09-24 23:33:00'),(2,'Omeprazol',1,'Este es mi primer comentario, ingresado desde a BD','2015-09-24 23:33:00'),(3,'Omeprazol',2,'Este es mi primer comentario aburrido','2015-09-24 23:33:00'),(4,'Loratadina',2,'ingresado desde la consola','2015-09-24 23:33:00'),(5,'Omeprazol',1,'Ingrese su comentario','2015-09-24 23:33:00'),(6,'Omeprazol',1,'Ingrese su comentario','2015-09-24 23:33:00'),(7,'Omeprazol',1,'Ingrese su comentario','2015-09-24 23:33:00'),(8,'Loratadina',2,'Blablabla ingresado desde la página','2015-09-24 23:33:00'),(9,'Loratadina',2,'Blablabla ingresado desde la página','2015-09-24 23:33:00');
/*!40000 ALTER TABLE `usuarios_comenta_remedio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-24 23:33:41
