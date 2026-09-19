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
    width: 300px;
    height: 100px;
}
```
...

# THINGS TO DO (part 4)
 - TODO: make text fit inside of a rectangle/scrlollable inside of it

# THINGS TO DO (part 5)
 1. Add this before the thing you want to center: `<div id="in-the-middle">`
 2. Add this after the thing you want to center: `</div>`
 3. Add this inbetween the `<style>` and `</style>`
```css
#in-the-middle {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
}
```
...

# THINGS TO DO (part 6)
 - TODO: make tables and lists + style them