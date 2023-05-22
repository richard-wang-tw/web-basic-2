# How GUI frameworks render ?

Note:

那我們開始第一個章節

注意這邊指的是通用的、不限於 web 或 android 或 ios 或 windows 的通用的概念

--

```ts
type Render = (x: unknown) => View;
```

<img src="src/img/what-is-x.png" height="200px"/>

Note:

我們用一個 render function 來表示 render 的過程

第一個問題要問大家，這個 input x，他的資料結構是甚麼?

提示: 打開 F12

--

<img src="src/img/tree.png" height="200px"/>

```ts
type Render = (tree: Tree) => View;
```

<br/>
🤔 Render the whole tree at once ?!

Note:

提示: 大家以前 DFS / WFS 怎麼做 ?

--

### HINT 1

```ts
type Render = Node => View
```

--

```ts
type Node = { children: Node[]; attributes: NodeAttributes };

type Render = Node => View

const render:Render = (node: Node) => {
  //...
  // render current node by attributes
  //...
  subViews = node.children.map(render);
  //...
  // compose subViews and currentView
  //...
  return view
};
```

Note:
概念上，我們可以想像我們把根結點丟進去一個 render function
然後他又去對它自己的子節點呼叫 render function

--

🙋 How to update the view ?

Note:

再呼叫一次 render

--

🙋 How to continuously update the view ?

Note:

要跑一個一直重畫的無窮迴圈

--

🙋 How users interact\
with the continuously updating view ?

Note:

使用者的事件是沒辦法插入這個畫畫的迴圈的

當我按下按鈕，它怎麼知道要

--

<img src="src/img/render-1.svg" height="600px"/>

Note:

其實靠分工合作就可以解決這個問題~

負責 UI 的觀察到使用者點了按鈕，以瀏覽器來說它就會把一個任務塞到 queue 裡面

render process 在下一次看到 queue 有東西，就把裡面的任務執行完畢

這個任務可能就會改變餵進去的樹狀結構物件，然後下一次 render，我們就看到新的畫面了
