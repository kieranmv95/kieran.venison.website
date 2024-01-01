---
title: Breaking up with Bootstrap
date: "2018-08-01T21:30:00.284Z"
description: The rise of bootstrap over the years has been great and whilst I have admired it for a while, for me personally, the tables have turned. For years it has been a blessing. A way to quickly build up websites with minimal effort. I don't have to think when I'm using it. I go to the documentation and copy a snippet of code and I am good to go. What went wrong?
---

The rise of bootstrap over the years has been great and whilst I have admired it for a while, for me personally, the tables have turned. For years it has been a blessing. A way to quickly build up websites with minimal effort. I don't have to think when I'm using it. I go to the documentation and copy a snippet of code and I am good to go. What went wrong?

## Whats up with bootstrap then

Nothing is up with it as such. It has been a good framework for years. It removed the need for developers to do some fiddly bits of CSS.

CSS itself has matured a lot since bootstrap but people have just got stuck in the habit of using it regardless. A lot of my gripes with bootstrap come from using it in teams and multiple people using it in different ways not knowing some of the features it contains. here are a few of my main issues:

Most people just take the entire framework, It's a bit weighty if all you want to use is the grid. Bootstrap 4 is only 138kb minified I hear you say, this adds up. You have 138kb of minified CSS. If you also decide to get the JS files you are now at roughly 187 kb. Now I need jquery. Let's add even more weight. These might be small numbers but they are adding up one piece at a time.

When I'm looking at a project that uses bootstrap I find that the custom CSS is 20% unique features and the rest of it is overwrites for bootstrap. You are adding more weight with every line overwriting bootstrap. This surely isn't what you want?

And last but not least. Bootstrap has lots of features. As amazing as it may seem many people don't know them all and they end up building something that bootstrap already offers but they didn't know. I find this issue arrives frequently when working in teams with multiple people. Especially when they are not very familiar with bootstrap or don't use it often. Let's stop reinventing the wheel guys!

## The breakup

For the reasons stated above, I decided I'm going to take the plunge. For future products, I am going to remove bootstrap from my life. At first this seemed daunting. I had almost become dependent on it over the years, I'm talking nearly 3 years of using it in everything I did.
I'm losing all the features and niceties that bootstrap provides what am I going to do...

I decided. I'm going to go vanilla. Stop using frameworks altogether. Let's just write CSS without piling frameworks onto it until it resembles the image in my head.

## Enter CSS Grid

The rise of CSS grid in the last year has been astonishing. Even more surprising the support for it is amazing. [CanIUse - GRID](https://caniuse.com/#search=Grid). I'm not going to cover the ins and outs of CSS grid in this article because I'm going to save that for a future article. it's a big topic.

Basically, CSS grid is a way of creating grid-based structures in CSS. They are highly customizable and allow us to do things that were really hard before it or just downright impossible. Checkout [Wesbos course on CSS grid](https://cssgrid.io/), its free. So I replaced bootstrap with vanilla CSS using CSS Grid. I am still using SCSS syntax and compiling it to keep my files neat and seperate, other than that no frameworks.

This meant I don't have to worry about downloading Bootstrap and configuring it to pull out all the pieces I don't need. With CSS grid I can achieve the exact same thing with much simpler markup than I had to with bootstrap. my HTML files have become smaller. My CSS files have become larger! This is fine! It's become larger because I have started from scratch. I had to make all my buttons and all my typography CSS from scratch. It's still lighter than pulling bootstrap and overwriting things. And its a hell of a lot more customizable without having to break grid system or rely on any hacks to get around some of the bootstrap limitations.

As a quick example below is the HTML and CSS grid markup to create a very simple grid with 12 columns with a 30px gutter (exactly the same as bootstrap).

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>...</div>
  <div>11</div>
  <div>12</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
}
```

The Grid code above may not be familiar to you but I would highly recommend looking into it. This is not SCSS, LESS or any other pre-processor its native CSS! Creating grid layout becomes the easiest part of your day. Combined with flexbox it is extremely powerful. As you can see by the example above it is extremely simple. I have created a 12 column grid with a 30px gap in just 3 lines of CSS!

## The Results

I have been writing CSS without frameworks for about a year now. And one thing is sure, I haven't looked back. My skills writing CSS are getting better by the day because I'm no longer relying on CSS 'all in one' frameworks to do it for me. This is not just Bootstrap, but its the main culprit for me.

The first time I attempted this I just decided to throw it into a project that I was currently working on with a backend developer who was doing some front end with me at the time. I managed to build the same component I would in bootstrap with about 30% less HTML, and a small chunk of custom CSS. The backend dev went to go in and change something and realized he couldn't. We had a quick discussion, I told him my reasons and he also agreed to go with it and see how the journey goes, he had a look into CSS grid and I run a small brown bag with the company I worked for at the time. We continued to build the product in Grid. No looking back.

I no longer use frameworks and even better, the entire team I now work with is building web applications without them too. We are sharing knowledge about the roots of CSS and not the knowledge of a framework that uses CSS under the hood.
I am not saying Ditch Bootstrap or any other framework you might be using. This is just to show you that with the advancements in CSS it's a lot easier to do some of the things you might be using a framework for. if you are debating switching but don't want to, create a mini project and just give it a shot, you might be surprised.
