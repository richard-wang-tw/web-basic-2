# How frontend and backend work together ?

--

<img src="src/img/2023-05-22-20-42-26.png" height="500px"/>

Note:

在很久很久以前，我出生之前，網頁大概長這樣

--

<img src="src/img/frontend-backend-1.svg" height="500px"/>

Note:

所有人只能透過 Http 協定，Browser 發出請求，請求檔案
大家相同的連結，肯定看到相同的網頁

--

<img src="src/img/2023-05-23-02-00-43.png" height="500px"/>

--

<img src="src/img/frontend-backend-2.svg" height="500px"/>

Note:

1993 年，美國國家超級電腦應用中心，開發出 CGI，common gateway interface
大家可以在同一個 URL 下不同參數，取得不同的資源

--

<img src="src/img/2023-05-23-02-28-47.png" height="200px"/>
<img src="src/img/2023-05-23-02-27-40.png" height="200px"/>

Note:

隔了三年 1996 JS 技術也差不多開始普及
微軟還推出了 VBScript 來和 JS 對抗
Web 的開發人員終於有比較大的彈性可以動態的設計調整頁面!
各種表格、表單應用也開始普及起來

題外話 我之前就改過一隻用 pearl + CGI + VBScript 寫的古老程式
因為要全面從 IE 升級 chrome 所以必須把 VBS 通通改成 JS

--

<img src="src/img/frontend-backend-3.svg" height="500px"/>

Note:

缺點是管理上很不方便，

前端跟美術人員，每次設計好新的畫面，改個小 icon 或字形，都要跑去找後端工程師幫忙把模板更新，

有時候有比較大的改變，後端工程師還要負責想，要怎麼根據資料把 HTML 長出來

--

<img src="src/img/2023-05-23-02-08-15.png" height="200px"/>
<img src="src/img/2023-05-23-02-08-22.png" height="200px"/>

Note:

這兩個應該算是滿有代表性，也算是赫赫有名

--

<img src="src/img/2023-05-23-02-17-11.png" height="300px"/>

Note:

那要怎麼解決上面的問題，達成正確的前後端分工呢? 這時候三大框架就出現啦!

--

<img src="src/img/2023-05-23-02-17-37.png" height="500px"/>

--

<img src="src/img/2023-05-23-02-16-03.png" height="300px"/>

--

<img src="src/img/frontend-backend-4.svg" height="300px"/>

--

<img src="src/img/tree.svg" height="300px"/>

--

|                                  | SSG | SSR | CSR |
| -------------------------------- | --- | --- | --- |
| Static                           | V   |     |     |
| CGI                              | V   | V   |     |
| Backend MVC                      | V   | V   |     |
| Create React App / Vue / Angular |     |     | V   |
| Next / Nuxt / Angular Universal  | V   | V   | V   |

--

|     | pros                                           | cons                                                  |
| --- | ---------------------------------------------- | ----------------------------------------------------- |
| SSG | 搭配 CDN 同時減輕瀏覽器與伺服器負擔、有利 SEO  | 不適用於經常變動的網頁                                |
| SSR | 減少瀏覽器負擔、有利 SEO                       | 對伺服器負擔較大、須考慮 Cache 機制以免影響使用者體驗 |
| CSR | 前後端分離，分工明確、管理方便、減少伺服器負擔 | 首次進入網站讀取速度可能較慢、不利 SEO                |
