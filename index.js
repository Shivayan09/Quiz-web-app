const questions = [
    {
        q: "What is the output of 3 + 2 * 2?",
        options: ["10", "7", "5", "9"],
        answer: 2
    },
    {
        q: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
    },
    {
        q: "What keyword is used to define a function in JavaScript?",
        options: ["func", "function", "def", "lambda"],
        answer: 1
    },
    {
        q: "Which of the following is not a primitive data type in Java?",
        options: ["int", "boolean", "String", "char"],
        answer: 2
    },
    {
        q: "What is the correct syntax to create a class in Java?",
        options: ["class MyClass {}", "MyClass class {}", "class MyClass()", "class = MyClass {}"],
        answer: 0
    },
    {
        q: "What is the correct way to declare an array in Java?",
        options: ["int arr[];", "int[] arr;", "arr[] int;", "int arr();"],
        answer: 1
    },
    {
        q: "Which of these is used to handle exceptions in Java?",
        options: ["throw", "try-catch", "catch-try", "throws"],
        answer: 1
    },
    {
        q: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1
    },
    {
        q: "A function in Python is defined as?",
        options: ["def", "function", "fun", "define"],
        answer: 0
    },
    {
        q: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "0"],
        answer: 1
    }
];

const quizSection = document.querySelector('section');
const actionBtn = document.querySelector('footer button');

let currentQuestionIndex = -1;
let score = 0;

window.addEventListener('DOMContentLoaded', () => {
    actionBtn.addEventListener('click', () => {
        currentQuestionIndex++;

        if (currentQuestionIndex === 0) {
            quizSection.innerHTML = "";
        }

        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            quizSection.innerHTML = `
                <p class="text-gray-800 text-xl font-semibold mb-6">${currentQuestion.q}</p>
                <div class="options space-y-3">
                    ${currentQuestion.options.map((opt, i) => `
                        <button class="option-btn block w-full text-left bg-white border border-gray-400 px-4 py-2 rounded-xl hover:bg-gray-200 transition" data-index="${i}">${opt}</button>
                    `).join("")}
                </div>
            `;
            actionBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";

            const optionButtons = quizSection.querySelectorAll('.option-btn');
            optionButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const selectedOptionIndex = parseInt(e.target.dataset.index, 10);
                    e.target.classList.add('border-2');

                    if (selectedOptionIndex === currentQuestion.answer) {
                        e.target.classList.add('border-green-500');
                        score++;
                    } else {
                        e.target.classList.add('border-red-500');
                    }

                    optionButtons.forEach(button => button.disabled = true);
                });
            });

        } else {
            quizSection.innerHTML = `<div class="flex flex-col items-center justify-center h-full">
                <p class="text-gray-700 font-serif text-xl my-auto">You've completed the quiz!</p>
                <p class="text-gray-700 font-serif text-xl my-auto">Your score is ${score} out of ${questions.length}</p>
            </div>`;
            actionBtn.style.display = "none";
        }
    });
});
