-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2019 at 02:50 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `social_network_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `hobbies`
--

CREATE TABLE `hobbies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hobbie_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hobbies`
--

INSERT INTO `hobbies` (`id`, `hobbie_name`, `created_at`, `updated_at`) VALUES
(1, 'Hiking', NULL, NULL),
(2, 'Hunting', NULL, NULL),
(3, 'Fishing', NULL, NULL),
(4, 'Archery', NULL, NULL),
(5, 'Cooking', NULL, NULL),
(6, 'Reading', NULL, NULL),
(7, 'Soccer', NULL, NULL),
(8, 'Beekeeping', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(3, '2014_10_12_000000_create_users_table', 1),
(4, '2014_10_12_100000_create_password_resets_table', 1),
(7, '2019_08_09_002542_create_user_details_columns', 2),
(9, '2019_08_14_201348_create_hobbies_table', 3),
(11, '2019_08_14_204527_create_user_hobbies_table', 4),
(12, '2019_08_16_023455_create_user_friends_users_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `api_token` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_birthday` date DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `api_token`, `user_birthday`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'roy ', '$2y$10$tYe0mmITkGGdM9ZX1vdP0uu.2yOySVU0qLM30Xe0WQF88NF8.gK6C', '', '1980-08-19', NULL, '2019-08-09 11:49:38', '2019-08-09 11:49:38'),
(2, 'amit ', '$2y$10$43YWyByNUW3iw5Yss.fihe.D0xjTJt38riOE9uMW2739wlt6mz5Va', '', '1980-08-18', NULL, '2019-08-09 11:50:19', '2019-08-09 11:50:19'),
(3, 'oren ', '$2y$10$zkbDf.nHtIYnxPaSCUhqiOpSB/t.oU6BLHXLh.FodI8VpgCA6uqnm', '', '1988-11-24', NULL, '2019-08-09 11:50:43', '2019-08-09 11:50:43'),
(4, 'yaniv ', '$2y$10$GGmgYnZoazAEPFpxVN1IIOXRwEbliYSd2K28gOiszNN/y.f5YR9TW', '', '1988-08-13', NULL, '2019-08-09 11:50:56', '2019-08-09 11:50:56'),
(5, 'shai ', '$2y$10$DysnENkC8vNazQ7/42m1OuWXUmyNg52pxLAnD8EqRzzIaOLpUVnja', '', '1981-09-03', NULL, '2019-08-09 11:51:11', '2019-08-09 11:51:11'),
(11, 'adi ', '$2y$10$.w7JuTXFZxUbty5Fb4085ONwWTe1kjA8xSZN6F.TxDXV4Mko3kxh6', '', '1980-08-12', NULL, '2019-08-11 21:57:24', '2019-08-11 21:57:24'),
(12, 'eran ', '$2y$10$7ePcMIoefLTiB7cPKSiV1eC/zj9pMl.BslmUDiF/Ut0n24nyl/SAK', '', '1980-08-01', NULL, '2019-08-11 21:57:51', '2019-08-11 21:57:51'),
(13, 'Nir ', '$2y$10$7ePcMIoefLTiB7cPKSiV1eC/zj9pMl.BslmUDiF/Ut0n24nyl/SAK', '', '1988-08-17', NULL, '2019-08-20 21:00:00', '2019-08-27 21:00:00'),
(14, 'Ron ', '$2y$10$7ePcMIoefLTiB7cPKSiV1eC/zj9pMl.BslmUDiF/Ut0n24nyl/SAK', '', '1988-08-23', NULL, '2019-08-20 21:00:00', '2019-08-21 21:00:00'),
(15, 'test', '$2y$10$RpcKF1QdU4r7LTBieclawuprcHrYqL/./EbCelva6Ij27OUj2kkV6', '', NULL, NULL, '2019-08-17 23:27:04', '2019-08-17 23:27:04'),
(16, 'foo', '$2y$10$skY9r9Hhoj3b.NZr36R1Juu7IF/n8KUnpLORgDGluCMfZl/4LBnUG', '', NULL, NULL, '2019-08-17 23:34:43', '2019-08-17 23:34:43');

-- --------------------------------------------------------

--
-- Table structure for table `user_friends`
--

CREATE TABLE `user_friends` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_friends`
--

INSERT INTO `user_friends` (`id`, `user_id`, `friend_id`, `created_at`, `updated_at`) VALUES
(5, 2, 1, NULL, NULL),
(6, 2, 4, NULL, NULL),
(7, 2, 11, NULL, NULL),
(8, 3, 4, NULL, NULL),
(9, 3, 1, NULL, NULL),
(10, 4, 2, NULL, NULL),
(11, 5, 1, NULL, NULL),
(12, 5, 3, NULL, NULL),
(13, 11, 12, NULL, NULL),
(16, 13, 11, NULL, NULL),
(17, 13, 3, NULL, NULL),
(18, 13, 2, NULL, NULL),
(19, 14, 11, NULL, NULL),
(20, 14, 5, NULL, NULL),
(21, 14, 1, NULL, NULL),
(22, 13, 1, NULL, NULL),
(69, 12, 3, NULL, NULL),
(72, 12, 5, NULL, NULL),
(73, 12, 4, NULL, NULL),
(74, 12, 2, NULL, NULL),
(75, 12, 11, NULL, NULL),
(78, 15, 3, NULL, NULL),
(79, 15, 4, NULL, NULL),
(80, 15, 5, NULL, NULL),
(81, 15, 13, NULL, NULL),
(82, 15, 12, NULL, NULL),
(83, 1, 13, NULL, NULL),
(84, 1, 4, NULL, NULL),
(85, 1, 14, NULL, NULL),
(86, 1, 11, NULL, NULL),
(87, 1, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_hobbies`
--

CREATE TABLE `user_hobbies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `hobby_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_hobbies`
--

INSERT INTO `user_hobbies` (`id`, `user_id`, `hobby_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 5, NULL, NULL),
(3, 1, 6, NULL, NULL),
(4, 1, 8, NULL, NULL),
(5, 1, 2, NULL, NULL),
(6, 2, 5, NULL, NULL),
(7, 2, 4, NULL, NULL),
(8, 3, 8, NULL, NULL),
(9, 4, 7, NULL, NULL),
(10, 4, 1, NULL, NULL),
(11, 5, 1, NULL, NULL),
(12, 5, 2, NULL, NULL),
(13, 5, 2, NULL, NULL),
(14, 11, 2, NULL, NULL),
(15, 12, 1, NULL, NULL),
(16, 13, 8, NULL, NULL),
(17, 14, 8, NULL, NULL),
(18, 14, 5, NULL, NULL),
(19, 14, 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hobbies`
--
ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_friends`
--
ALTER TABLE `user_friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_hobbies`
--
ALTER TABLE `user_hobbies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hobbies`
--
ALTER TABLE `hobbies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user_friends`
--
ALTER TABLE `user_friends`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `user_hobbies`
--
ALTER TABLE `user_hobbies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
