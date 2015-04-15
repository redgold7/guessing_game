
(function() {
  var alertDiv = document.getElementById('alerts');
  var Question = function(name, question, answers, answer) {
    this.name = name;
    this.question = question;
    this.answers = answers;
    this.answer = answer;
    this.correct = false;
    this.askQuestion = function() {
      this.guess = prompt(question);
      this.checkAnswer();
    };
    this.checkAnswer = function() {
      // console.log(typeof(answer));
      if (typeof(answer) !== 'number'){
        for (var i = 0; i < this.answers.length; ++i) {
          if (this.guess.toLowerCase() === this.answers[i]) {
            this.correct = true;
          }
        }
        if (this.correct) {
            alertDiv.textContent = 'Correct! ' + this.answer + ' is the right answer!';
            // alert('Correct! ' + this.answer + " is the right answer!");
        } else {
            alertDiv.textContent = 'Sorry, try again!';
            this.askQuestion();
        }
      } else {
        this.guess = Number.parseInt(this.guess);
        if (this.guess !== NaN) {
          if (this.guess === this.answer) {
            alertDiv.textContent = 'Correct!';
          } else if (this.guess < this.answer) {
            alertDiv.textContent = 'They\'re better than that!';
            this.askQuestion();
          } else {
            alertDiv.textContent = 'They\'re not that good!';
            this.askQuestion();
          }
        } else {
          alertDiv.textContent = 'You need to enter a number for this answer, try again.';
          this.askQuestion();
        }
      }
    };
  };

  var question1 = new Question('mostSeriesWinners', 'Which baseball team has won the most World Series?', ['yankees','nyy','the yankees','the new york yankees','new york yankees','yanks'], 'The New York Yankees');
  var question2 = new Question('howManyWins', 'How many championships have they won?', 27, 27);
  var correct = false;
  console.log(question1);
  console.log(question2);

  question1.askQuestion();
  question2.askQuestion();
  alertDiv.textContent = 'You won! You sure know a lot about the Yankees!';

})();

