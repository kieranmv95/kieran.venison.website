---
title: Hackathon to Build a Game in 3 Hours
date: "2024-01-11T18:00:00.000Z"
description: Join us on a journey through the chaos and creativity of our latest company hackathon. We formed teams and raced against the clock, developing a game in just 3-4 hours. How did it go? Dive into the excitement!
---

Hackathons are super fun. To date, I have done two other hackathons, the now-defunct Hack Manchester event. In which you had 24 hours non-stop to build something in a team of 6 to a theme provided by the sponsor. So when I was made aware that the company away day was going to be a hackathon, I was super excited. But it had some quirks I had never experienced before:

- It was building a game - new territory for me
- It was built in React - **Yes in react**, not in Unity or even using the Canvas _(I will expand on this shortly)_
- I was the only developer on the team of 5
- I had never met any of the people and started at the company 5 days prior to the event
- We **ONLY** had 3-4 hours of coding time

So how did it go, and what would I do differently?

## Brief

Before I continue, I will state that the challenge had a theme. The theme was around building a game for children currently in the healthcare system, something they can play to help reduce anxiety whilst in hospital or undergoing treatment of some kind because, as a TL:DR; there have been many studies showing that children who have an adverse event whilst in a hospital (such as being restrained to be sedated) have a noticeably longer recovery period. So the criteria were simple:

It could:

- Be Educational
- Be Something to distract them from the situation they are in
- Target age brackets of 2-5, 5-13, 13+ or all of them

We also had to develop offline material to support the game because not everyone in the healthcare system has access to the technology required to play the games, so that was an additional piece of criteria we had to meet which also abided by the above principles: educate, distract, and fit one or more of the age brackets.

## Planning

Once we had heard the brief, we had to plan.

We had ample time to plan. During the day, we all brought board games and some console games. We sat around and switched around different stations playing a variety of games to try and trigger a thought process or ideas we could use with our mini-games.

After playing some games, we split into our teams. The teams typically consisted of 5-6 people. As this was an entire company, it ended up making some interesting teams, so my team ended up looking like this:

- A Developer - myself
- Senior Designer
- Lead Talent Manager
- Senior Finance Manager
- NHS Healthcare Manager

This was by far the most peculiar team setup I had ever been a part of when doing a hackathon (typically it's primarily devs and maybe a test resource and a product person). But being a company event, we wanted the entire business to partake in this and experience what a hackathon is like and the kind of chaos and collaboration around it.

The first thing we did in our team **As individuals** was Crazy 8's. I will [link to an article to explain it more here](https://www.iamnotmypixels.com/how-to-use-crazy-8s-to-generate-design-ideas/) but in short, we got a piece of A4 paper and folded it so we had 8 rectangle seams on the page. Then in each rectangle, we wrote a brief description for a unique mini-game. Once the time was up (around 10 minutes in total, so you have to be quick) we had a few minutes to skim over them and pick the one which we thought was the best.

Once we had chosen one of our 8 short game descriptions, we flipped the sheet and spent a further 10 minutes sketching out the potential screens of that game to get a visual idea of how it would play and to demo back to our team.

Once this final round of self-planning was done, we stuck our ideas to a team whiteboard, and each pitched our idea to the team.

## Deciding which project to run

So as I mentioned at the start of the article, this is built in React. And the reason is that one of the Lead Engineers had a passion project that he had been working on at the time, A react-based game engine. The theory is that this game doesn't require the same large paradigm shift away from react technologies that front-end developers are used to using over to something like C# in Unity. And it was just something fun to try out. Why not! It's open source, so you can [have a nosey yourself!](https://overreactjs.github.io/docs/intro).

Being developed by a single person, who has kids and a full-time job means we are all using an alpha version of this and the docs are not completed fully and it's very much in its infancy, so we had to be careful how much of a game we decide we want to build, (at least if we want to present something)!

So how did we decide? [We dot voted](https://en.wikipedia.org/wiki/Dot-voting#:~:text=In%20dot%2Dvoting%20participants%20vote,a%20form%20of%20cumulative%20voting.)

- 2 votes each
- You cannot vote for your own game

I can't lie here so I will say some of the ideas scared me; one of them was VR/AR related, which was super cool, but an engine built on react and in its infancy and being a sole developer meant none of my votes are going here; it's basically a shotgun to the face if I pick this.

My Idea was a digital version of [Operation](<https://en.wikipedia.org/wiki/Operation_(game)>). A game in which you have to carefully remove pieces of the character's body without touching the side and making the nose glow red. But instead of just removing the piece, you had to traverse through a short maze to get to the operation table without touching the wall of the maze with your finger or the piece would fly back to the body. And in all honesty, while much simpler than the AR/VR one, it was still a big stretch in 3-4 hours. So I was kind of hoping people didn't like the sound of it.

Two more games cropped up with a similar theme of designing a character/animal and getting accessories for them and then guiding them through a treatment, such as applying a plaster, or explaining to them what's in a medical room and these started being 2d, which was a sigh of relief and actually decent ideas as well.

And last but not least, the idea we went with. A much simpler idea, a Where's Wally clone. The idea was simple:

- A series of scenes each containing something/things you have to find
- you tap the item to find and it disappears
- Once you have tapped the item/or all the times in the scene the next scene appears
- you fly through the scenes as quickly as possible to achieve a high score
- if you miss the target you lose 10% of the points you have earned
- Your high score was a calculation based on the overall time taken, your points and accuracy.

This game was simple, a flat 2d game with clickable objects a few unique screens which I could probably implement a generic way of adding more screens and then a simple end screen, time and score. A nice distracting game which can be for all the ages ranges if we change the complexity of the search!

## Building the game

Time to sit down and crack on.

I'm not going to share large snippets of code in this article because this is not a programming article as such, but I just want to share the ways in which I massively overcomplicated such a small project.

The idea was simple. The designer sends me some screen mockups and says here is the hidden thing and then I (Using the overreact/js engine) draw a grid, I went for a 100 x 100 grid. I then find the cell of the grid where the hidden item is and make that cell an invisible target. So to do this I could simply have an array of screen objects each containing a URL to the image and the cell to which the hidden item is in like so:

```js
const screens = [
  {
    url: './assets/screens/desert-1.png'
    cell: 6
  }
  {
    url: './assets/screens/desert-2.png'
    cell: 65
  }
  {
    url: './assets/screens/desert-3.png'
    cell: 90
  }
]
```

In a hackathon, you go into panic mode, you sit down and fire code at the wall, and it is ugly. It doesn't have to be the right solution, it just has to work, you're on limited time. so I implemented this, got the screens in, drew them to the page using the BitmapAsset component from the engine, hit a few blockers and bugs along the way then realized an issue.

**Not all the hidden items align with our perfect 10x10 grid system.** In some places, they overlap, how do you map a circle to a square etc, etc. So I kept the existing code as was and extended it, in a super hacky way like so:

```js
const screens = [
  {
    url: './assets/screens/desert-1.png'
    cell: 6,
    cells: [5,6,7,15,16,17]
  }
  {
    url: './assets/screens/desert-2.png'
    cell: 65,
    cells: [65,66,67]
  }
  {
    url: './assets/screens/desert-3.png'
    cell: 90,
    cells: [80,81,90,91]
  }
]
```

The above allowed me to say if they hit a cell and screen[x].cells.includes(cellHit) then they have found the hidden object! Move to the next screen.

The cell concept kind of looked like this image where the active cells (which would obviously be invisible) are highlighted green:

![wheres wally concept](whereswally.png)

But by this point, I had loads of broken score and timer logic in so it was already a mess, so doing basic things became tricky on top of the mountain of, well... shit.

But we ended up with 9 screens you could traverse through and click a range of cells to progress

Time was running out. We did a few bits to prettify it, adding an end screen to display the score and a start screen with a background image and a start button. But time was running so slim that we "cheated" the start screen, We used a full-screen image of the UI and selected the start cells to overlay the start button.

> "If it looks stupid but it works, it ain't stupid"

So all finished just in time, the messiest code I have written in years, but you can play the game, traverse through the screens and... it's actually pretty fun.

Given a couple more hours, and not having the sloppiest code known to man I wanted to implement things such as

- Saving high scores
- Randomising the screens
- Randomising the hidden item position
- Moving targets as a dexterity version

But after all of this complexity in drawing a grid and making cell ranges, I realised something, at the very end that made me laugh.

the simplicity of this game meant could build this in about 10 minutes if I had just made a drawable SVG to the screen and popped onClick on it! I did have access to the HTML DOM after all!

![kanye west angry laugh](kanye-west-laugh.gif)

With that in mind, even though the time cap was only 3-4 hours it would have been wiser to spend 40 minutes of that time actually planning the build, I would have likely got to the same game in terms of end result and would likely have faced other issues from doing a different approach but I strongly think I would have come to a better structured approach which would be much more extensible and polished than this one.

## It wasn't just a game

At the same time, the game was going on I almost forgot the team was working on multiple things, the designer was constantly firing assets to me and we had a mini collab back and forth and as we developed the game and the rest of the team fired us ideas for the screen and worked on the offline assets for the game.

The offline game was as simple a concept as the game itself. A series of handout sheets with items you could find on related to healthcare as an educational challenge and the concept of a mural-style wallpaper you could put in children's waiting areas with a variety of things they could look for to distract them from the situation they are in! an amazing, yet so simple concept. They even made a series of sketches and drawings and fastened them together and rolled it out during the demo back to the business to explain the concept which was super cool to see as I had been heads down in my bubble for the last 3 hours!

## The end result

- A game that works 🤯
- A game that is vastly overcomplicated
- Spent some time using a fun engine!
- Got to experience a proper cross-functional hackathon team
- Had a laugh, at my own expense
- Got to see some viable projects that could benefit the initial brief
