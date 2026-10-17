# THINGS TO DO (part 1)
 1. Add the `<style></style>` at the top of your HTML
 ```html
 <html>
    <style></style>
    ...
 </html>
 ```
 2. Add `id="my-img-thingy"` or any image ID you want before the `src="..."` in ur `img` tag (it can't have spaces)
```html
<img id="my-img-thingy" src="CAPTURE.PNG">
```
 3. Add this inbetween the `<style>` and `</style>` tags
```css
#my-img-thingy {
    width: 100px;
    height: 100px;
}
```
...

# THINGS TO DO (part 2)
 1. Add `id="my-special-text"` to a random `<p>`, `<h1>`, `<b>` or any other text tag inside of the `<...>` like this:
```html
<p id="my-special-text">uhhhhhhhhh</p>
```
 2. Add this inbetween the `<style>` and `</style>`
```css
#my-special-text {
    font-size: 100px;
    color: red;
}
``` 
...

# THINGS TO DO (part 3)
 1. Add this to your HTML page somewhere
```html
<div id="thingy"></div>
```
 2. Add this inbetween the `<style>` and `</style>`
```css
#thingy {
    background-color: red;
    width: 100px;
    height: 100px;
    transition: 1s ease-in-out;
}
#thingy:hover {
    width: 200px;
}
```
...

# Add centered text inside of a rectangle
 1. Find a rectangle `<div>` in your HTML
 2. Add a `<p>` inside of the `<div>` with `id`
```html
<div id="my-rect">
    <p id="my-text">I'm inside of a rectangle</p>
</div>
```
 3. Add this inside of the `<style>` tags
```css
#my-rect {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
...
# Get rid of the page border
 1. Add this to the `<style>`
```css
body {
    margin: 0;
    padding: 0;
}
```

# Make rectangles/images/text side by side 
 1. Add this before the thing you want to center: `<div id="in-the-middle">`
 2. Add this after the thing you want to center: `</div>`
```html
<div id="in-the-middle">
    <div id="rect1"></div>
    <div id="rect2"></div>
    <p>some text</p>
    <div id="rect3"></div>
    <img src="my_image.png">
    <a href="https://google.com">my link</a>
</div>
```
 3. Add this inbetween the `<style>` and `</style>`
```css
#in-the-middle {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
}
```
 4. Test this: what happens if you make the `flex-direction` be `column` ?

...
# Make rectangles overlap
 1. You have these rectangles
```html
  <div id="my-rectangular-thing"></div>
  <div id="my-other-rectangular-thing"></div>
```
 2. In between the `<style>` and `</style>` tags:
```css
#my-rectangular-thing {
    position: absolute;
    top: 500px;
    left: 500px;

    background-color: green;
    width: 200px;
    height: 300px;
}

#my-other-rectangular-thing {
    position: absolute;
    top: 700px;
    left: 700px;
    
    background-color: red;
    width: 200px;
    height: 300px;
}
```
...

# Rounded rectangles
 1. In between the `<style>` and `</style>` tags:
```css
#my-rectangular-thing {
    border-radius: 10%;
}
```
...

# Bordered rectangle
 1. In between the `<style>` and `</style>` tags:
```css
#my-rectangular-thing {
    border-width: 5px;
    border-style: solid;
    border-color: blue;
}
```
...

# Change background
 1. In between the `<style>` and `</style>` tags:
```css
body {
    background-image: url("link-to-my-image-here");
    background-color: red;
}
```
...
# External CSS
 - Add this to the top of your HTML body
```html
<link rel="stylesheet" href="my_big_stylesheet.css">
```