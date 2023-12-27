-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-12-2023 a las 21:28:11
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sys-turnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL,
  `nombre_cliente` varchar(30) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `fecha_y_hora` datetime NOT NULL,
  `corte` tinyint(1) DEFAULT NULL,
  `peinado` tinyint(1) DEFAULT NULL,
  `alisado` tinyint(1) DEFAULT NULL,
  `tintura` tinyint(1) DEFAULT NULL,
  `observacion` varchar(35) DEFAULT NULL,
  `eliminado` tinyint(1) NOT NULL,
  `fecha_eliminado` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `nombre_cliente`, `telefono`, `fecha_y_hora`, `corte`, `peinado`, `alisado`, `tintura`, `observacion`, `eliminado`, `fecha_eliminado`) VALUES
(19, 'juan', '12345678', '2023-12-26 11:01:00', 1, 1, 1, 0, 'aa', 0, NULL),
(20, 'Juan Manuel', '12345677', '2023-12-27 23:00:00', 1, 1, 0, 0, '', 0, NULL),
(21, 'Juan Manuel', '23456', '2023-12-24 19:00:00', 1, 1, 0, 0, 'asdasd', 0, NULL),
(22, 'Tomas', '1234', '2023-12-23 16:00:00', 1, 1, 0, 0, 'Ya abono por Transferencia', 0, NULL),
(23, 'Oscar', '23456', '2023-12-28 17:20:00', 0, 0, 0, 1, 'asd', 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userslogin`
--

CREATE TABLE `userslogin` (
  `id` int(11) NOT NULL,
  `user` varchar(125) NOT NULL,
  `password` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `userslogin`
--

INSERT INTO `userslogin` (`id`, `user`, `password`) VALUES
(1, 'peluqueria', '03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `userslogin`
--
ALTER TABLE `userslogin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `userslogin`
--
ALTER TABLE `userslogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
