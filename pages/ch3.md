---
layout: intro-image-right
image: forest.jpg
---

# How frontend/backend work together ?

---
layout: center
---

<img src='/ch3/netscape.png' style="height:500px">


<!-- 在很久很久以前，我出生之前，網頁大概長這樣 -->

---
layout: center
---

<img src="/ch3/frontend-backend-1.svg" style="width:700px"/>

<!-- 瀏覽器跟 Server 說 給我一個文件
Server 把文件送回來給瀏覽器
瀏覽器把文件轉換成畫面顯示出來
大家相同的連結，肯定看到相同的網頁 -->

---
layout: center
---
<img src="/ch3/2023-05-23-02-00-43.png" style="height:400px"/>

<!-- 1993 年，美國國家超級電腦應用中心，開發出 CGI，common gateway interface
以前大家都只能一個 URL 取得一個固定的資源
現在不一樣了
大家可以在同一個 URL 下不同參數，取得不同的資源 -->

---
layout: center
---

<img src="/ch3/frontend-backend-2.svg" style="width:700px"/>


<!-- 用流程圖來說，就是瀏覽器跟 CGI 這個介面說，我要取得哪個網頁資料、參數有哪些
然後 CGI 把參數轉給後面的小程式，讓它把 html 網頁組合出來 -->

---
layout: center
---

<div style="display:flex; align-items:center">
    <img src="/ch3/2023-05-23-02-28-47.png" style="height:200px"/>
    <img src="/ch3/2023-05-23-02-27-40.png" style="height:220px"/>
</div>

<!-- 差不多在這個時期，1996左右， JS 技術開始普及
那時候 JS 還不是 Web 三本柱，微軟還推出了 VBScript 來和 JS 對抗 -->

---
layout: center
---
<img src="/ch3/html-form.png" style="height:300px"/>


<!-- 有了 JS 或 VBS，Web 的開發人員終於有比較大的彈性可以動態的設計調整頁面!
各種表格、表單應用也開始普及起來

題外話 我之前就改過一隻用 pearl + CGI + VBScript 寫的古老程式
因為要全面從 IE 升級 chrome 所以必須把 VBS 通通改成 JS -->



---
layout: center
---

<div style="display:flex; align-items:center">
<img src="/ch3/2023-05-23-02-08-15.png" style="height:200px"/>
<img src="/ch3/2023-05-23-02-08-22.png" style="height:200px"/>
</div>

<!-- 
隨著大家網頁越寫越大，邏輯越來越複雜，互動功能越來越豐富

簡單的 CGI 已經不夠大家用了，所以 MVC 的概念就出現了

畫面這兩個框架，應該算是滿有代表性 MVC 框架，即使到現在也還有很多人在使用 -->

---
layout: center
---
<img src="/ch3/frontend-backend-3.svg" style="width:800px"/>

<!-- 
那甚麼是 MVC 呢? 
簡單來說就是一套大家用過都說讚的解決 Web 程式模組化的方式
對瀏覽器來說，沒有差別，都是透過請求取得文件

但內部處理上，我們把它分成了三個模組
Controller 決定收到請求後，操作 Model 更新或取得資料，然後再根據 Model 產生 View，最後把 View 送回給瀏覽器

聽起來很美好，但也是有缺點的

第一是管理上不太方便
前端跟美術人員，每次設計好新的畫面，改個小 icon 或字形，都要跑去找後端工程師幫忙把 View 裡面的模板更新，
後端工程師甚至還要負責想，要怎麼根據資料把 HTML 長出來
這樣後端工程師很累，前端跟美術如果想要優化使用者體驗效率也不好

第二是畫面更新每次都要重新 render
就像播放幻燈片一樣，一閃一閃的，體驗也不好

-->

---
layout: center
---

<img src="/ch3/2023-05-23-02-16-03.png" style="width:600px"/>

<!-- 那要怎麼解決上面的問題，達成更好的使用者體驗與分工呢? 首先我們要介紹一個很關鍵的技術，叫做 AJAX，全名 ... -->

---
layout: center
---

<img src="/ch3/frontend-backend-3-1.svg" style="width:700px"/>

<!-- 有了 AJAX，我們就可以在需要的時候，發出請求，要到我們想要的資料，然後更新我們在瀏覽器上的畫面 -->

---
layout: center
---

<img src="/ch3/tree.svg" style="width:300px"/>

<!-- 還記得前面提到的 render tree 嗎? 有了 ajax 我們就可以一次只更新其中一小部分 sub tree，提升效能 -->


---
layout: center
---
<img src="/ch3/frontend-backend-4.svg" style="width:700px"/>

<!-- 

既然 AJAX 這麼好，有的人就想說，我們就全部畫面更新，通通都用 AJAX 這樣的技巧去做不就好了嗎?

不只可以提高效能還可以解決前後端分工不均的問題

從此以後，後端負責準備資料、DB、Monitor 等等任務

前端收到使用者事件，打後端，顯示畫面

聽起來就很棒，於是這種做法就件件越來越普及，到了現在幾乎成為業界標準，

不過工作只會轉移，不會消失，後端省下來的工作，前端扛起來了，所以前端的專案複雜度就變得越來越高。



 -->

---
layout: center
---

<img src="/ch3/2023-05-23-02-17-11.png" style="width:700px"/>

<!-- 
在這個背景下，前端御三家就出現了，之後大家會學到的 React 也是其中之一
 -->


---
layout: center
---

<img src="/ch3/2023-05-23-02-17-37.png" style="width:700px"/>

---
layout: center
---

<img src="/ch3/webapp2.svg" style="width:800px"/>


---
layout: center
---

<div style="display:flex">
<img src="/ch3/ngrx.png" style="width:200px"/>
<img src="/ch3/vuex.png" style="width:200px"/>
<img src="/ch3/redux.png" style="width:200px"/>
</div>



---
layout: center
---

<style>
    .slidev-page-35 .my-auto {
        width: 600px
    }
</style>

|                                  | SSG | SSR | CSR |
| -------------------------------- | --- | --- | --- |
| Static                           | V   |     |     |
| CGI                              | V   | V   |     |
| Backend MVC                      | V   | V   |     |
| Create React App / Vue / Angular |     |     | V   |
| Next / Nuxt / Angular Universal  | V   | V   | V   |

---
layout: center
transition: fade-out
---

<style>
    .slidev-page-36 .my-auto {
        width: 600px
    }
</style>

|     | 優點                                       | 缺點                                             |
| --- | ---------------------------------------------- | ----------------------------------------------------- |
| SSG | 搭配 CDN 同時減輕瀏覽器與伺服器負擔、有利 SEO  | 不適用於經常變動的網頁                                |
| SSR | 減少瀏覽器負擔、有利 SEO                       | 對伺服器負擔較大、須考慮 Cache 機制以免影響使用者體驗 |
| CSR | 前後端分離，分工明確、管理方便、減少伺服器負擔 | 首次進入網站讀取速度可能較慢、不利 SEO                |

