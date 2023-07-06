---
layout: intro-image-right
image: montain.jpg
---

<style>
#slideshow pre {
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>



# Composition

## in Effect-TS / schema

---
layout: center
---

## How to change start with A to start with B

```ts
const startWithA = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carA = S.struct({
    make: S.string, 
    model: startWithA,
    date: S.Date
})
```

---
layout: center
---



# Omit and Extend


```ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carB = pipe(
  carA,
  S.omit('model'),
  S.extend(startWithB)
)
```

## How to get models of cars ?


---
layout: center
---

# Pick


```ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const models = pipe(
  S.union(
    pipe(carA, S.pick('model')),
    pipe(carB, S.pick('model')),
  )
)
```

---
layout: center
transition: fade-out
---

## There are more utilities in [README](https://github.com/Effect-TS/schema#readme) !

- optional
- optional with default value
- partial
- required
- recursive types
- ....

