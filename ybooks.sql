-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2019-10-20 10:45:19
-- 服务器版本： 10.4.8-MariaDB
-- PHP 版本： 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `books`
--

-- --------------------------------------------------------

--
-- 表的结构 `ybooks`
--

CREATE TABLE `ybooks` (
  `id` int(4) NOT NULL,
  `b_name` char(12) COLLATE utf8_bin NOT NULL,
  `b_autor` varchar(8) COLLATE utf8_bin NOT NULL,
  `b_price` varchar(6) COLLATE utf8_bin NOT NULL,
  `b_add_time` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=MEMORY DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `ybooks`
--

INSERT INTO `ybooks` (`id`, `b_name`, `b_autor`, `b_price`, `b_add_time`) VALUES
(15, '拆掉思维的', '古典', '7', '2019-10-20 08:00:45.782786'),
(59, 'wq', '12', '12', '2019-10-20 08:37:00.109791'),
(54, 'knl', 'hu', '76', '2019-10-20 07:31:13.909345'),
(55, 'nj', 'we', '12', '2019-10-20 07:32:18.585265'),
(58, '讲话稿', '12', '12', '2019-10-20 07:42:14.174772');

--
-- 转储表的索引
--

--
-- 表的索引 `ybooks`
--
ALTER TABLE `ybooks`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `ybooks`
--
ALTER TABLE `ybooks`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
