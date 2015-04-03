My game is a two-part question. The first part asks the user which baseball team has won the most championships, then it asks how many they have won.
Due to the fact I had two answers, I created an array for the answers variable.
For the first part, I used a simple if/else. The only thing I modified was adding a toLowerCase to make sure a correct answer didn't get rejected due to capitalization. This program would have flaws in implementation because someone could answer "The yankees" and it would return an incorrect answer (for the purposes of this exercise I decided to overlook this aspect).
For the second part, I used the same if/else as the example from class.

We changed the first part to check an array of correct answers. We did this to improve usability by allwing multible correct answers. We separated the variables for each question.

#Refactor
Put state and game logic into a constructor function simplifying the code and eliminating dupication.
