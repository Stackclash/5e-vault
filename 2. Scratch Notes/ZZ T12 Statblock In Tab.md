---
obsidianUIMode: preview
statblock: inline
---
**T12.** (1) Does the stat block render inside the tab below? (2) In the Initiative Tracker, "Add creature", search **ZZ T12 Wolf**: is it found? (3) Does `![[ZZ T12 Statblock In Tab#^statblock]]` below render it?

```meta-bind
INPUT[select(class(tabbed), option(Overview), option(Stats)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] Overview
> > Overview text.
>
> > [!tab|no-t] Stats
> > ```statblock
> > name: ZZ T12 Wolf
> > size: Medium
> > type: beast
> > ac: 13
> > hp: 11
> > hit_dice: 2d8 + 2
> > speed: 40 ft.
> > stats: [12, 15, 12, 3, 12, 6]
> > cr: 1/4
> > ```
> > ^statblock

Embed test:

![[ZZ T12 Statblock In Tab#^statblock]]
