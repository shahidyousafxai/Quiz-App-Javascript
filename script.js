const QDB = [
  {
    question:
      'What is the preferred way for adding a background color in HTML?',
    answers: {
      a: '<body background="yellow">',
      b: '<background>yellow</background>',
      c: '<body style="background-color:yellow>',
      d: 'background color="yellow">text<background>',
    },
    correctAnswer: 'ans3',
  },
  {
    question: 'What is the correct HTML for creating a hyperlink?',
    answers: {
      a: '<a name="">A</a>',
      b: '<a>B</a>',
      c: '<a href="http://www.example.com">example</a>',
      d: '<a url="http://www.example.com">example</a>',
    },
    correctAnswer: 'ans3',
  },
  {
    question: 'How can you create an e-mail link?',
    answers: {
      a: '<mail href="a@b">',
      b: '<mail>a@b</mail>',
      c: '<a href="a@b">',
      d: '<a href="mailto:a@b.com">',
    },
    correctAnswer: 'ans4',
  },
  {
    question: 'How can you open a link in a new browser window?',
    answers: {
      a: '<a href="url" new>',
      b: '<a href="url" target="new">',
      c: '<a href="url" target="_blank">',
      d: '<a href="url" target="">',
    },
    correctAnswer: 'ans3',
  },
  {
    question: 'Which of these tags are all <table> tags?',
    answers: {
      a: '<table><head><tfoot>',
      b: '<table><tr><td>',
      c: '<table><tr><tt>',
      d: '<thead><body><tr>',
    },
    correctAnswer: 'ans2',
  },
  {
    question: 'Which of the following JavaScript cannot do?',
    answers: {
      a: 'JavaScript can react to events',
      b: 'JavaScript can manipulate HTML elements',
      c: 'JavaScript can be use to validate data',
      d: 'All of the Above',
    },
    correctAnswer: 'ans4',
  },
  {
    question: 'Whats so great about XML?',
    answers: {
      a: 'Easy data exchange',
      b: 'High speed on network',
      c: 'Only B.is correct',
      d: 'Both A & B',
    },
    correctAnswer: 'ans4',
  },
  {
    question:
      'Which is not a property of attribute Behaviour of <Marquee> tag?',
    answers: {
      a: 'alternate',
      b: 'blur',
      c: 'scroll',
      d: 'slide',
    },
    correctAnswer: 'ans2',
  },
  {
    question: '_________ keyword is used to declare variables in javascript.',
    answers: {
      a: 'Var',
      b: 'Dim',
      c: 'String',
      d: 'None of the above',
    },
    correctAnswer: 'ans1',
  },
  {
    question: 'The attribute used to define a new namespace is.',
    answers: {
      a: 'XMLNS',
      b: 'XmlNameSpace',
      c: 'Xmlns',
      d: 'XmlNs',
    },
    correctAnswer: 'ans3',
  },
]

const ques = document.getElementById('question')
const answer1 = document.getElementById('opt1')
const answer2 = document.getElementById('opt2')
const answer3 = document.getElementById('opt3')
const answer4 = document.getElementById('opt4')
const nxt = document.getElementById('next')
const sbmt = document.getElementById('submit')
var display = document.getElementById('display')
var quiz = document.getElementById('quiz-div')

count = 0
correct = 0
var num = QDB.length
var arr = []
question.textContent = QDB[count].question
answer1.textContent = QDB[count].answers.a
answer2.textContent = QDB[count].answers.b
answer3.textContent = QDB[count].answers.c
answer4.textContent = QDB[count].answers.d
var corr = document.getElementsByName('option')
sbmt.addEventListener('click', () => {
  for (i = 0; i < corr.length; i++) {
    if (corr[i].checked === true) {
      var checked = true
      if (corr[i].id === QDB[count].correctAnswer) {
        // console.log('True')
        correct++
      }
    }
  }
  if (checked !== true) {
    alert('Please Select an option!')
  }
})

nxt.addEventListener('click', () => {
  // console.log(num)
  count++
  // console.log(num)
  if (count < num) {
    question.textContent = QDB[count].question
    answer1.textContent = QDB[count].answers.a
    answer2.textContent = QDB[count].answers.b
    answer3.textContent = QDB[count].answers.c
    answer4.textContent = QDB[count].answers.d
  } else {
    display.style.display = 'none'
    // alert(`Your result is ${correct}`)
    quiz.innerHTML = `<h2>Your result: ${correct}</h2>`
  }
})
