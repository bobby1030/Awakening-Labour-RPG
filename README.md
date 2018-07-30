# 2018 一覺醒來就覺醒 - 勞資 RPG
這是在 2018 年的[一覺醒來就覺醒](https://fb.me/Awakeningafterwakeup/)營隊中，[勞資 RPG](https://www.facebook.com/Awakeningafterwakeup/photos/a.726337747546274.1073741828.717786698401379/918298721683508/)活動所使用的輔助系統（Game Assistance System）。   
此 Repo 中不包含本遊戲的細部規則與輔助系統外的必備元素，遊戲授權請參見「授權」段落。

## 功能
* 員工班表安排、顯示
* 玩家疲勞抽籤
* 公司規定、遊戲說明、法規顯示
* WebSocket 跨裝置數值同步

## 開發
```bash
yarn install # Install dependencies from NPM
npm run dev # Start webpack-dev-server with hot-reload enabled
npm run build # Build JS bundle file with webpack
```

## 使用
```bash
# Execute this *after* `npm run build`
# Start WebSocket service & serve static files with Express
PORT=3000 npm run serve
```

## 參數定義
### 班表月份
URL：`/Schedule/:displayMonth`
| 月份 |     參數名    |  值 |
|:----:|:-------------:|:---:|
| 一月 | :displayMonth | Jan |
| 二月 | :displayMonth | Feb |

### 角色
URL Query：`?role=roleID`
|   月份   | 參數名 |    值    |
|:--------:|:------:|:--------:|
|    GM    | roleID |    GM    |
|   資方   | roleID | employer |
|  魷魚哥  | roleID |   empA   |
|  派星星  | roleID |   empB   |
| 泡芙阿阿 | roleID |   empC   |
| 海綿寶貝 | roleID |   empD   |

## 授權
### 本輔助系統 The Assistance System
[MIT License](LICENSE.txt)
### 遊戲設計 Design, Concept, and Texts
[陳怡璇](https://www.facebook.com/profile.php?id=100001557758192)、[張允瀚](https://www.facebook.com/82302z)保留所有權利，洽談授權請聯繫兩位原創者。