let questions = [];

function loadQuestions() {
    const text = document.getElementById('questionInput').value;
    questions = parseQuestions(text);
    displayQuestions();
}

function parseQuestions(text) {
    const lines = text.split('\n');
    let questions = [];
    let currentQuestion = null;

    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('Câu ')) {
            if (currentQuestion) {
                questions.push(currentQuestion);
            }
            currentQuestion = { text: line, answers: [] };
        } else if (/^[A-D]\./.test(line)) {
            if (currentQuestion) {
                currentQuestion.answers.push({ text: line, correct: false });
            }
        }
    });

    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}

function displayQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <label>Question: <input type="text" value="${question.text}" onchange="updateQuestion(${index}, this.value)"></label>
            <div class="answers">
                ${question.answers.map((answer, i) => `
                    <label class="answer">
                        <input type="radio" name="correct${index}" ${answer.correct ? 'checked' : ''} onchange="setCorrectAnswer(${index}, ${i})">
                        <input type="text" value="${answer.text}" onchange="updateAnswer(${index}, ${i}, this.value)">
                    </label><br>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function updateQuestion(index, text) {
    questions[index].text = text;
}

function updateAnswer(qIndex, aIndex, text) {
    questions[qIndex].answers[aIndex].text = text;
}

function setCorrectAnswer(qIndex, aIndex) {
    questions[qIndex].answers.forEach((answer, index) => answer.correct = index === aIndex);
}

function saveQuestions() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questions));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "questions.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function displayQuiz() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${question.text}</p>
            <div class="answers">
                ${question.answers.map((answer, i) => `
                    <label class="answer">
                        <input type="radio" name="quiz${index}" value="${i}">
                        ${answer.text}
                    </label><br>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const container = document.getElementById('quizContainer');
    let score = 0;
    questions.forEach((question, index) => {
        const selected = container.querySelector(`input[name="quiz${index}"]:checked`);
        if (selected && question.answers[selected.value].correct) {
            score++;
        }
    });
    alert(`Your score is: ${score} out of ${questions.length}`);
}

document.addEventListener('DOMContentLoaded', displayQuiz);
