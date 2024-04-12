-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 11 2024 г., 21:57
-- Версия сервера: 10.1.48-MariaDB
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `todos`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Todos`
--

CREATE TABLE `Todos` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci,
  `completed` tinyint(1) DEFAULT NULL,
  `dateStart` text COLLATE utf8mb4_unicode_ci,
  `dateEnd` text COLLATE utf8mb4_unicode_ci,
  `about` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `Todos`
--

INSERT INTO `Todos` (`id`, `title`, `completed`, `dateStart`, `dateEnd`, `about`) VALUES
(0, 'Помыть пол', 0, '2024-04-12', '2024-04-14', 'В ванной');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Todos`
--
ALTER TABLE `Todos`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
