# 開場

大家好我是...，這是 Web 基礎技術的第二堂課

開始之前想問大家，如何定義甚麼是好的網頁 ?

A: 跑得快、穩定、可靠、能結合雲服務

# 圖 為甚麼我跑得比別人快

沒錯，大家說的都對，所以這門課，就是要分享一些秘訣

希望以後大家經過寫出來的網頁都能跑得比別人快

# Outline

今天會有三個主題

第一部份帶大家了解網頁的運行環境 瀏覽器，探索到底瀏覽器是怎麼把我們看到的網頁畫出來的?

第二部分跟大家分享 Web 技術一直一直在革新，到底這些革新帶來了甚麼好處?

最後會帶大家做一個簡單的小練習，使用 http 請求取得資料、更新畫面

# Q: How browsers render ?

請問有想法嗎?

# Abstract

Tree -> render function -> View

概括來說 有一個樹狀結構的東西，經過 function 處理，變成我們看到的畫面

# What is render function ?

那問題就來了 這個 render function 是怎麼做到把樹狀結構的東西變成畫面的呢?

# A

那要怎麼 render 一棵樹呢 ? 想想我們面對樹狀結構喜歡用甚麼方法處理? 遞迴

```ts
fun renderTree (node)
    tiles = empty array
    if node is internal node
        for subNode in children
            tiles = tiles.concat(renderTree(subNode))
    if node is leaf node
        tiles = tiles.add(renderNode(node))
    return tiles
```

樹 -> render layout -> 白磁磚牆 -> render paint -> 彩繪磁磚牆 -> 組合 -> View

# Recap

Tree -> render function -> View

render function 解決了 那甚麼是 render tree 呢?

大家有想法嗎?

# Render Tree

render tree 由兩部分組成
DOM + CSS Object Model
一個是骨架，可以理解成是上一堂課 HTML 的部分
一個是皮膚，可以理解成是上一堂課 CSS 的部分

# DOM

圖: DOM

點開 F12 以後，我們可以看到被視覺化的 DOM
DOM 是存在記憶體裡面的、抽象化的樹狀結構

紀錄 Html 下面有 head 跟 body
Body 下面有 Navbar sidebar 跟 Content

# DOM 從哪裡來

HTML、JS 動態建立、DevTool 調整

(DEMO 複製節點)

# CSS OM 是甚麼呢?

圖: CSSOM

瀏覽器對每個 DOM 都有預設的設定

在取得網頁的時候，先套用預設設定，如果有客製化的就套用客製化設定

有些屬性是會被繼承的，例如 Body 設定字體是黑色，下面的也會變黑色

# CSS OM 從哪裡來?

CSS、 inline style、JS 動態調整、DevTool 調整

(DEMO 修改 Body 字體大小)

# 總結

Tree -> render function -> View

這個流程會被瀏覽器負責顯示畫面的程式一遍又一遍的重複執行

學會這些有甚麼用呢

我們可以想常常調整 DOM 的話，

如果 HTML 一直刷新，瀏覽器每次都要重新執行一次上面的，是不是非常消耗硬體資源

也會造成畫面閃爍，使用者體驗是不是就很不好?

所以我們接下來會帶大家談的是前端技術的發展史

看看才華洋溢的工程師前輩們是怎麼解決效能問題

讓我們能站在巨人的肩膀上，快速寫出高品質的網頁

# 靜態網頁時代

每次表單排序、切換分頁、送出表單、都會重新刷新整個畫面
刷新整個頁面太耗費資源了，想想上面的瀏覽器處理過程
假設前端技術都沒有進步，很可能把 60FPS 的螢幕搞的像 6FPS 依樣
所以這個問題非常需要解決

# JQUERY 時代

我大概算是這個時代開始接觸網頁的，大概 2013 年?
那時候很多政府或學校系統都還是靜態網頁
加上可能網路也不像現在這麼穩定發達
常常點一下就要轉圈圈好幾秒

剛接觸到 AJAX、JQUERY 的時候很興奮阿
因為他就能解決上面講到的問題，不用每次都重新刷新整個頁面
可以針對需要的部分來生成

(DEMO 改文字內容)

# SPA 時代

三大框架

唯一的問題就是，JS 很大一坨、等他畫完可能很久

# SSR / SSG / Server Component

# Axios Practice

我們這次回到 JQUERY 時代
直接打請求、操作 DOM、修改畫面

大家之後開發，主要會使用框架，但其實也大同小異
從改 DOM 文件，變成改框架對應的資料模型
