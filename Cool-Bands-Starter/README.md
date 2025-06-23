# 🎸 Cool Bands
## Your Task
1. Start by creating an array of your team's favorite bands/artists (as strings). Store the array in a variable called `coolBands`. Be sure to use all lowercase letters!
```js
let coolBands = ["capstan", "sza", "hot mulligan", "father john misty", "janelle monae", "talking heads", "chu kosaka", "tribal gaze", "mom jeans", "modern baseball", "knuckle puck", "neck deep", "gloss", "vince staples", "leonard cohen", "the beatles", "prince", "lil nas x"];
```

2. Use the `prompt()` function to get the user's favorite band and store it in a variable called `userChoice`. Convert the user's answer to lowercase.

3. Use conditional logic to check if `coolBands` contains the user's answer. If the user's band is *not* in the array, `alert` "Never heard of them!". If the user's band is in the array, `alert` "OMG! I love them too!"

>*Hint: You'll need to research the `indexOf()` method and find out what it returns if the argument you supply isn't found in the target array.*

## 🧠 LevelUp
If the user's band is not in the array, `alert` "I'll have to check them out!" and add the band to the array. Then `console.log` the array to confirm that the new item is present.

