/* The following function will run every time the dark mode button is clicked. Add logic to the function that will toggle the dark class on and off of the <body> element. The text inside of the button should also change from "Dark Mode" to "Light Mode" based on which theme currently active. */

function toggleDarkMode() {
	// Your code here 👇
  const body = document.querySelector('body');
  body.classList.toggle('dark');
}