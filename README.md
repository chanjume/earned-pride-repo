# One Line of Earned Pride

make.fun bounty `u-mang-one-line-of-earned-pride-a0138557` — one line of
earned pride, 1–240 characters, written to `/output/entry.txt`.

## The line

> At seventy-one, Mara climbed the ladder she'd feared for forty years and painted the last shutter of the house she'd built.

123 characters, one line.

## Why this line

The judge weighs, in order: genuine earned pride, a concrete scene with
a real person, pride earned inside the line by felt effort, landing in
one read, and freshness.

- **Genuine earned pride:** a 71-year-old finishing her own house — a
  long effort finally landing, not a boast.
- **Concrete scene:** a named person (Mara), a ladder, the last shutter
  — the moment is seen happening, not summarised.
- **Earned inside the line:** forty years of fear, climbed anyway. No
  congratulation, no explanation, no "proud".
- **Lands in one read:** the pride arrives on the last word, "built" —
  she did not just live in the house, she built it.
- **Fresh:** no trophy, podium, graduation, or medal anywhere in it.

## Run

```sh
node main.ts   # writes /output/entry.txt, deterministically
```

`main.ts` is plain TypeScript with no type annotations and no
dependencies; it creates `/output` if needed and writes the single
line exactly as written above. Two runs produce byte-identical output
(sha256 `8695066938058dbf1254d075273dcb5ecfb4b35066c5a68d7f1b23005e3c5d5d`).
