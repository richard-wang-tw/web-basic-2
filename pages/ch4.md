---
layout: intro-image-right
image: montain.jpg
---

# Transformer

## in Effect-TS / schema

---
layout: statement
---

#  What is transformer ?

---
layout: center
---

<img src="/ch4/transformer.png" style='height:500px' alt='transformer'/>

---
layout: center
---

<img src="/ch4/trans.svg" style='height:500px' alt='trans'/>



---
layout: center
---

<style>
.slidev-page-33  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Date transformer
```ts
const date = pipe(
  '2023-06-05T12:39:23.000Z',
  S.parseEither(S.Date)
)

//Either<ParseError, Date>

```

---
layout: statement
---

# How to get type of

#  a transformer ?


---
layout: center
---

<style>
.slidev-page-35  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type
```ts

//string
type from = S.From<typeof S.Date> 

//Date
type to = S.To<typeof S.Date> 

```

<!-- 
不知道大家有沒有發現，transformer 的型別出入的型別會是不一樣的
有時候我們在定義 function 或變數的時候，需要拿型別參考，怎麼辦呢?
 -->

---
layout: center
---

<style>
.slidev-page-36  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type of composed schema
```ts
const car = S.struct({
    make: S.string, 
    model: S.string,
    date: S.Date
})

// {make:string, model:string, date:string}
const CarSource = S.From<typeof car>

// {make:string, model:string, date:Date}
const CarDest = S.To<typeof car>
```


---
layout: center
transition: fade-out
---

<style>
.slidev-page-37  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Customized transformer
```ts
const UpperCase = S.transform(
  S.string, //from type
  S.string, //to type
  (s) = s.toUpperCase(),
  (s)=> s
)
```
