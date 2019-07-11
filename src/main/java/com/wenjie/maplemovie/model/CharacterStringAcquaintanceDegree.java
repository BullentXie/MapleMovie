package com.wenjie.maplemovie.model;

public class CharacterStringAcquaintanceDegree {
    public static Float levenshtein(String str1, String str2) {
        //--- 计算两个字符串的长度。
        int len1 = str1.length();
        int len2 = str2.length();
        // 建立数组，比字符长度的大一个空间
        int[][] matrix = new int[len1 + 1][len2 + 1];
        // 分别为两个字符串赋值到矩阵中
        for (int a = 0; a <= len1; a++) {
            matrix[a][0] = a;
        }
        for (int a = 0; a <= len2; a++) {
            matrix[0][a] = a;
        }
        // 计算两个字符是否一样，计算左上的值
        int temp;
        for (int i = 1; i <= len1; i++) {
            for (int j = 1; j <= len2; j++) {
                // 判断两个字符是否一致
                if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    temp = 0;
                } else {
                    temp = 1;
                }
                // 取三个值中最小的
                matrix[i][j] = min(matrix[i - 1][j - 1] + temp, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
        // System.out.println("字符串\""+str1+"\"与\""+str2+"\"的比较");
        // 取数组右下角的值，同样不同位置代表不同字符串的比较
        // System.out.println("差异步骤："+matrix[len1][len2]);
        // 计算相似度
        float similarity = 1 - (float) matrix[len1][len2]
                / Math.max(str1.length(), str2.length());
        // System.out.println("相似度："+similarity);
        return similarity;
    }

    // 得到最小值
    private static int min(int... is) {         //int... 获取未知长度的int
        int min = Integer.MAX_VALUE;
        for (int i : is) {
            if (min > i) {
                min = i;
            }
        }
        return min;
    }
}
