const questions = [
    {
        q: "What is the output of 3 + 2 * 2?",
        options: ["10", "7", "5", "9"],
        answer: 2 // Index of "5"
    },
    {
        q: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1 // Index of "Queue"
    },
    {
        q: "What keyword is used to define a function in JavaScript?",
        options: ["func", "function", "def", "lambda"],
        answer: 1 // Index of "function"
    },
    {
        q: "Which of the following is not a primitive data type in Java?",
        options: ["int", "boolean", "String", "char"],
        answer: 2 // Index of "String"
    },
    {
        q: "What is the correct syntax to create a class in Java?",
        options: ["class MyClass {}", "MyClass class {}", "class MyClass()", "class = MyClass {}"],
        answer: 0 // Index of "class MyClass {}"
    },
    {
        q: "What is the correct way to declare an array in Java?",
        options: ["int arr[];", "int[] arr;", "arr[] int;", "int arr();"],
        answer: 1 // Index of "int[] arr;"
    },
    {
        q: "Which of these is used to handle exceptions in Java?",
        options: ["throw", "try-catch", "catch-try", "throws"],
        answer: 1 // Index of "try-catch"
    },
    {
        q: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1 // Index of "O(log n)"
    },
    {
        q: "A function in Python is defined as?",
        options: ["def", "function", "fun", "define"],
        answer: 0 // Index of "def"
    },
    {
        q: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "0"],
        answer: 1 // Index of "false"
    }
];

let index = -1;
let score = 0; // Variable to store score

window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        index++;

        if (index === 0) {
            intro.innerHTML = ""; // Clear intro
        }

        if (index < questions.length) {
            const q = questions[index];
            intro.innerHTML = `
                <p class="text-gray-800 text-xl font-semibold mb-6">${q.q}</p>
                <div class="options space-y-3">
                    ${q.options.map((opt, i) => `
                        <button class="option-btn block w-full text-left bg-white border border-gray-400 px-4 py-2 rounded-xl hover:bg-gray-200 transition" data-index="${i}">${opt}</button>
                    `).join("")}
                </div>
            `;
            button.textContent = index === questions.length - 1 ? "Finish" : "Next";

            // Add event listeners to option buttons
            const optionButtons = document.querySelectorAll('.option-btn');
            optionButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const selectedIndex = parseInt(e.target.dataset.index);

                    // Apply thicker border when clicked
                    e.target.classList.add('border-2');

                    if (selectedIndex === q.answer) {
                        e.target.classList.add('border-green-500'); // Correct answer
                        e.target.classList.remove('border-red-500');
                        score++; // Increment score for correct answer
                    } else {
                        e.target.classList.add('border-red-500'); // Wrong answer
                        e.target.classList.remove('border-green-500');
                    }

                    // Disable all options after selecting one
                    optionButtons.forEach(btn => btn.disabled = true);
                });
            });

        } else {
            intro.innerHTML = `<div class="flex flex-col items-center justify-center h-full">
                <p class="text-gray-700 font-serif text-xl my-auto">You've completed the quiz!</p>
                <p class="text-gray-700 font-serif text-xl my-auto">Your score is ${score} out of ${questions.length}</p>
            </div>`;
            button.style.display = "none";
        }
    });
});
