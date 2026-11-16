---
obsidianUIMode: preview
gist: "x"
---
**T5.** (1) Do the tabs switch? (2) Does the input in tab B edit `gist`? (3) After switching tabs a few times, does `git status` show this file unmodified (only a `gist` edit should change it)?

```meta-bind
INPUT[select(class(tabbed), option(A), option(B)):memory^tab]
```
> [!tabbed-box]
> > [!tab] A
> > Tab A content.
>
> > [!tab] B
> > `INPUT[text:gist]`
