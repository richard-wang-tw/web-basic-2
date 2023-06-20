---
layout: intro-image-right
image: forest.jpg
---

# How to send http request ?

---
layout: center
---

# HTTP Protocol
<img src='/ch4/protocol.svg' style="height:200px">

<!-- 在開始講怎麼發 http 請求之前，我們先簡單介紹一下 HTTP 協定

http 分成請求與回應兩種

請求通常是 client 發送給 server

回應則是 server to client

一般web使用場景都是 client 主動發請求， server 被動回應 -->

---
layout: center
---

## HTTP Request
<img src='/ch4/http-req.png' style="height:300px">

- [get](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods/GET)/[post](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods/POST)/[put](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods/PUT)/[delete](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods/DELETE) 
<!-- 
他既然是協定就會有一些說好的格式要遵循，就像是兩個人要對暗號一樣
所以我們發請求的時候，要遵循上面的格式

請問大家知道增刪改查對應到哪些功能嗎?
POST / DELETE / PUT / GET
 -->
---
layout: center
---

## HTTP Response

<img src='/ch4/http-res.png' style="height:300px">

- [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

<!-- 
他既然是協定就會有一些說好的格式要遵循，就像是兩個人要對暗號一樣
所以我們發請求的時候，要遵循上面的格式

請問大家知道增刪改查對應到哪些功能嗎?
POST / DELETE / PUT / GET
 -->

---
layout: center
---

## Http Headers - Cookie & Set-cookie

<img src='/ch4/cookie.svg' style="height:300px">

---
layout: center
---

## More Http Headers
- Authorization

```txt
Authorization: Basic Base64Encode(<username>:<password>)
Authorization: Bearer <your JSON web token>
```

- Content-Type

```txt
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

- Content-Disposition

```txt
Content-Disposition: inline
Content-Disposition: attachment; filename="filename.jpg"
```


---
layout: center
---

# HTTPS Protocol

<img src='/ch4/badguy.svg' style="height:300px">


<!-- 
我們瀏覽器裡面有一個預設的公證單位
他會頒發給所屬子單位基於密碼學可以驗證的證書
子單位又一層層頒發證書，直到最後頒發給我們前往的網站

透過這樣的機制，我們就可以確認網站是可以信任的
 -->

---
layout: center
---

<style>

.slidev-page-46 pre{
   font-size: 18px !important;
   line-height: 20px !important;
}
</style>

# Axios

```ts
try {
  // axios.<method>(url, (data), config)
  axios.get('http://xxx.com/yyy', {headers:{header1:'header value 1'}})
  axios.post('http://xxx.com/yyy', data, {headers:{header1:'header value 1'}})
} catch (e) {
    // ... your error handling code
}

```

---
layout: center
transition: fade-out
---

# Common Scenarios

- Select method
- Set url
- Set data

---
layout: center
transition: fade-out
---

# Special Case

- Select method
- Set url
- Set data
- Study html header api / axios config api
- Set config