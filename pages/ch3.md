---
layout: intro-image-right
image: montain.jpg
---

# Filter

## in Effect-TS / schema

---
layout: statement
---

#  What is filter ?

---
layout: statement
---

<img src="/ch3/filter.svg" style='height:500px' alt='parsing'/>

---
layout: center
---

<style>
.slidev-page-25  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Let's review the car schema

```ts
const car = S.struct({
    make: S.string, 
    model: S.string
})
```

## What if you want to check the string length ?

<!-- 
我們在做 domain modeling 的時候，常常會有字數上下限的限制對吧
看起來剛才 parsing 的樣子，並無法滿足檢查字數的需求 
-->


---
layout: center
---

<style>
.slidev-page-26  pre{
  font-size: 28px !important;
  line-height: 32px !important;
}
</style>


## With filter !
```ts
const model = pipe(
    S.string,
    S.nonEmpty(), //filter len > 0
    S.maxLength(200) //filter <= 200
  )

const car = S.struct({
  make: S.string, 
  model: model
})
```

<!-- 
有了 filter 之後，就可以輕鬆做好檢查了
-->


---
layout: center
---
## There are more filters in schema [README](https://github.com/Effect-TS/schema#readme)
<img src="/ch3/filters.png" style='height:500px' alt='unnecessary'/>

---
layout: center
transition: fade-out
---

<style>
.slidev-page-28  pre{
  font-size: 24px !important;
  line-height: 28px !important;
}
</style>

## Customized filter

```ts
// predicate function
const startWithA = (s: string) => s[0] === 'A'

const model = pipe(
    S.string,
    S.nonEmpty(), 
    S.maxLength(200), 
    S.filter(startWithA)  
    // filter with predicate function
  )

const car = S.struct({
  make: S.string, 
  model: model
})
```

<!-- 
這邊的 predicate function 就可以隨心所欲做任何檢查
甚至可以使用 regex 等方式
-->