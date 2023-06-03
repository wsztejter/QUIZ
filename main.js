const data = [{
    id: 1,
    question: 'Kto jest prezydentem Polski?',
    answers: [
        { answer: "Andrzej Duda", isCorrect: true },
        { answer: "Lech Wałęsa", isCorrect: false },
        { answer: "Donald Tusk", isCorrect: false },
        { answer: "Jaroslaw Kaczynski", isCorrect: false },
    ],
},
{
    id: 2,
    question: 'Kto jest reprezentantem Polski w pilce noznej?',
    answers: [
        { answer: "Robert Lewandowski", isCorrect: true },
        { answer: "Kuba Blaszczykowski", isCorrect: false },
        { answer: "Grzegorz Krychowiak", isCorrect: false },
        { answer: "Kamil Glik", isCorrect: false },
    ],
},
{
    id: 3,
    question: 'Ilu sasiadow ma Polska?',
    answers: [
        { answer: "siedem", isCorrect: true },
        { answer: "dwa", isCorrect: false },
        { answer: "piec", isCorrect: false },
        { answer: "cztery", isCorrect: false },
    ],
},
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;




const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[0].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => `
    <div class="answer">
    <input type="radio" id=${index} name= "answer" value=${item.isCorrect}>
    <label for=${index}>${item.answer}</label>
    </div>
     `).join("")
    selectAnswer();
}


const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener('click', (e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener('click', () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            console.log(correctCount, wrongCount);
            qIndex++
            showQuestion(qIndex);
        } else {
            alert('Select an answer!')
        }
    })
}

const showResult = () => { }

showQuestion(qIndex);
submitAnswer();