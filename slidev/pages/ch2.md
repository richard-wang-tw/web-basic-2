---
layout: intro-image-right
image: forest.jpg
---


# How browsers render ?


<!-- 
那剛剛說的是通用的圖形介面，接下來我們會看細一點
看目前最主流的 Chrome V8 引擎怎麼把畫面畫出來
過程中也會帶大家使用一些實用的開發工具功能 -->

---

<img src="/ch2/dom.png" height="500px"/>


<!-- 
剛剛說的 x 樹狀結構在瀏覽器裡面，就是 DOM Tree
透過解析 HTML 文件，就可以得到 DOM Tree
這邊有一點值得注意，瀏覽器會先把 JS/CSS 讀取、解析、執行完畢，才把樹長出來
所以這是一個很容以卡住網頁的點喔!

這邊有一個小問題要問大家

Q: 假設 zzz.css 網路延遲三秒 zzz.js 網路延遲五秒，至少幾秒後頁面才會準備好?
A: 5 秒! 這是因為瀏覽器有針對這點做效能優化，在解析 HTML 時，它會先偷看，看有哪些資源要載入，然後同步發出所需資源的請求 -->

---

<img src="/ch2/style.png" height="500px"/>

<!-- 

DOM Tree 讀取完後，下一件事情就是把 style 算出來
瀏覽器首先會先把 CSS 文件解析成 CSSOM，然後再把 CSSOM 和 DOM 結合 變成 render tree，讓每個點都有自己的 style

整個解析過程，其實大家打開 F12 就可以看到喔!

我們先打開 sources，可以看到網頁原始碼，html/css/js 就放在這邊

我們用選取工具選擇任意一個 node，然後點到 element 的 styles，就可以看到瀏覽器算出來的 CSSOM
CSSOM 有兩個關鍵特性

那剛剛有說我們這些 CSSOM 會和 DOM 結合，具體 DOM 套用那些 style 呢

切換到 Computed，就可以看到囉~

另外不論是 DOM 還是 CSSOM 在 runtime 都是可以修改的，如果大家想做做實驗

看這個屬性套上去會怎麼樣? 其實不必去改 code，直接修改 style 就可以了 -->

---

<img src="/ch2/layout.png" height="500px"/>

<!-- 

有了 render tree 還不夠，我們現在知道節點之間的父子從屬關係了

但是要怎麼清晰表達各個節點之間的尺寸和位置呢?

例如 有一個圓形，在正方形的上方，怎麼自動化的計算他們的位置，看似簡單但其實是很複雜的，聽說 Google 有一個團隊在做這件事

總之瀏覽器會根據 render tree 算出各個節點的位置資訊，這些資訊就叫做 Layout Tree

同樣的這些資訊我們也可以在 F12 / Computed / Group 裡面找到 

-->

---

<img src="/ch2/paint.png" height="500px"/>



<!-- 我們現在有了 render tree / layout tree，還不夠!

瀏覽器還會參考 layout tree 寫一個 "我該怎麼畫圖的腳本"

例如先畫背景、再畫背景上的按鈕、再畫按鈕上的文字 -->

---

<img src="/ch2/raster.png" height="500px"/>



<!-- Raster 是 光柵，用途就是把最終算出來的畫面，切成一小塊一小塊，送去給 GPU 畫出來 -->

---
layout: center
---

<img src="/ch2/render-summary.svg" class="w-[800px]"/>


<!-- 總結來說，從瀏覽器收到 H C J，到轉換成 DOM 跟 CSSOM，然後 Render layout paint
這些操作室友先後依賴關係的，計算量還不小
 -->


---
layout: center
---
<img src="/ch2/page-jank-js.png" class="w-[800px]"/>
<img src="/ch2/page-jank.png" class="w-[800px]"/>

<!-- 可是呢，現在螢幕有的 60FPS，有的 144 FPS
這樣我們就要在 1/60 或是 1/144 秒內算完剛剛全部的東西
看起來超級難對吧?!
 -->

---
transition: fade-out
layout: center
---
<img src="/ch2/pipe.png" class="w-[800px]"/>

- [rendering-performance](https:/web.dev/rendering-performance/)
- [inside-browser](https:/developer.chrome.com/blog/inside-browser-part3/)


<!-- 所以在實務上前輩高手們想出了超級多厲害的優畫方案，來降低卡頓感，例如有一個很關鍵的 Composite 步驟我在上面沒有講到，有興趣的話可以關鍵字 google 研究一下 -->
