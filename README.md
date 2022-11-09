# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/loopstudio-solution-screenshot.png)

### Links

- Solution URL: [https://ldg.github.io/loopstudios-landing-page/](https://ldg.github.io/loopstudios-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Transitions
- CSS Grid
- Javascript
- Mobile-first workflow

### What I learned

This is my second Frontend Mentor challenge solution, I think getting more comfortable with the mobile first workflow, trying to better plan out my markup. I spent a lot of time getting the mobile menu to work. The problems I was having with it was figuring out the css transitions. I found that the transitions didn't seem work when the menu closes.

My strategy was to put the mobile menu outside the viewport with large right margin 
```css 
#mobile-menu {
    margin-right: 100vw;
    ...
}
```
, and use Javascript to toggle a utility class on and off. I would use css transitions to shrink and expand the right margin to open and close the menu. 

I resolved the problem when I updated my transition css from the more specific:
```css
.open {
    transition: margin-right 1s;
}
```
to the less specific, 
```css
.open {
    transition: all 1s;
}
```
...that seemed to fix the issue *(although I'm not really sure why being less specific worked, seems counter-intuitive)* and I was able to get a smooth open and close transition. 

I also found I'm much more comfortable using Grid CSS, I've always relied on Flexbox for my layouts but I can see how powerful Grid is. This project afforded me many opperturnities to expore Grid's capabilities; I learned a lot about nesting grids and targeting elements within the grid and placing them where ever I need them to be. 

### Continued development
I really enjoyed working with Grid css and CSS transitions and intend to spend more time understanding their uses. Longer term I'm interested in improving my Javascript so I can tackle more interesting projects. I do a lot of support work with Wordpress websites and I'm interested in Headless CMS with Wordpress and Gatsby.

### Useful resources

- [Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) - This was a great resource when I was looking for answers on why my transitions wheren't working the way I expected.
- [Learn CSS Grid the easy way](https://www.youtube.com/watch?v=rg7Fvvl3taU) - This is a great video from Kevin Powel that gives a good intro to using Grid CSS, it helped me alot with seeing how to use Grid to get a layout up and running.
- [Easily Overlap Content with CSS Grid](https://www.youtube.com/watch?v=HFG3BKOqOlE) - This is another great tutorial on grid CSS, this one focuses on overlapping elements.

## Author

- Website - [Scott McIntire](https://ldgwebdesign.com/contact/)
- Frontend Mentor - [@ldg](https://www.frontendmentor.io/profile/ldg)

