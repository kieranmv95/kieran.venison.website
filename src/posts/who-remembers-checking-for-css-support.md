---
title: Who Remembers Having to Check if You Could Use a CSS Feature?
date: "2025-07-07T10:00:00.000Z"
description: A cheeky trip down memory lane to when we had to check caniuse.com before writing CSS—and how tools like Tailwind have made that a distant memory.
devTo: https://dev.to/kieranmv95/who-remembers-having-to-check-if-you-could-use-a-css-feature-f05
---

Ah, `caniuse.com`. My old flame. My partner through the dark ages of Internet Explorer 11. The friend I visited before every bold declaration of `display: grid;`. The loyal confidant who would gently whisper, _“Not yet, friend. Not in Safari.”_

But something strange happened recently.

I was knee-deep in a new project, slinging Tailwind classes like a cowboy in a typographic shootout, when it hit me:

**I can't remember the last time I checked if I _could_ use a CSS feature.**

Tailwind had quietly stolen that part of my workflow. Stolen it and buried it six feet under a grave marked _"RIP Vendor Prefixes"_. And honestly? I didn’t even send flowers.

---

## A Love Letter to `caniuse.com`

Remember the ritual?

1. You spot a fancy new CSS property on CSS-Tricks.
2. Your brain lights up like a Christmas tree.
3. You open a new tab with trembling fingers.
4. You type: `caniuse.com`
5. You pray.
6. You weep.

I used to **schedule my ambition around browser support**.  
“Can I use `position: sticky`?” Not unless you enjoy watching IE11 ruin your life and your layout.

---

## Then Tailwind Came Along

Now? I write `sticky top-0` and just assume it’ll work.  
Not because I’m cocky (okay, maybe a little), but because I trust that the Tailwind team has already done the legwork.

Tailwind, PostCSS, Autoprefixer, and friends have become this benevolent cabal of CSS sorcerers that quietly smooth over the messy parts of the web.  
They don’t ask for thanks. They just let you build things that don’t spontaneously combust in Edge.

Honestly, I don’t even remember what browser version we’re supporting anymore.  
That used to be printed on the wall. Now it’s more like a vague vibe.  
**“Modern enough, probably.”**

---

## Are We Getting Lazy?

Maybe. But also, maybe we’ve earned it?

After years of getting gaslit by `float`, after wrestling with `flexbox` bugs that only existed in Firefox 68, after prefixing everything like we were trying to cast CSS spells—**we deserve this era of ignorant bliss.**

Somewhere, someone is still checking `caniuse.com`.  
Some poor soul trying to support a Smart TV browser in a prison system in rural Nebraska.  
But not me. Not anymore.

---

## In Summary

Do I miss `caniuse.com`?  
A little. Like you miss an ex that taught you a lot but also made you question your sanity.

But now? Now I just write `grid grid-cols-3 gap-6` and move on with my life.  
And that, my friends, is progress.

---

**PS:** If you still use `float`, we need to talk.  
And by "talk", I mean "stage an intervention".

---
