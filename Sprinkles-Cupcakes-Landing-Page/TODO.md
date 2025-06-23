## General todo list

- Make a click trigger some code
- Figure out the right week day and the corresponding flavor (provided function in script.js)
- Change the image we're seeing on the page
- Add the name of the flavor beneath it

## Proper pseudocode
1. Make an `onclick` attribute for the placeholder image. The onclick should trigger a function called `flavorChoice()`
2. Create a function in `script.js` called `flavorChoice`
3. Call `findFlavorObject()` and store the result in a variable. 
4. Select the image element `#featured-cupcake-img` and store in a variable to work with later
5. Select the text element `#featured-cupcake-name` and store it in a variable.
6. Update the `src` of the image element.
7. Update the text inside of the text element. 