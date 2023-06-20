---
layout: intro-image-right
image: forest.jpg
---

# How to store data in browser ? 

<!-- 先請大家想想看 -->

---
layout: center
---

**storage type** |**validity** | **upper limit** | **example**
-|----------|---------|---------
session storage | session | 10 MB| sessionStorage.setItem("key", "value");
local storage | - | 10 MB| localStorage.setItem("myCat", "Tom");
cookie | flexible | 4 KB| document.cookie="username=John Doe";
indexed db | - |  50 MB / flexible | window.indexedDB.open("xxx", 3);

