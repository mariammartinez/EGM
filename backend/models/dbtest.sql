-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `elgrimorio` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `elgrimorio`;

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

INSERT INTO `ingredients` (`id`, `name`, `description`) VALUES
(1,	'Coco rallado',	'Sirve para decorar'),
(2,	'Chocolate en polvo',	'Puede ser utilizado como ingrediente de una receta o para decorar'),
(3,	'Menta',	'Hojas frescas'),
(4,	'Lavanda',	'Hojas'),
(5,	'Naranja',	'Jugo'),
(6,	'champange',	''),
(7,	'huevos',	''),
(8,	'Limon',	''),
(9,	'Azucar',	''),
(10,	'Miel',	''),
(11,	'Canela',	''),
(12,	'Levadura',	''),
(13,	'Mantequilla',	''),
(14,	'Harina de trigo',	''),
(15,	'Leche',	''),
(16,	'Leche en polvo',	''),
(17,	'Agua',	''),
(18,	'Mermelada de albaricoque',	''),
(19,	'Datiles secos',	''),
(20,	'Pasas',	''),
(21,	'Sal',	'');

CREATE TABLE `mix` (
  `recipe_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `recipe` (`recipe_id`),
  KEY `ingredient` (`ingredient_id`),
  CONSTRAINT `mix_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`),
  CONSTRAINT `mix_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `mix` (`recipe_id`, `ingredient_id`, `id`, `quantity`) VALUES
(2,	1,	1,	''),
(2,	14,	2,	''),
(3,	14,	3,	''),
(3,	16,	4,	''),
(3,	17,	5,	''),
(3,	18,	6,	''),
(3,	19,	7,	''),
(3,	20,	8,	''),
(3,	21,	9,	''),
(3,	1,	10,	''),
(3,	7,	11,	''),
(3,	9,	12,	''),
(3,	12,	13,	''),
(3,	13,	14,	'');

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `name` varchar(300) NOT NULL,
  `image` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

INSERT INTO `recipe` (`id`, `text`, `name`, `image`) VALUES
(1,	'aljgtlzqkj(gnkejngkjegyt',	'eyte(ya\"y',	''),
(2,	'Para hacer la masa: Precalienta el horno a 325°F\r\nColoca en un tazón la harina, azúcar, polvo para hornear, sal y mantequilla y batir con la batidora eléctrica a velocidad baja, hasta que todo esté integrado y se logre una consistencia arenosa.\r\nAgregue poco a poco la mitad de la leche y bata hasta integrar.\r\nMezcle el huevo, la vainilla y la leche restante y agregue a la mezcla y siga batiendo hasta que esté suave, pero sin batir en exceso.\r\nColocar la mezcla en los moldes de cupcakes a los que habrá colocado los capacillos y llevar al horno por unos 20 a 25 minutos y estén dorados. Pruebe si están listos insertando un palillo y si sale seco, están listos. Tenga cuidado de no hornearlos en exceso, ya que se pondrán duros.\r\nTransfiera los cupcakes a una rejilla para que se enfríen completamente antes de decorar.',	'Cupcake Vainilla',	'/public/img/cupcake-dark.jpg'),
(3,	'Para hacer un riquísimo pastel de luna chino comenzamos preparando la masa. Para ello ponemos en un bol la leche en polvo, la sal y la harina. Removemos bien y reservamos.\r\n\r\nAparte, en otro bol ponemos los huevos y el azúcar. Mezclamos bien y después le añadimos la mantequilla, previamente derretida en el microondas, y el extracto de vainilla. Volvemos a mezclar hasta que todos los ingredientes estén bien integrados.\r\nAgregamos la mezcla de leche en polvo, sal y harina a la mezcla que acabamos de preparar y removemos con una cuchara de madera hasta formar una masa homogénea.\r\n\r\nEnharinamos ligeramente la encimera y trabajamos la masa. Después, la damos una forma alargada, la cubrimos con film y la dejamos reposar en el frigorífico durante varias horas.\r\n\r\nPara hacer el relleno mezclamos bien en un bol la mermelada, los dátiles bien picados, las pasas y el coco. Reservamos.\r\n\r\nPonemos a precalentar el horno a 190º C, con calor por arriba y por abajo, y mientras se calienta forramos una bandeja de horno con papel de horno.\r\n\r\nSacamos la masa y la cortamos en rodajas que trabajaremos manualmente hasta formar un círculo aplanado de unos 8 centímetros de diámetro, procurando que el centro quede más gordito que los bordes.\r\n\r\nDentro de cada círculo ponemos un poco de relleno, procurando que no sea demasiado, para que no se salga. Después, juntamos los bordes, de manera que el relleno quede envuelto. Entonces damos forma a la masa con cuidado hasta convertirla en una bola.\r\n\r\nCogemos un molde redondo con el dibujo que queramos y lo enharinamos ligeramente. Después, metemos dentro la bola de masa, empujándola ligeramente con los dedos. A continuación, una vez que haya tomado el dibujo, desmoldamos, dando ligeros golpecitos en los bordes. Si no tienes molde, procura darle una forma redondeada con las manos y haz en la superficie el diseño que te guste con la ayuda de un tenedor.\r\n\r\nA continuación batimos un huevo y pintamos cada pastel con la ayuda de una brocha de cocina. Dejamos los pasteles en la bandeja de horno, pero ligeramente separados unos de otros. Introducimos la bandeja en el horno y dejamos que se hagan durante media hora aproximadamente, hasta que estén dorados. Sacamos del horno y dejamos enfriar antes de consumir. ¡Deliciosos!\r\n\r\n',	'Pastel de Luna',	'/public/img/mooncake.jpg');

-- 2020-10-17 08:15:28
