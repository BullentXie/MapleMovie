/*
 Navicat Premium Data Transfer

 Source Server         : Ajie
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : maple_movie

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 09/07/2019 23:02:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_prefer
-- ----------------------------
DROP TABLE IF EXISTS `user_prefer`;
CREATE TABLE `user_prefer`  (
  `uid` int(12) NOT NULL,
  `juqing` int(8) NOT NULL,
  `xiju` int(8) NOT NULL,
  `dongzuo` int(8) NOT NULL,
  `aiqing` int(8) NOT NULL,
  `kehuan` int(8) NOT NULL,
  `donghua` int(8) NOT NULL,
  `xuanyi` int(8) NOT NULL,
  `jingsong` int(8) NOT NULL,
  `kongbu` int(8) NOT NULL,
  `fanzui` int(8) NOT NULL,
  `jilupian` int(8) NOT NULL,
  `duanpian` int(8) NOT NULL,
  `lishi` int(8) NOT NULL,
  `qingse` int(8) NOT NULL,
  `tongxing` int(8) NOT NULL,
  `zhuanji` int(8) NOT NULL,
  `yinyue` int(8) NOT NULL,
  `jiating` int(8) NOT NULL,
  `qihuan` int(8) NOT NULL,
  `gewu` int(8) NOT NULL,
  `zhanzheng` int(8) NOT NULL,
  `maoxian` int(8) NOT NULL,
  `guzhuang` int(8) NOT NULL,
  `yundong` int(8) NOT NULL,
  `wuxia` int(8) NOT NULL,
  `zainan` int(8) NOT NULL,
  `ertong` int(8) NOT NULL,
  `xibu` int(8) NOT NULL,
  `heisedianying` int(8) NOT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
