---
title: Newsletter Edition 5
date: "2020-08-05T12:00:00.284Z"
description: Learn how to set up a React + TypeScript project from scratch in minutes with Parcel.js. Check out the progress on the FrontEndWizard project, which has now officially kicked off.
---

## A week in words

This week I have thoroughly bedded myself into starting the Front End Wizard project. With the learnings from the past few weeks of TypeScript it is a React + TypeScript project. I have also started thinking about the next side project.

## Setting up a React + TypeScript project using Parcel

For Front End Wizard I am using <a href="https://parceljs.org/" target="_blank">Parcel.js</a> as the bundler. Parcel claims that it’s a “Blazing fast, zero configuration web application bundler”. I must say, it is not wrong. This was a nice break away from my usual route of using CRA.

Since this is my first time setting up a project not only with TypeScript but also with Parcel, I thought it would be worth creating a mini guide.

### New Project

First we need to create a new folder, navigate inside that folder and then initialise npm, we will add the --y flag on to select all the defaults when we initialise npm.

```
mkdir parcel-tutorial
cd parcel-tutorial 
npm init --y
```

### Dependencies

First we need to install the parcel bundler. This can either be globally installed or installed in the project. For the sake of the demo I am going to install this inside the project like so

```
npm i --save-dev parcel-bundler
```

Now we have the parcel bundler we can install the react dependencies

```
npm i --save react react-dom
```

Last but not least we need to install the typescript dependencies

```
npm i --save-dev typescript @types/react @types/react-dom
```

### Config Time

Now we have all the dependencies install to run a React typescript application we need to do a small amount of config

First in the route of our project we need to add a tsconfig.json which we can do by running `npx tsc --init`. Once this is done you should see the tsconfig.json in the route of your project. There’s lots of options in this but if you want to jump forward you can replace it with my version below to continue with the tutorial

```json
{
 "compilerOptions": {
   "target": "es5",
   "module": "esnext",
   "lib": [
     "ESNext",
     "DOM"
   ],
   "jsx": "react",
   "sourceMap": true,
   "strict": true,
   "moduleResolution": "node",
   "baseUrl": "./src",
   "paths": {
     "~/*": [ "./*" ]
   },
   "typeRoots": [
     "node_modules/@types"
   ],
   "allowSyntheticDefaultImports": true,
   "esModuleInterop": true,
 },
 "include": [
   "src/**/*"
 ]
}
```

Last bit of config is in the package.json file. We need to add our start script. Inside our scripts add the following `”start”` line:

```
"start": "parcel public/index.html --open"
```

We don’t have that file yet but we will be creating this in the next section
### Let’s get writing React…

...Nearly, There's just one last thing to do before we can write our react code. The line we put inside our package.json start script `parcel public/index.html --open`. We need to create that html file.

Create a new directory inside the route of our project called public and create and index.html file inside that new directory. Once you have the new html file copy in the following code

```html
<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport"
         content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Parcek Tutorial</title>
</head>
<body>
   <noscript>You need to enable Javascript to run this application.</noscript>
   <div id="root"></div>
   <script src="../src/index.tsx"></script>
</body>
</html>
```

This is just a bit of boilerplate HTML:5 layout I use in all my projects from running html:5 and hitting tab in most modern IDE’s. Inside the body we have added noscript to catch any users not running JS.

Then we have the empty div with the id of root. This is where we will render our react application.

Last but not least the magic line `<script src="../src/index.tsx"></script>`. This file doesn’t exist yet but we are about to create it. When we use our npm start script telling parcel to run this html file it will pick up that this script tag is pointing at a index.tsx file in src directory and run that, so let’s create it!

Inside the route of our project create a src directory and inside the src directory create the index.tsx file. Inside that file paste the following code:

```jsx
import React from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => <h1>Hello, World!</h1>;

ReactDOM.render(<App />, document.getElementById("root"));

```

All this is doing is importing react, react-dom and rendering our App component to the root div on the html file. This will display hello world in h1 tags.

And this is it.

### Running the Application

Now we are all done, you can witness the power of the zero configuration parcel bundler.  run `npm start` from your terminal and watch it open up a new browser tab for you to your React + TypeScript hello world project!  

## Project Chat   

Welcome to the weekly project chat. This week we have very good progress on front end wizard and a new mini project on the horizon.

### Front End Wizard

So this week I have spent a lot of time thinking about the direction I would like <a href="http://frontendwiz.co.uk/" target="_blank">Front End Wizard</a> to go in. If you have been following the progress on the <a href="https://trello.com/b/aIKttr7S/front-end-wizard" target="_blank">Trello board</a> you will see I have been busy writing up the projects tickets and refining them. It is now in a good place to get started!

I have mapped out pretty much the entire of the Front End for this project in trello and put unrefined tickets in place for the Backend work. I figured I might as well start having that in place. I did say last week there would be no code on this project this week but since I got this far I just cracked on.

Check out the <a href="https://trello.com/b/aIKttr7S/front-end-wizard" target="_blank">Trello board</a> to see the progress. And as soon as an MVP is up to scratch I will make it public and share with the world!

So far I have:

- Setup up the project
- Created the Header
- Created the Footer
- Added a version history page

Next week I will be sure to include screenshots and gif of the progress! 

### Venison.dev

This is a domain I have had for a while. Currently, it only has a side project I was working on once upon a time. I have decided that I am going to remove that side project from it and use this as a showcase website. Its not going to be anything special but a page with links out to interesting projects I have done!

I have not implemented this yet but watch this space as it will probably only be a day long project as its essentially going to be a page of links. 

## Week Coding Breakdown

Check out <a href="https://wakatime.com/" target="_blank">Wakatime</a> to find out what your coding breakdown is!

Coding stats for the last 7 days `(usage > 5% && extension !== '.md')`:

|Language|Percentage|Description|
|---|---|---|
|.ts|**23%**|With rebuilding FEW in TypeScript this has overtaken this week|
|.jsx|**21%**|Non TypeScript React projects keep this stable|
|.json|**19%**|Lots of config with setting up a new project this week|
|.scss|**10%**|Decided to use SASS in FEW|
|.css|**8%**|Originally started FEW with CSS before changing my mind|
|.js|**5%**|I Cant even remember what this was on!|

## Hot picks

Every week I pick out a few cool resources I have recently found and share them here! 

- <a href="https://parceljs.org/" target="_blank">Parcel.js</a> - Zero configuration Bundler, I cannot stress how easy this is to use!  
- <a href="https://www.reddit.com/r/ProgrammerHumor/" target="_blank">Reddit Programmer Humor</a> - A light-hearted subreddit dedicated to jokes around programming
pa
## Off topic

My Golf Clubs finally arrived and I went up to the dricing range with them! Was great not having to borrow a set anymore. Now i just need to improve with them and get myself on a course.

A local lockdown has been put in place for my area (Manchester, UK). In all honesty it doesn't make too much of a difference for me, more chill time I suppose.

Until next Wednesday, Auf Wiedersehen!   