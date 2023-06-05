---
layout: intro-image-right
image: forest.jpg
---

# How GUI frameworks render ?


<!-- 圖形化介面的系統，怎麼把畫面畫出來呢?

注意這邊指的是通用的、不限於 web 或 android 或 ios 或 windows 的通用的概念 -->

---
layout: center
---

```ts
type Render = (x: unknown) => View;
```



<div class="h-30 flex items-center justify-center">
<img src="/ch1/who-am-i.png"  class="h-full"/>
</div>

<!-- 我們用一個 render function 來表示 render 的過程

第一個問題要問大家，這個 input x，他的資料結構是甚麼?

提示: 打開 F12 -->
---
layout: two-cols
---
<style>
.slidev-page-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
</style>


<img src="/ch1/tree.png" />

::right::

```ts
type Render = (tree: Tree) => View;
```

🤔 Render the whole tree at once ?!

<!-- 提示: 大家以前 DFS / WFS 怎麼做 ? -->

---
layout: center
---

```ts
type Node = { children: Node[]; attributes: NodeAttributes };

type Render = (node: Node) => View

const render:Render = (node: MyNode) => {
  //...
  // render current node by attributes
  //...
  subViews = node.children.map(render);
  //...
  // compose subViews and currentView
  //...
  return view as View
};
```
<!-- 概念上，我們可以想像我們把根結點丟進去一個 render function
然後他又去對它自己的子節點呼叫 render function -->
---
layout: center
---

## 🙋 How to update the view ?


---
layout: center
---

## 🙋 How to continuously update the view ?

---
layout: center
---

## 🙋 How users interact with the continuously updating view ?

---
transition: fade-out
layout: center
---



<img src="/ch1/render.svg" style="width:100vw"/>

<!-- 其實靠分工合作就可以解決這個問題~

負責 UI 的觀察到使用者點了按鈕，以瀏覽器來說它就會把一個任務塞到 queue 裡面

render process 在下一次看到 queue 有東西，就把裡面的任務執行完畢

這個任務可能就會改變餵進去的樹狀結構物件，然後下一次 render，我們就看到新的畫面了 -->
