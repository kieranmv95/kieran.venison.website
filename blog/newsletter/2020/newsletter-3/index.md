---
title: Newsletter Edition 3
date: "2020-07-22T12:00:00.284Z"
description: Welcome to the third newsletter. GitHub's getting messy again, time for a spring-clean and how far have I got with TS in a week 
---

Welcome to the third newsletter. GitHub's getting messy again, time for a spring-clean. How far have I got with TS in a week. 

## A week in words

This week has been a very relaxed week. I seem to be having a lot of them at the moment, I need to get back into the swing of dev at the minute with lock down throwing things off balance.

This week I only did a couple of real things development wise. I carried on learning and trying to progress with TypeScript and had a big spring clean on my development resources. Sometimes it just needs doing.  

## Spring Clean

Like most developers I use source control, GitHub to be specific. On GitHub your most recent repos (by commit I think) start at the top. This often means I don't often scroll down through my repositories and see the horrifying backlog of dead projects and junk I have actually accumulated.

When looking through github I found the following repos:

- 12 repos dedicated to simply learning a topic and then left to rot once I had a good enough understanding. Everything from Docker to Unity Projects.
- 5 repos which are all the exact same project! This is from the amount of restarts and reworks it went under (never to be released).
-  5 of the repos are live websites.
    - <a href="https://frontendwiz.co.uk/" target="_blank">Front End Wizard</a> (which once I have finished learning TS is being rebuilt).
    - This website
    - My younger brothers website
    - My significant others website
    - An old <a href="https://www.npmjs.com/package/cssmoj" target="_blank">NPM CSS package</a> I created and published (entirely as a joke that never progressed).
- 8 repos that are literally just code dumps and junk or projects that died beyond recognition.

It could be worse, a lot worse. That being said, it's still a dump. So I decided to clean them up. Give myself a nice focused view of GitHub and have every repository that I have stored on it be either a website that is live or a project I am actively working on.
So in the matter of an hour I went from 30 repos to 5 repos.

As I have not actually started working on any new projects, and I am not actively working on any of the projects in my GitHub. I decided to just delete everything. The only things I did not delete are the live projects that are hosted. Leaving me with 5 projects in GitHub, refreshing.

The spring-clean is not essential, and you certainly don't need to get trigger-happy like I did and delete everything. Cleaning up at least a bit to give yourself focus is sometimes a really boosting thing, everything in my GitHub is now live or active work. In my opinion my GitHub is a mixture of things. Firstly it is my playground, I like to have a mess around with code and dump it there for a bit as a reference. More recently I have started thinking of it as a kind of living CV, and since I do actively do development outside of work I might as well keep that up to date. It shows what I am learning what I am comfortable with and how I do it.  

Try it out! get rid of all the junk, it's a relief!

## TypeScript Progress

So last week I started on TypeScript. The end goal was to rebuild my <a href="https://frontendwiz.co.uk/" target="_blank">Front End Wizard</a> website using TypeScript & React.

I made no progress on that overall project this week, but I have started delving into the TypeScript fundamentals. To start learning it I'm using a Pluralsight account and following the TypeScript path. I must say I am not the biggest fan of Pluralsight as the talks and demo's have such a lecture format. That being said the TyeScript content is bearable so I have been plowing through that.

As I said, I have been learning TypeScript from the ground up, so a lot of this week had been understanding how to set it up and geting used to the configuration aspect of ts.

Below are some of my favourite takeaways from parts that I have done so far 

- Setting types to variables. Simple but powerful.
 
```typescript
  let myStringValue: string = 'Hello, World';
  myStringValue = 1; // ERROR
  myStringValue = "This works"; // SUCCESS 
```

- Union Types. A nice way of saying something can be of type A or B without using any.

```typescript
  // Bad example but you get the point; 
  let myStringNumberOrUndefinedValue: number | string | undefined;
  myStringNumberOrUndefinedValue = 2; // SUCCESS
  myStringNumberOrUndefinedValue = "string"; // SUCCESS
  myStringNumberOrUndefinedValue = undefined; // SUCCESS
  myStringNumberOrUndefinedValue = []; // ERROR
```

- Last but not least, custom types / interfaces. By far my favourite feature of TypeScript. having this interface means I do not actually need to look around the project for the shape of a payload. In this example, When I call `getAllPeople` I am setting that return value to an array of the type IPerson and then returning the array. This means in most IDE's with ts support built in will get syntax highlighting for that interface and won't have to keep searching for the shape of the payload!

```typescript
interface IPerson {
  name: string;
  age: number;
  profession: {
    name: string;
    yearsExperience: number;
  };
  hobbies?: string[] // this ?: means this one is optional
}

const asyncFunction = async (): Promise<IPerson[]>  => {
  const people: IPerson[] = await getAllPeople();
  return people;
} 
``` 

For now These are the biggest takeaways I have found but I'm still progressing. We will see what next week brings and hopefully soon I can start wrapping it into some React code.
 
## Project Chat

Another week with no progress on projects! But that's expected as I am still learning the TypeScript needed to build my project. I think this week I will spend some time planning the project ready to start!

## Week Coding Breakdown

Check out <a href="https://wakatime.com/" target="_blank">Wakatime</a> to find out what your coding breakdown is!

Coding stats for the last 7 days (where usage was over 5%):

|Language|Percentage|Description|
|---|---|---|
|.jsx|**38%**|Work related React Projects|
|.ts|**17%**|Up-skilling in Typescript, need to get theses numbers up|
|.css|**18%**|Work related React Projects|
|.md|**12%**|Writing up this post!|
|.html|**5%**|Some of the Pluralsight course material for TypeScript had me updating html files|
|.js|**5%**|Skimming through the output TyeScript files to see what the compilation looks like|

## Hot picks
Every week I pick out a few cool resources I have recently found and share them here! 

- <a href="https://flexbox.io/" target="_blank">Wesbos Flex</a> - Struggling with Flexbox? the Free video course will change all of that!
- <a href="https://testingjavascript.com/" target="_blank">Javascript Testing</a> - The most in depth premium testing course I have ever seen for JavaScript 
- <a href="https://ui.dev/newsletters/react/" target="_blank">React Newsletter</a> -Weekly React newsletter straight to your inbox. Useful snippets, links to blog posts and react update news!

## Off topic

Outside of work there's not been a lot going on recently. I have been doing a lot of admin work as you can see by my spring clean. I finally got round to setting up <a href="https://www.youneedabudget.com/" target="_blank">YNAB</a> to get all my finances in order. Other than that and a trip to the driving range, its been a pretty relaxed week.  

Until next Wednesday, Have a great week! 