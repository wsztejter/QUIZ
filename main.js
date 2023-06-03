const data = [{
    id: 1,
    question: 'Kto jest prezydentem Polski?',
    answers: [
        { answer: "Andrzej Duda", isCorrect: true },
        { answer: "Lech Wałęsa", isCorrect: false },
        { answer: "Donald Tusk", isCorrect: false },
        { answer: "Jaroslaw Kaczynski", isCorrect: false },
    ],
    id: 2,
    question: 'Kto jest reprezentantem Polski w pilce noznej?',
    answers: [
        { answer: "Robert Lewandowski", isCorrect: true },
        { answer: "Kuba Blaszczykowski", isCorrect: false },
        { answer: "Grzegorz Krychowiak", isCorrect: false },
        { answer: "Kamil Glik", isCorrect: false },
    ],
    id: 3,
    question: 'Ilu sasiadow ma Polska?',
    answers: [
        { answer: "siedem", isCorrect: true },
        { answer: "dwa", isCorrect: false },
        { answer: "piec", isCorrect: false },
        { answer: "cztery", isCorrect: false },
    ],
}];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');