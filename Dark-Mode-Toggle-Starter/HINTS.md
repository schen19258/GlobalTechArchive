# Hints
### Hint 1
Before you use JavaScript to change something in the DOM, you first have to select that element in `script.js`. Try using `document.querySelector` to grab the elements you need to update and store them each in JavaScript variables. [MDN querySelector documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
<hr>

### Hint 2
To "turn on" dark mode, we need to add the class `dark` to the `<body>` element. To access or update an HTML element's class list in JavaScript, you can use the `classList` property like so: `elementName.classList`. 

The `classList` property contains many functions that can alter an element's classes. Check out the [examples in the MDN classList documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#examples) to see if any seem useful in toggling a class on and off of an element.
<hr>

### Hint 3
In order to change the button text to reflect the currently active theme, we need to find out if the HTML body has the `dark` class applied to it. There is a JavaScript function that will help you find out if a `classList` *contains* a particular class. Can you find it in the example section of MDN documentation linked above? 