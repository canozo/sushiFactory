CREATE DATABASE IF NOT EXISTS `sushi_factory`;
USE `sushi_factory`;

-- Sushi
CREATE TABLE IF NOT EXISTS `sushi` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `salmon` VARCHAR(20) NOT NULL,
  `pepino` BOOLEAN NOT NULL,
  `aguacate` BOOLEAN NOT NULL,
  `queso` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla de Sushi';
