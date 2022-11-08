const Data = [
  {
    question: "What does   HTML stands for ?",
    a: "Hyper Text Markup Language ",
    b: "Hypo Text Markup Language",
    c: "Hard Test Marking Language",
    d: "High Text Marking Language",
    correct: "a",
  },
  {
    question: "who is the president of Nigeria ?",
    a: "General Yakubu Gowon ",
    b: "Mahammud Buhari",
    c: "Muhammad Buhari",
    d: "Osinbajo",
    correct: "c",
  },
  {
    question: "which is odd?",
    a: "Beans ",
    b: "Rice",
    c: "PawPaw",
    d: "Spaghetti",
    correct: "c",
  },
  {
    question: "What is 2 × 2?",
    a: "5 ",
    b: "4",
    c: "3",
    d: "22",
    correct: "b",
  },
  {
    question: "which of the option is a fruit ?",
    a: "Purple ",
    b: "Apple",
    c: "Orange",
    d: "Green",
    correct: "b",
  },
];
const grabId = (idName) => {
  const ElementId = document.getElementById(idName);
  if (ElementId) return ElementId;
  throw new Error(`cannot find the id ${idName}`);
};
const option1 = grabId("option1");
const option2 = grabId("option2");
const option3 = grabId("option3");
const option4 = grabId("option4");
let nextBtn = grabId("btn-next");
let prevBtn = grabId("btn-prev");
const quiz = grabId("quiz");
const question = document.querySelector("h3");
const answers = document.querySelectorAll(".answer");

let currentQuize = 0;
let score = 0;

loadQuize();
function loadQuize() {
  unCheckAnswer();
  let nextOption = Data[currentQuize];
  question.innerText = nextOption.question;
  option1.innerText = nextOption.a;
  option2.innerText = nextOption.b;
  option3.innerText = nextOption.c;
  option4.innerText = nextOption.d;
  nextBtn.addEventListener("click", nextQuestion);
  prevBtn.addEventListener("click", PreviousQuestion);
}
function nextQuestion() {
  const answer = getValue();
  if (answer) {
    if (answer === Data[currentQuize].correct) {
      score++;
    }
    currentQuize++;
    if (currentQuize < Data.length) {
      loadQuize();
    } else if (score === Data.length) {
      quiz.innerHTML = `<h1> Congratulations 👏👏 <br/>You scored ${score}/${Data.length}</h1>`;
    } else {
      quiz.innerHTML = `<h1> You scored ${score}/${Data.length}`;
    }
  }
}

function PreviousQuestion() {
  if (currentQuize.valueOf() === 0) {
    alert("Can't go back anymore");
  } else {
    initialQuize--;
    loadQuize();
  }
}

function getValue() {
  let value = undefined;
  answers.forEach((answer) => {
    if (answer.checked) {
      value = answer.id;
    }
  });
  return value;
}

function unCheckAnswer() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}