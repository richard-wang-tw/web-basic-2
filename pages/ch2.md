---
layout: intro-image-right
image: montain.jpg
---

# Parsing

## in Effect-TS / schema

---
layout: statement
---

#  What is parsing ?

---
layout: center
---

<style>
.slidev-page-15 pre{
   font-size: 32px !important;
   line-height: 36px !important;
}
</style>

<img src="/ch2/parsing.svg" style='height:500px' alt='parsing'/>


---
layout: statement
---

#  How to implement parse  ?


---
layout: center
---

<style>
.slidev-page-17 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Getting started

<br/>

### install

```
npm i @effect/schema
```
<br/>

### import

```ts
import * as S from '@effect/schema/Schema'
```


---
layout: center
---

<style>
.slidev-page-18 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Define abstract syntax tree (AST)

### product type

```ts
import * as S from '@effect/schema/Schema'

const car = S.struct({
    make: S.string,
    model: S.string
})
```

<!-- 
我們的編譯器或語法分析器 (例如 ts server) 能幫我們推演型別
其實是因為背後有建立 AST
我們要做的事情其實跟編譯器做的很像
所以我們也要建一個型別檢查專用的 AST 

這邊可以很方便地從 domain modeling 轉換過來
-->


---
layout: center
---

<style>
.slidev-page-19 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Call parse function of schema

### product type

```ts
const carSchema = S.struct({
    make: S.string,
    model: S.string
})

const parseCar = S.parse(carSchema)

const myCar = parseCar(data)
// type of myCar - {make:string, model:string}
```



---
layout: center
---


<style>
.slidev-page-20 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

##  Handle parsing error

### Non-FP  

```ts

try {
  const myCar = S.parse(carSchema)(data)
} catch (e) {
 //handle error here
}
```

### FP  

```ts
const myCar = S.parseEither(carSchema)(data)
// type of myCar - Either<ParseError, Car>
```


---
layout: center
transition: fade-out
---

<style>
.slidev-page-21 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

#  Error message

### schema
```
Error: error(s) found
└─ ["make"]
   └─ Expected string, actual 2008
```
<div className='color-neutral-600'>
* The error message of ParseError can be obtained through the formatErrors function
</div>
<br/><br/>

### io-ts
```
Invalid value 2008 supplied to : 
{ make: string, model: string }/make: string
```

