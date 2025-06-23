// Start by reading the instructions in the README.

function lintAndPlaySequence() {
  // retrieve strings from each input box and store in variables
  let sequence1 = document.querySelector('#sequence-input-1').value;
  let sequence2 = document.querySelector('#sequence-input-2').value;
  let sequence3 = document.querySelector('#sequence-input-3').value;
  let sequence4 = document.querySelector('#sequence-input-4').value;
  // assign variable to sequence1
  let lintedSequence = sequence1;
  
  // ============== Code below this line =============================


  // TASKS
  // 1. Update lintedSequence by removing the whitespace off of the ends of sequence1, 2, 3, and 4, and concatenating them together

  // 2. Update lintedSequence by converting all characters to lowercase

  // 3. LevelUp: Update lintedSequence by using the 'replace' method to remove all characters that aren't letters or spaces

  // ============= Don't code below this line ========================
  
  // play the lintedSequence string
  playSequence(lintedSequence);
}
