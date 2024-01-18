---
title: Tailwind, My Altered Opinion
date: "2024-01-01T18:00:00.000Z"
description: My two cents on tailwind and how my opinion has adapted and changed over the past 3 years!
---

When Tailwind first emerged on the web development scene, I found myself firmly rooted in my comfort zone, relying on familiar practices and tools. As someone who wasn't an avid user of many frameworks, I typically stuck to a minimalistic approach, often implementing a reset like Meyerweb or resorting to the well-established Bootstrap when the need arose. Tailwind, with its extensive list of classes, initially struck me as overwhelming and cluttered—an apparent departure from the simplicity I had grown accustomed to. Perhaps it was a reluctance to embrace change or an attachment to my existing workflow that fueled my initial skepticism. However, as time passed, so did my perspective. Join me as I unravel the factors that prompted a shift in my opinions and ultimately led me to reconsider this dynamic framework.

## First Opinion

When Tailwind first entered the web development scene, I found myself deeply entrenched in the practice of crafting everything from scratch. Bootstrap, at most, was a concession for minor components, particularly its grid system. Despite the availability of newer layout tools like Grid and Flex, I clung to Bootstrap's grid system, feeling a sense of control over my code. I was a practitioner of the BEM CSS methodology, believing in its ability to maintain cleanliness and organisation in my class names.

However, the arrival of Tailwind felt like a bombardment of class names, an assault on the meticulous structure I had painstakingly built. The HTML files seemed to burst at the seams with a myriad of class names, a sight that was particularly disconcerting if you adhered to ESLint rules restricting line width to 120 characters or something similar. While I couldn't deny the visually stunning creations people achieved with Tailwind, I couldn't reconcile the idea of sacrificing the clarity of my HTML for such results. It felt as though the framework demanded a compromise that other tools didn't.

In my initial encounter, I conducted only a cursory trial, swiftly dismissing Tailwind for both personal and project use. My dismissal extended to fervent discussions with friends and colleagues, showcasing a degree of inflexibility that, in hindsight, reflected my limited development experiences at the time. Back then, my approach was rooted in the belief that if I didn't fully understand something or the reasons behind its design, it couldn't possibly be beneficial. Little did I realise that this stance marked a significant rookie mistake—one that, over time, I would come to reassess and rectify. Ah, the sting of hindsight.

## When did I start realising it might be the right technology?

Admittedly, my initial resistance to Tailwind persisted for quite some time. I held onto my skepticism, unconvinced of its merits, and continued to voice my reservations against it. It wasn't until I noticed a growing trend—Tailwind becoming an integrated option in popular CLIs like Create React App (CRA) and NextJS, that I started to entertain the idea of giving it a second chance.

Around this time, a significant shift had occurred in my approach. I had broken free from Bootstrap's influence, no longer relying on it for my grid systems. Instead, I invested time in comprehending the nuances of Flex and Grid, allowing me to craft elegant and minimal code for my layouts. It felt liberating, aligning with my vision of authoring all my code independently, free from frameworks or constraint, or so I thought.

However, as I immersed myself in crafting everything from scratch, I couldn't ignore the shortcomings of my previous CSS approach. Each project I worked on exhibited common issues:

- **Boilerplate Overload**: A surplus of repetitive, boilerplate code that felt like unnecessary baggage.
- **Isolated Understanding**: Code that could only be truly deciphered by myself, creating hurdles for collaboration within a team.
- **Inconsistent Standards**: Projects that failed to conform to what I considered my established (and undocumented) standards when another developer touched them.
- **Limited Contribution**: Maintenance and updates were solely my responsibility, lacking the collective vigilance of a team to ensure accessibility and identify potential bugs.

These realisations prompted a reconsideration of my coding philosophy. Was complete autonomy truly the epitome of efficiency, or had I been overlooking the benefits of a more collaborative and standardised approach? The answers lay in exploring Tailwind with a renewed perspective.

## How Do I Use It Now, and How Has My Opinion Changed

Over time, my perspective on Tailwind has undergone a significant transformation. While remnants of my initial reservations persist, I've embraced a hybrid approach, blending elements of the old and new. As evident on this very website built with Next.js and Tailwind, I've managed to reduce my custom CSS to a mere 50 lines.

Comparing it to the V1 of this site, which boasted over a thousand lines of CSS, the efficiency of Tailwind is evident. The framework selectively pulls only the required CSS, eliminating the need for unnecessary helper classes during build. The result is a visually enhanced site with a substantially smaller footprint, fostering a developer-friendly environment. Collaboration becomes seamless, as other developers can glean insights into my styling setup by referencing the Tailwind config and documentation.

However, some aspects of my initial stance remain unaltered, notably my aversion to cluttered HTML with an abundance of class names. Despite the apparent visual chaos, I've come to appreciate the verbosity of Tailwind's approach, it may look overwhelming, but it provides immediate clarity on functionality. A compromise I've made is abstracting complex class combinations into CSS classes, employing the @apply keyword to maintain readability. This not only adheres to methodologies like BEM but also results in cleaner HTML structures.

In essence, Tailwind has become an indispensable tool in my web development arsenal, not just for its efficiency but also for the adaptability it offers. The evolution of my opinion mirrors the dynamic nature of the web development landscape, emphasising the importance of embracing change and reevaluating assumptions for continual growth.

Below is an example of employing the @apply lkeyword to abstract some of tailwinds larger class combinations into a css filer and removing it from your HTM/JSX

**Before**

```js
return (
  <Link
    href={`blog/${post.slug}`}
    className="hover:underline grid border border-primary border-t-0 border-l-2 border-r-0 border-b-0 pl-4 md:border-none md:pl-0 md:block"
  >
    <span className="text-primary md:mr-2">
      {prettyDate(new Date(post.date))}
    </span>
    {post.title}
  </Link>
);
```

**After**

```js
return (
  <Link href={`blog/${post.slug}`} className={styles.link}>
    <span className={styles.link__date}>{prettyDate(new Date(post.date))}</span>
    {post.title}
  </Link>
);
```

```css
.link {
  @apply hover:underline grid border border-primary border-t-0 border-l-2 border-r-0 border-b-0 pl-4 md:border-none md:pl-0 md:block;
}

.link__date {
  @apply text-primary md:mr-2;
}
```

## Conclusion

In conclusion, my journey with Tailwind has seen a notable shift in perspective. Initially resistant to its extensive class naming, I reconsidered its value as major tools like CRA and Next.js integrated it. Breaking away from Bootstrap and crafting custom layouts allowed me to appreciate Tailwind's efficiency in minimising CSS. While still disliking cluttered HTML, I've embraced Tailwind's verbosity for its immediate clarity. Adopting a hybrid approach, I now use Tailwind for its adaptability, reducing custom CSS and fostering a more developer-friendly environment. The evolution of my opinion highlights the importance of embracing change in the ever-dynamic realm of web development.
