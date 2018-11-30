/*
Navicat MySQL Data Transfer

Source Server         : h5_1809
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : phase project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-11-30 13:48:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `good_name` varchar(255) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pricenow` varchar(255) DEFAULT NULL,
  `zk` varchar(255) DEFAULT NULL,
  `num` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=322 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('288', '../img/list_1.jpg', '倪芬儿7', '2018秋冬男款套头毛衣7', '105.00', '605', '7.7', '3');
INSERT INTO `cart` VALUES ('321', '../img/list_1.jpg', '倪芬儿40', '2018秋冬男款套头毛衣40', '138.00', '638', '40.7', '8');

-- ----------------------------
-- Table structure for home
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) DEFAULT NULL,
  `product_tag` varchar(255) DEFAULT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `good_name` varchar(255) DEFAULT NULL,
  `zk` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pricenow` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11191 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
INSERT INTO `home` VALUES ('11145', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE1', '【冬季新品】女毛织长袖丝光羊套头毛衫1', '2.7', '74.90', '369');
INSERT INTO `home` VALUES ('11146', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE2', '【冬季新品】女毛织长袖丝光羊套头毛衫2', '3.7', '75.90', '370');
INSERT INTO `home` VALUES ('11147', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE3', '【冬季新品】女毛织长袖丝光羊套头毛衫3', '4.7', '76.90', '371');
INSERT INTO `home` VALUES ('11148', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE4', '【冬季新品】女毛织长袖丝光羊套头毛衫4', '5.7', '77.90', '372');
INSERT INTO `home` VALUES ('11149', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE5', '【冬季新品】女毛织长袖丝光羊套头毛衫5', '6.7', '78.90', '373');
INSERT INTO `home` VALUES ('11150', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE6', '【冬季新品】女毛织长袖丝光羊套头毛衫6', '7.7', '79.90', '374');
INSERT INTO `home` VALUES ('11151', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE7', '【冬季新品】女毛织长袖丝光羊套头毛衫7', '8.7', '80.90', '375');
INSERT INTO `home` VALUES ('11152', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE8', '【冬季新品】女毛织长袖丝光羊套头毛衫8', '9.7', '81.90', '376');
INSERT INTO `home` VALUES ('11153', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE9', '【冬季新品】女毛织长袖丝光羊套头毛衫9', '10.7', '82.90', '377');
INSERT INTO `home` VALUES ('11154', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE10', '【冬季新品】女毛织长袖丝光羊套头毛衫10', '11.7', '83.90', '378');
INSERT INTO `home` VALUES ('11155', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE11', '【冬季新品】女毛织长袖丝光羊套头毛衫11', '12.7', '84.90', '379');
INSERT INTO `home` VALUES ('11156', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE12', '【冬季新品】女毛织长袖丝光羊套头毛衫12', '13.7', '85.90', '380');
INSERT INTO `home` VALUES ('11157', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE13', '【冬季新品】女毛织长袖丝光羊套头毛衫13', '14.7', '86.90', '381');
INSERT INTO `home` VALUES ('11158', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE14', '【冬季新品】女毛织长袖丝光羊套头毛衫14', '15.7', '87.90', '382');
INSERT INTO `home` VALUES ('11159', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE15', '【冬季新品】女毛织长袖丝光羊套头毛衫15', '16.7', '88.90', '383');
INSERT INTO `home` VALUES ('11160', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE16', '【冬季新品】女毛织长袖丝光羊套头毛衫16', '17.7', '89.90', '384');
INSERT INTO `home` VALUES ('11161', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE17', '【冬季新品】女毛织长袖丝光羊套头毛衫17', '18.7', '90.90', '385');
INSERT INTO `home` VALUES ('11162', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE18', '【冬季新品】女毛织长袖丝光羊套头毛衫18', '19.7', '91.90', '386');
INSERT INTO `home` VALUES ('11163', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE19', '【冬季新品】女毛织长袖丝光羊套头毛衫19', '20.7', '92.90', '387');
INSERT INTO `home` VALUES ('11164', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE20', '【冬季新品】女毛织长袖丝光羊套头毛衫20', '21.7', '93.90', '388');
INSERT INTO `home` VALUES ('11165', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE21', '【冬季新品】女毛织长袖丝光羊套头毛衫21', '22.7', '94.90', '389');
INSERT INTO `home` VALUES ('11166', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE22', '【冬季新品】女毛织长袖丝光羊套头毛衫22', '23.7', '95.90', '390');
INSERT INTO `home` VALUES ('11167', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE23', '【冬季新品】女毛织长袖丝光羊套头毛衫23', '24.7', '96.90', '391');
INSERT INTO `home` VALUES ('11168', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE24', '【冬季新品】女毛织长袖丝光羊套头毛衫24', '25.7', '97.90', '392');
INSERT INTO `home` VALUES ('11169', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE25', '【冬季新品】女毛织长袖丝光羊套头毛衫25', '26.7', '98.90', '393');
INSERT INTO `home` VALUES ('11170', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE26', '【冬季新品】女毛织长袖丝光羊套头毛衫26', '27.7', '99.90', '394');
INSERT INTO `home` VALUES ('11171', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE27', '【冬季新品】女毛织长袖丝光羊套头毛衫27', '28.7', '100.90', '395');
INSERT INTO `home` VALUES ('11172', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE28', '【冬季新品】女毛织长袖丝光羊套头毛衫28', '29.7', '101.90', '396');
INSERT INTO `home` VALUES ('11173', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE29', '【冬季新品】女毛织长袖丝光羊套头毛衫29', '30.7', '102.90', '397');
INSERT INTO `home` VALUES ('11174', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE30', '【冬季新品】女毛织长袖丝光羊套头毛衫30', '31.7', '103.90', '398');
INSERT INTO `home` VALUES ('11175', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE31', '【冬季新品】女毛织长袖丝光羊套头毛衫31', '32.7', '104.90', '399');
INSERT INTO `home` VALUES ('11176', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE32', '【冬季新品】女毛织长袖丝光羊套头毛衫32', '33.7', '105.90', '400');
INSERT INTO `home` VALUES ('11177', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE33', '【冬季新品】女毛织长袖丝光羊套头毛衫33', '34.7', '106.90', '401');
INSERT INTO `home` VALUES ('11178', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE34', '【冬季新品】女毛织长袖丝光羊套头毛衫34', '35.7', '107.90', '402');
INSERT INTO `home` VALUES ('11179', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE35', '【冬季新品】女毛织长袖丝光羊套头毛衫35', '36.7', '108.90', '403');
INSERT INTO `home` VALUES ('11180', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE36', '【冬季新品】女毛织长袖丝光羊套头毛衫36', '37.7', '109.90', '404');
INSERT INTO `home` VALUES ('11181', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE37', '【冬季新品】女毛织长袖丝光羊套头毛衫37', '38.7', '110.90', '405');
INSERT INTO `home` VALUES ('11182', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE38', '【冬季新品】女毛织长袖丝光羊套头毛衫38', '39.7', '111.90', '406');
INSERT INTO `home` VALUES ('11183', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE39', '【冬季新品】女毛织长袖丝光羊套头毛衫39', '40.7', '112.90', '407');
INSERT INTO `home` VALUES ('11184', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE40', '【冬季新品】女毛织长袖丝光羊套头毛衫40', '41.7', '113.90', '408');
INSERT INTO `home` VALUES ('11185', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE41', '【冬季新品】女毛织长袖丝光羊套头毛衫41', '42.7', '114.90', '409');
INSERT INTO `home` VALUES ('11186', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE42', '【冬季新品】女毛织长袖丝光羊套头毛衫42', '43.7', '115.90', '410');
INSERT INTO `home` VALUES ('11187', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE43', '【冬季新品】女毛织长袖丝光羊套头毛衫43', '44.7', '116.90', '411');
INSERT INTO `home` VALUES ('11188', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE44', '【冬季新品】女毛织长袖丝光羊套头毛衫44', '45.7', '117.90', '412');
INSERT INTO `home` VALUES ('11189', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE45', '【冬季新品】女毛织长袖丝光羊套头毛衫45', '46.7', '118.90', '413');
INSERT INTO `home` VALUES ('11190', 'img/sale1.jpg', 'img/product_tag.png', 'METERSBONWE46', '【冬季新品】女毛织长袖丝光羊套头毛衫46', '47.7', '119.90', '414');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) DEFAULT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `zk` varchar(255) DEFAULT NULL,
  `good_name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pricenow` varchar(255) DEFAULT NULL,
  `litimg1` varchar(255) DEFAULT NULL,
  `litimg2` varchar(255) DEFAULT NULL,
  `litimg3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=322 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('282', '../img/list_1.jpg', '倪芬儿1', '1.7', '2018秋冬男款套头毛衣1', '99.00', '599', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('283', '../img/list_1.jpg', '倪芬儿2', '2.7', '2018秋冬男款套头毛衣2', '100.00', '600', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('284', '../img/list_1.jpg', '倪芬儿3', '3.7', '2018秋冬男款套头毛衣3', '101.00', '601', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('285', '../img/list_1.jpg', '倪芬儿4', '4.7', '2018秋冬男款套头毛衣4', '102.00', '602', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('286', '../img/list_1.jpg', '倪芬儿5', '5.7', '2018秋冬男款套头毛衣5', '103.00', '603', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('287', '../img/list_1.jpg', '倪芬儿6', '6.7', '2018秋冬男款套头毛衣6', '104.00', '604', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('288', '../img/list_1.jpg', '倪芬儿7', '7.7', '2018秋冬男款套头毛衣7', '105.00', '605', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('289', '../img/list_1.jpg', '倪芬儿8', '8.7', '2018秋冬男款套头毛衣8', '106.00', '606', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('290', '../img/list_1.jpg', '倪芬儿9', '9.7', '2018秋冬男款套头毛衣9', '107.00', '607', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('291', '../img/list_1.jpg', '倪芬儿10', '10.7', '2018秋冬男款套头毛衣10', '108.00', '608', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('292', '../img/list_1.jpg', '倪芬儿11', '11.7', '2018秋冬男款套头毛衣11', '109.00', '609', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('293', '../img/list_1.jpg', '倪芬儿12', '12.7', '2018秋冬男款套头毛衣12', '110.00', '610', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('294', '../img/list_1.jpg', '倪芬儿13', '13.7', '2018秋冬男款套头毛衣13', '111.00', '611', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('295', '../img/list_1.jpg', '倪芬儿14', '14.7', '2018秋冬男款套头毛衣14', '112.00', '612', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('296', '../img/list_1.jpg', '倪芬儿15', '15.7', '2018秋冬男款套头毛衣15', '113.00', '613', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('297', '../img/list_1.jpg', '倪芬儿16', '16.7', '2018秋冬男款套头毛衣16', '114.00', '614', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('298', '../img/list_1.jpg', '倪芬儿17', '17.7', '2018秋冬男款套头毛衣17', '115.00', '615', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('299', '../img/list_1.jpg', '倪芬儿18', '18.7', '2018秋冬男款套头毛衣18', '116.00', '616', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('300', '../img/list_1.jpg', '倪芬儿19', '19.7', '2018秋冬男款套头毛衣19', '117.00', '617', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('301', '../img/list_1.jpg', '倪芬儿20', '20.7', '2018秋冬男款套头毛衣20', '118.00', '618', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('302', '../img/list_1.jpg', '倪芬儿21', '21.7', '2018秋冬男款套头毛衣21', '119.00', '619', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('303', '../img/list_1.jpg', '倪芬儿22', '22.7', '2018秋冬男款套头毛衣22', '120.00', '620', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('304', '../img/list_1.jpg', '倪芬儿23', '23.7', '2018秋冬男款套头毛衣23', '121.00', '621', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('305', '../img/list_1.jpg', '倪芬儿24', '24.7', '2018秋冬男款套头毛衣24', '122.00', '622', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('306', '../img/list_1.jpg', '倪芬儿25', '25.7', '2018秋冬男款套头毛衣25', '123.00', '623', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('307', '../img/list_1.jpg', '倪芬儿26', '26.7', '2018秋冬男款套头毛衣26', '124.00', '624', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('308', '../img/list_1.jpg', '倪芬儿27', '27.7', '2018秋冬男款套头毛衣27', '125.00', '625', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('309', '../img/list_1.jpg', '倪芬儿28', '28.7', '2018秋冬男款套头毛衣28', '126.00', '626', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('310', '../img/list_1.jpg', '倪芬儿29', '29.7', '2018秋冬男款套头毛衣29', '127.00', '627', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('311', '../img/list_1.jpg', '倪芬儿30', '30.7', '2018秋冬男款套头毛衣30', '128.00', '628', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('312', '../img/list_1.jpg', '倪芬儿31', '31.7', '2018秋冬男款套头毛衣31', '129.00', '629', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('313', '../img/list_1.jpg', '倪芬儿32', '32.7', '2018秋冬男款套头毛衣32', '130.00', '630', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('314', '../img/list_1.jpg', '倪芬儿33', '33.7', '2018秋冬男款套头毛衣33', '131.00', '631', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('315', '../img/list_1.jpg', '倪芬儿34', '34.7', '2018秋冬男款套头毛衣34', '132.00', '632', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('316', '../img/list_1.jpg', '倪芬儿35', '35.7', '2018秋冬男款套头毛衣35', '133.00', '633', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('317', '../img/list_1.jpg', '倪芬儿36', '36.7', '2018秋冬男款套头毛衣36', '134.00', '634', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('318', '../img/list_1.jpg', '倪芬儿37', '37.7', '2018秋冬男款套头毛衣37', '135.00', '635', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('319', '../img/list_1.jpg', '倪芬儿38', '38.7', '2018秋冬男款套头毛衣38', '136.00', '636', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('320', '../img/list_1.jpg', '倪芬儿39', '39.7', '2018秋冬男款套头毛衣39', '137.00', '637', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');
INSERT INTO `list` VALUES ('321', '../img/list_1.jpg', '倪芬儿40', '40.7', '2018秋冬男款套头毛衣40', '138.00', '638', '../img/list_11.jpg', '../img/list_12.jpg', '../img/list_13.jpg');

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('20', 'qqqqq', 'qqqqqq', '2018-11-23 21:28:19');
INSERT INTO `reg` VALUES ('21', 'hjw1125', 'hjw1125', '2018-11-23 21:51:01');
INSERT INTO `reg` VALUES ('22', 'hjw1234', 'hjw1234', '2018-11-24 16:41:38');
INSERT INTO `reg` VALUES ('23', 'wwwww', 'wwwwww', '2018-11-30 11:43:39');
SET FOREIGN_KEY_CHECKS=1;
