-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 27, 2021 at 04:29 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forum`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `question_id`, `user_id`, `answer`, `date`) VALUES
(26, 18, 9, '<p>Communism is a political theory derived from Karl Marx, advocating class war and leading to a society in which all property is publicly owned and each person works and is paid according to their abilities and needs.</p>', '2021-11-02'),
(27, 18, 9, '<p>Communism is a political theory derived from Karl Marx, advocating class war and leading to a society in which all property is publicly owned and each person works and is paid according to their abilities and needs.</p>', '2021-11-02'),
(28, 19, 9, 'the deliberate killing of a large number of people from a particular nation or ethnic group with the aim of destroying that nation or group<div>\"a campaign of genocide\"</div>', '2021-11-02'),
(29, 20, 9, '<p>The final battles of the European Theatre of World War II, as well as the overall surrender of Nazi Germany to the Allies, took place in late April and early May 1945</p>', '2021-11-02');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `date` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `title`, `date`, `user_id`) VALUES
(18, '<p>What do you think about Communism ?</p><p><img src=\"https://static.wikia.nocookie.net/turtledove/images/e/ec/Communist_Flag.jpg/revision/latest?cb=20131020230958\" style=\"width: 338px;\" data-filename=\"\"><br></p>', '2021-11-02', 9),
(19, '<p>What is genocide ?</p><p><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIka19N6sPoZY1eRrOXf1KCL6AkCNkN1-lcg&amp;usqp=CAU\" style=\"width: 338px;\" data-filename=\"\"></p>', '2021-11-02', 9),
(20, '<p>When Germany Surrender in World War 2?</p><p><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96xmrcbpPt4CwRp4xnCnIGsCpBEQfXRUWfg&amp;usqp=CAU\" style=\"width: 338px;\" data-filename=\"\"><br></p>', '2021-11-02', 9);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(31) NOT NULL,
  `name` varchar(31) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`) VALUES
(1, 'irfang@gmail.com', 'Irfan Gusfano', '$2a$08$09HSlyOnlxvTWUmiHmMgG.miAhW3T8TAQOL545.HPDaCXA1m2Fv2O'),
(2, 'gentarj@gmail.com', 'Gentar J', '$2a$08$.18y0yO3pNlTA6r7K0LBfeHIrODKRczqeZ6dEmflyeITzN3Fj2UDm'),
(3, 'wiraputra@gmail.com', 'Wira Putra A', '$2a$08$s5H4YlaAisMSkzsuec5w4.tSl1aaxICakb/GcnFXaTTn9M8rFcRhy'),
(4, 'difa@gmail.com', 'Difa Hafiyyan', '$2a$08$5qpnRrZONzIRBirgGRiKJ.r9tb5TG4llvTnuMHgVbuqAf6Fv5Tp3a'),
(5, 'ranggajs@gmail.com', 'Mohammad Rangga J', '$2a$08$SGnp3O0vhB4YP66QXP8W8OxZd4jLXev/HgN/WuBF/rmqyaRPPY9oi'),
(6, 'imrantimurovskiy@gmail.com', 'Imran Timur', '$2a$08$hFYHyuSvBC81HyQzVx37K.SCk7hnxHZ1byjCH0AXc2lNJFMOixaua'),
(9, 'imrantimur@gmail.com', 'Imran TImur', '$2a$08$wYBBpeztNdR.F2jS73IEeug4Rn6n.fUZAtzC15FxilRoQ4ezPcRe.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
