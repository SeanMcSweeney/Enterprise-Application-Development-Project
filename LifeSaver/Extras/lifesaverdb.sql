-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2020 at 07:19 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lifesaverdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `User` varchar(240) NOT NULL,
  `Score` varchar(240) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('Su3YAO37Sf-UH7AV_WQzlSzegY3cW_Ml', 1745421488, '{\"cookie\":{\"originalMaxAge\":157680000000,\"expires\":\"2025-04-23T15:18:07.768Z\",\"httpOnly\":false,\"path\":\"/\"},\"userID\":1}');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(240) COLLATE utf8_bin NOT NULL,
  `password` varchar(240) COLLATE utf8_bin NOT NULL,
  `email` varchar(240) COLLATE utf8_bin NOT NULL,
  `admin` varchar(240) COLLATE utf8_bin NOT NULL,
  `aboutme` varchar(240) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `admin`, `aboutme`) VALUES
(1, 'sean', '$2b$09$hxYngUc8MwyeWgQ8wApZBOBJTBrOANBwIIc1pVBd4Wlk65L/dx8fG', 'ssmcs@gmail.com', 'yes', 'i am'),
(2, 'jack', '$2b$09$hxYngUc8MwyeWgQ8wApZBOBJTBrOANBwIIc1pVBd4Wlk65L/dx8fG', 'jj@gmail', 'yes', 'i am'),
(3, 'sean1', '$2b$09$MkDPeq1hoIIimlzo.BmB0u5w0M.JJjA45p/KtvMsCDF1WI8gGaBsW', 'sean1@s.com', 'no', 'no'),
(4, 's1', '$2b$09$5RF8VbQlO0j8Ivl80u.lbuwbTOTER2FOXKQjgM6n4a3MQpYUOUFrO', 's1@gmail.com', 'no', 'none'),
(5, 'james', '$2b$09$Eo/WstWjZcAZgYXnUO/K7eZRcZhshe8g5tm7r8R2TKSYMSRzb3Aym', 'james@g.com', 'no', 'newinfo'),
(8, 'jack123', '$2b$09$1.Y7irQLnRTCRe1hxXpiPOUHCYk9g/u9hTZm3ntaHf2VY9FkbpKQC', 'jack2@gmail.com', 'no', 'change'),
(7, 'sss', '$2b$09$XhwN3WxHSLaeokC2FiLnxOkfWf9.W6YwgzlUIikd.nRz/9t026tgO', 'sss@sss.com', 'no', 'sss'),
(9, 'sean2', '$2b$09$CE69.6fbPgSllFj5BqUtZetTueljES5pQobp.ORtc0Wdr/EPm.YAu', 'sean2@gmail.com', 'no', 'sean2222'),
(10, 'sean3', '$2b$09$IKIa1oqjBiEJhJhlZB2NYeal2lMoPICPZADlV6Dpva59eSH3gq87W', 'sean@gmail.com', 'no', 'long');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
