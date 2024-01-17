---
title: Deep Dive into CSS :has Selector
date: "2024-01-17T10:00:00.284Z"
description: Uncover the capabilities of the CSS :has selector. This post delves into its uses, browser support, and impact on modern web design, offering essential insights for forward-thinking developers.
devTo: https://dev.to/kieranmv95/deep-dive-into-css-has-selector-1joe
---

In the ever-evolving landscape of web development, CSS continues to offer powerful tools that significantly enhance the capability of web designers and developers. A prime example of this progress is the introduction of the `:has` selector. Part of the CSS Selectors Level 4 specification, :has brings a new paradigm to CSS, allowing developers to select and style elements in a more contextual and conditional manner.

## Technical Overview of :has

The `:has` selector is a relational pseudo-class that matches elements based on the presence of specified descendants. Unlike traditional selectors, `:has` looks ahead in the DOM structure, enabling parent selectors based on child or descendant elements.

**Syntax**

The syntax of the `:has` selector is as follows:

```css
element:has(selector) {
  /* styles */
}
```

The `selector` inside `:has()` can be a combination of any valid CSS selector, including class, ID, attribute, pseudo-class, and pseudo-element selectors.

## Use Cases and Examples

**Responsive Design**

```css
.card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

/* Adjust the layout of a card if it contains an image */
.card:has(> img) {
  grid-template-columns: 1fr 2fr;
}
```

```html
<div class="card">
  <img src="path_to_image.jpg" alt="Image Description" />
  <div>
    <h3>Card Title</h3>
    <p>Some content here...</p>
  </div>
</div>

<!-- Example without an image -->
<div class="card">
  <div>
    <h3>Another Card Title</h3>
    <p>Some other content here...</p>
  </div>
</div>
```

This example demonstrates the ability of `:has` to create more responsive and adaptive design, especially useful in scenarios like card layouts where the presence of an image can dictate the layout structure.

Typicallky before `:has` we would have to implement more selector rules and say something like `class="card card--two-column"` but now instead of adapting out html markup and our css to cater for the varied content we only have to update our css and it can essentially ifgure out what the content is and apply the appropriate styling!

**Interactive Content**

```css
.menu-item {
  background-color: white;
  padding: 10px;
  border: 1px solid black;
}

/* Style a menu item differently if it contains a submenu */
.menu-item:has(.submenu) {
  background-color: lightcoral;
}

.submenu {
  display: none;
  padding: 5px;
  border: 1px solid grey;
}

.menu-item:hover .submenu {
  display: block;
}
```

```html
<ul>
  <li class="menu-item">Home</li>
  <li class="menu-item">About</li>
  <li class="menu-item">
    Services
    <ul class="submenu">
      <li>Web Design</li>
      <li>Web Development</li>
    </ul>
  </li>
  <li class="menu-item">Contact</li>
</ul>
```

The `:has` selector can significantly simplify the styling of complex navigation menus, particularly when dealing with nested or dynamic content.

Similar to the previous example before `:has` we would have to apply another modifier to menu-item to achieve this.

I have faced issues in the past where I read files from the file system and dynamically generate the navigation. I have had to add logic to the top level `<li class="menu-item">` to check if it contains a nested `ul` and then if it does apply another class making it `<li class="menu-item menu-item--with-children">`. Using this example you can skip writing all the logic to do this and save computing that value with javascript, a nice efficiency win, and a marked improvement on readability for your html markup!

**Form Field Validation**

```css
/* Highlight a field with invalid input */
input:invalid:has(+ .error-message) {
  border-color: red;
}
```

```html
<form>
  <input type="email" placeholder="Enter your email" required />
  <span class="error-message">Please enter a valid email address.</span>
  <br />
  <button type="submit">Submit</button>
</form>
```

The combination of `:has` with other pseudo-classes like `:invalid` can enhance form validation feedback, improving user experience.

Typically, looking at react for this example we would have had to invalidate the field and conditionally apply a class to the input or wrap it in another dive and conditionall aplly a class to that. meaining more DOM soup, here we dont need any of that.

The only dynamic thing now would be showing the error, and if that error is visible, we have a appripriately styled input.

## Browser Compatibility and Modern Web Practices

As of 2024, the `:has` selector enjoys support across major modern browsers, including the latest versions of Chrome, Firefox, Safari, and Edge. The growing trend towards modern web practices and the phasing out of legacy browsers like Internet Explorer has paved the way for the adoption of advanced CSS features.

**Emphasising the Shift from Internet Explorer**

With the end of Internet Explorer's lifecycle, web developers are no longer constrained by its limitations. This transition allows the full utilisation of modern CSS capabilities, such as the `:has` selector, which are unsupported in Internet Explorer.

## Technical Considerations

**Performance Implications**

While the `:has` selector opens new avenues in CSS, it's essential to consider its impact on rendering performance. Since `:has` is more complex than traditional selectors, it can introduce performance overhead, especially when used extensively or with complex descendant selectors. Developers should balance the use of `:has` with performance best practices.

But I'm going to take a stab in the dark here and say that this is more than likely going to be much quicker than writing havascruit to achieve the same effect!

**Cascading and Specificity**

The `:has` selector follows the standard rules of cascading and specificity in CSS. Its specificity is calculated based on the compound selectors within the `:has()` function. Understanding this is crucial for avoiding unexpected styling conflicts.

**Final caveat**

ALWAYS check your own browser stats! I have generalised a lot here about the support. Yes it may be fully supported in all modern browsers, but, is that what **your** users use? before adopting anything make sure that it is supported by your predefined thresholds of support! check out [Can I Use](https://caniuse.com/css-has) for more info on the support!

**Conclusion**

The CSS `:has` selector marks a significant milestone in the evolution of CSS, offering developers more sophisticated tools for styling web pages. Its ability to select parent elements based on child conditions is a powerful addition to the CSS toolkit. With broad browser support and the shift away from legacy browsers, the `:has` selector is poised to become a staple in modern web design. As with any advanced feature, it should be used judiciously, with a mindful approach to performance and specificity.
