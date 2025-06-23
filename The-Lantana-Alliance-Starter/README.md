# The Lantana Alliance

Well, I did it. I broke the site 😭 I was trying to add the cooldown stations to the page and my browser kept crashing. I commented out the function I was running so the page works now, but we really need to get those locations on the page so people can see them. Between work and all the Summer preparations I just haven't had time to debug it. Thank you so much for your help. I tried my best to document what I've done so far and what still needs to be finished.

## TODO

In order of importance:

1. Fix the tab-crashing `addStations` function so it renders all open stations to the page in reverse order. (I'm sorry in advance 😞)
2. Finish the `addWishlistItems` function so it renders all of the wishlist items to the page.
3. Finish the `filterByCity` function so users can search for stations in their city. `filterByCity` should `return` an array of station strings that include the user's `query`. 

You should be able to do everything in `script.js` at this point.

## What we have right now

### Data arrays

There are two important data arrays in `data.js`:

- `openStations` - Array of the names and addresses of open cooldown stations. Newest locations are pushed to the end of the array.
- `wishlist` - Array of items currently on the wishlist.

More cooldown stations are being added each week and the items on the wishlist change about as often. This data needs to be added dynamically so users get up to date information.

### Render functions

There are two functions in `dom.js` that take care of rendering data on the page:

- `addStationElement(station)` - Function accepts a single station string and renders it on the page as HTML.
- `addWishlistElement(wishlistItem)` - Function accepts a single wishlist item string and renders it on the page as HTML.

### Broken loop

I tried writing a function called `addStations` in `script.js`. It was supposed to loop through `openStations` backwards to show the newest stations first. When the code runs, the site wont load at all and the browser crashes. This is the most important part of the website and it breaks everything else 😓

### Half-finished search

There's one more function in `dom.js` called `searchStations`. It's hooked up to the commented-out search button in the HTML with an `onclick`. It doesn't work right now because it relies on the `filterByCity` function that I never got around to finishing. `filterByCity` needs to `return` a filtered array of stations and then users will be able to search for locations in their cities.
