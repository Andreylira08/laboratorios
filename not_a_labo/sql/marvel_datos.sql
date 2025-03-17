-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2025 at 02:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `not_a_labo`
--

-- --------------------------------------------------------

--
-- Table structure for table `marvels`
--

CREATE TABLE `marvels` (
  `ID` int(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `marvels`
--

INSERT INTO `marvels` (`ID`, `nombre`, `created_at`) VALUES
(1, 'magneto', '2025-03-10 02:27:40'),
(2, 'magneto', '2025-03-10 02:28:00'),
(3, 'magneto', '2025-03-10 02:35:30'),
(4, 'magneto', '2025-03-10 02:42:20'),
(5, 'Spiderman', '2025-03-10 15:05:33'),
(6, 'spiderman', '2025-03-17 01:18:22'),
(7, 'iron man', '2025-03-17 01:18:31');

-- --------------------------------------------------------

--
-- Table structure for table `posee`
--

CREATE TABLE `posee` (
  `id_rol` int(11) NOT NULL,
  `id_privilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`, `created_at`) VALUES
(1, 'ver heroes', '2025-03-17 01:20:45'),
(2, 'agregar heroes', '2025-03-17 01:21:07');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `created_at`) VALUES
(1, 'lider', '2025-03-17 01:21:31'),
(2, 'colaborador', '2025-03-17 01:22:15'),
(3, 'superadmin', '2025-03-17 01:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `tiene`
--

CREATE TABLE `tiene` (
  `id_usuario` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `tiene`
--

INSERT INTO `tiene` (`id_usuario`, `id_rol`, `created_at`) VALUES
(1, 2, '2025-03-17 01:24:44'),
(2, 3, '2025-03-17 01:24:59'),
(3, 3, '2025-03-17 01:25:25'),
(4, 2, '2025-03-17 01:25:33');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'Andrey', 'hola', '2025-03-16 22:47:56'),
(2, 'Kikin', '$2b$12$YORaJMQTGeyqv/yVcpaiB.rZRjAN6M3MQEKaypx48LKqbf5jtG1A.', '2025-03-16 23:02:10'),
(3, 'Pelon', '$2b$12$nglQoNA9CBrXFliuJYvyt.bvVpEW6wyD2nZZ5YUKm.M.D7n.3kPay', '2025-03-16 23:04:55'),
(4, 'Claudia', '$2b$12$RXhejaYfXUdeFAlrvYDuOe.Op3NTPjPBfCLUH4Vnkd1Sww2wkXEVa', '2025-03-17 01:17:34'),
(5, 'Rick', '$2b$12$RvL07ZtdBe8xpVG4Tt7QOugoq5YqqZQFt/PyedvymzBAAcKDuDrNa', '2025-03-17 01:17:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `marvels`
--
ALTER TABLE `marvels`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `posee`
--
ALTER TABLE `posee`
  ADD PRIMARY KEY (`id_rol`,`id_privilegio`),
  ADD KEY `privilegio_id` (`id_privilegio`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`id_usuario`,`id_rol`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `marvels`
--
ALTER TABLE `marvels`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posee`
--
ALTER TABLE `posee`
  ADD CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`id_privilegio`) REFERENCES `privilegios` (`id`);

--
-- Constraints for table `tiene`
--
ALTER TABLE `tiene`
  ADD CONSTRAINT `tiene_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `tiene_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
