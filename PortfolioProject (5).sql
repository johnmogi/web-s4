-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 26, 2020 at 02:15 PM
-- Server version: 10.4.12-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PortfolioProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cartID` int(10) NOT NULL,
  `userID` int(10) NOT NULL,
  `cartTime` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cartID`, `userID`, `cartTime`) VALUES
(1, 24, '2020-05-30 19:56:34.000000');

-- --------------------------------------------------------

--
-- Table structure for table `cartItem`
--

DROP TABLE IF EXISTS `cartItem`;
CREATE TABLE `cartItem` (
  `itemID` int(10) NOT NULL,
  `productID` int(10) NOT NULL,
  `amount` int(40) NOT NULL,
  `totalPrice` int(10) NOT NULL,
  `cartID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartItem`
--

INSERT INTO `cartItem` (`itemID`, `productID`, `amount`, `totalPrice`, `cartID`) VALUES
(16, 7, 2, 250, 1),
(17, 12, 1, 1500, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `catID` int(10) NOT NULL,
  `catName` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`catID`, `catName`) VALUES
(1, 'Landing Pages'),
(2, 'Illustrations'),
(3, 'Logo'),
(4, 'Web Sites'),
(5, 'Mockups'),
(6, 'Project Management');

-- --------------------------------------------------------

--
-- Table structure for table `clientOrder`
--

DROP TABLE IF EXISTS `clientOrder`;
CREATE TABLE `clientOrder` (
  `orderID` int(10) NOT NULL,
  `clientID` int(10) NOT NULL,
  `cartID` int(10) NOT NULL,
  `subTotal` int(10) NOT NULL,
  `shippingCity` varchar(40) NOT NULL,
  `shippingStreet` varchar(40) NOT NULL,
  `shippingDate` date NOT NULL,
  `orderTime` date NOT NULL,
  `paymentDigits` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clientOrder`
--

INSERT INTO `clientOrder` (`orderID`, `clientID`, `cartID`, `subTotal`, `shippingCity`, `shippingStreet`, `shippingDate`, `orderTime`, `paymentDigits`) VALUES
(2, 23, 1, 1000, 'Barcelona', 'square 39', '2020-06-17', '2020-06-29', 4580);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `productID` int(10) NOT NULL,
  `itemName` varchar(50) NOT NULL,
  `price` int(25) NOT NULL,
  `imageUrl` varchar(40) NOT NULL,
  `itemDescription` varchar(450) NOT NULL,
  `catID` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `itemName`, `price`, `imageUrl`, `itemDescription`, `catID`) VALUES
(7, 'Tales From Hevel-Eilot', 500, 'tales.jpg', 'Leading illustrations for a compendium of children stories.\r\n', 2),
(8, 'The Secret of the 3 bottles\r\n', 500, '3bottles.jpg', 'Illustrations for a childeren book with some additional bonus material and possibly a school workshop\r\n', 2),
(11, 'test', 150, 'test.jpg', 'test', 6),
(12, 'Split Landing page', 1500, 'split.jpg', 'Split is a relatively new event club in main tel aviv, recieved the brief from Genesis.', 1),
(13, 'sregt', 250, 'sregt.jpg', 'sregt', 5),
(14, 'sregt', 150, 'sregt.jpg', 'sregt', 4),
(15, 'Primadance- WooCommerce site', 7500, 'primadance.jpg', 'there is a fine line between failure and success, this project had failure written all over it, but I managed to pull up my team and structure it to the finish line, despite the difficuties', 4),
(19, 'children room wall painting', 3500, 'wall.jpg', 'Letting fantasy hit the wall... base work with stencils proceed into Acrilic paints, children play-room', 2),
(20, 'towing logo', 600, 'tow.jpg', 'this hand crafted logo includes 1 revision ', 3),
(21, 'elementor portfolio minisite', 3500, 'portfolio.jpg', 'The wordpress elementor is an excellent design system, enjoy', 4),
(22, 'Primadance- WooCommerce site', 100, 'primadance.jpg', 'there is a fine line between failure and success, this project had failure written all over it, but I managed to pull up my team and structure it to the finish line, despite the difficuties', 4),
(23, 'Nadlan landing page', 2500, 'nadlan.jpg', 'classy, white and a bit on the shiney side. \nthose are elementor lp\'s', 1),
(24, 'maleKids', 0, 'malekids', 'a \"burned\" project from the get-go.\nduring the work i had to deal with angry clients, they were promised a working model but recieved none, with patience and love managed to go through into success', 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userID` int(10) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `username_email` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(50) NOT NULL,
  `id` int(9) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `firstVisit` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `firstName`, `lastName`, `username_email`, `password`, `city`, `street`, `id`, `isAdmin`, `firstVisit`) VALUES
(22, '7', '7', '7', '89d7149eb47ea80748a0abd7cdaf1e87a81e0c36b1305b5538469b909c18c526ec778ee27d7d49345db966eddc3399f50b8b5e39d3ee80210a1b3d89345821fc', '7', '7', 123456789, 0, 0),
(23, '1', '1', '1', 'c7986595cce243c20c7c60894e8640173441b3c7e1908c50d94ea9959b6d2f91a70981e8645b8f987f99370ee67788aa5686826b8cd178bbbea4cddadb71f4cc', '1', '1', 987654321, 1, 0),
(24, '3', '3', '3', '3631724678ecf22f3e5e66c60a0a460efb0931d8ccb78791140eb082e00e2acfd7c2531c7d5d7d988e69b80fffbbf9c151ef29ce4b790567356c6617972cb929', '3', '3', 123456123, 0, 0),
(25, '3', '3', '35', '3631724678ecf22f3e5e66c60a0a460efb0931d8ccb78791140eb082e00e2acfd7c2531c7d5d7d988e69b80fffbbf9c151ef29ce4b790567356c6617972cb929', '3', '3', 123, 0, 0),
(26, 'jonathan', 'moguillansky', '5@gmail.com', '82859ab583b8f9b5d7aeb775b5c364e0bc06e503c2541f7864996d11b38ba81557cee7516e44768dd5f845448b2343eb1cf8e184851dbcd906a37ce2516dade4', 'Haifa', 'haasis 7 apt. 19', 963852741, 0, 0),
(27, 'jonathan', 'moguillansky', 'anguru@gmail.com', 'c85461d97aaaec1c66b8b52465a834bc4a24c82d7670268ce9d41b79de9375b20e4d085cb48f366c7eb20af67a3e638a8d33dd72c1989082356ddf3e314b5c55', 'Ramat-Gan', 'haasis 7 apt. 19', 123456, 0, 0),
(28, 'jonathan', 'moguillansky', '12', 'c85461d97aaaec1c66b8b52465a834bc4a24c82d7670268ce9d41b79de9375b20e4d085cb48f366c7eb20af67a3e638a8d33dd72c1989082356ddf3e314b5c55', 'Tel-Aviv', 'haasis 7 apt. 19', 12, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `cartItem`
--
ALTER TABLE `cartItem`
  ADD PRIMARY KEY (`itemID`),
  ADD KEY `productID` (`productID`),
  ADD KEY `cartID` (`cartID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`catID`);

--
-- Indexes for table `clientOrder`
--
ALTER TABLE `clientOrder`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `clientID` (`clientID`),
  ADD KEY `cartID` (`cartID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `catID` (`catID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cartItem`
--
ALTER TABLE `cartItem`
  MODIFY `itemID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `catID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `clientOrder`
--
ALTER TABLE `clientOrder`
  MODIFY `orderID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cartItem`
--
ALTER TABLE `cartItem`
  ADD CONSTRAINT `cartItem_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cartItem_ibfk_2` FOREIGN KEY (`cartID`) REFERENCES `cart` (`cartID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `clientOrder`
--
ALTER TABLE `clientOrder`
  ADD CONSTRAINT `clientOrder_ibfk_1` FOREIGN KEY (`clientID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clientOrder_ibfk_2` FOREIGN KEY (`cartID`) REFERENCES `cart` (`cartID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`catID`) REFERENCES `categories` (`catID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
