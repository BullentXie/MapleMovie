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

 Date: 06/07/2019 16:03:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `profile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gender` enum('MALE','FEMALE','UNKNOWN') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'UNKNOWN',
  PRIMARY KEY (`uid`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'Wenjie', '123456', 'C:\\Users\\Wenjie\\Desktop\\软酷实训2019\\MapleMovie\\user_profiles\\wenjie.jpg', '424346640@qq.com', 'MALE');
INSERT INTO `user` VALUES (6, 'XIEXIE', '123456', NULL, '424346640@bb.com', NULL);
INSERT INTO `user` VALUES (10, 'XIEXIEXIE', '123456', NULL, '424346640@cc.com', NULL);

SET FOREIGN_KEY_CHECKS = 1;
