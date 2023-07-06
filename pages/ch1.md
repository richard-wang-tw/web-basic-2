---
layout: intro-image-right
image: montain.jpg
---

# Why

## Effect-TS / schema ?


<!-- 接下來我會努力嘗試傳教，讓大家對這個工具有興趣 -->

---
layout: center
---

# Typescript "check" types (X)

<br/>

# Typescript "infer" types (O)




---
layout: center
---

<style>
.slidev-page-5 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ts
```ts
const input = 100 as any as string

input.split(',')
```

### console
```txt
console.log(input.split(',')) 
                  ^
TypeError: input.split is not a function
```

---
layout: center
---


<div className="w-full flex justify-center">
<h1 className="">Using "any" in typescript</h1>
</div>
<br/>
<img src="/ch1/unnecessary.jpg" style='height:300px' alt='unnecessary'/>



---
layout: center
---

<style>
.slidev-page-7 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ag-grid
```ts
interface RowClickedEvent<TData = any, TContext = any> {
  data: TData | undefined;
  ...
}
//type of data may be any
```

### Axios
```ts
const { data } = await axios.get('/user?ID=12345');
//type of data is any
```


---
layout: statement
---

#  Type checking is necessary


---
layout: center
---


<style>
.slidev-page-9 pre{
   font-size: 20px !important;
   line-height: 28px !important;
}
</style>

### typeof - for primitive type
```ts
typeof "test" === "string" // true
typeof 0 === "string" // false
typeof { a: 0 } === "object" // true
```

### instanceof - for class
```ts
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true
```


---
layout: statement
---

#  Native checking is insufficient


---
layout: center
---

-| zod | io-ts | schema 
-|-|-|-
parsing | ⭐⭐⭐ | ⭐⭐⭐ |⭐⭐⭐
filter | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
transform | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
composition | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
fp-ts compatibility | ⭐🔘🔘 | ⭐⭐⭐ |⭐⭐⭐ 
---
transition: fade-out
layout: center
---

# 🏆 Effect-TS/schema  🏆