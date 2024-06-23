
let questions = [];

document.querySelector(".submitQuiz").addEventListener("click", () => {
  submitQuiz();
});
document.querySelector(".parseQuestions").addEventListener("click", () => {
  parseQuestions();
});
document.querySelector(".section-loadQuestions__top--loadFile").addEventListener("click", () => {
  loadFile();
});

function loadFile() {
  const fileInput = document.getElementById("fileInput");
    // lay file dau tien ma nguoi dung chon (trong truong hop nguoi dung chon nhieu file)
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {  // su ly khi file duoc load xog
      const text = event.target.result;
      document.getElementById("questionInput").value = text;
    };
    reader.readAsText(file); // load noi dung trong file 
  } else {
    alert("Please select a file.");
  }
}

function parseQuestions() {
  const text = document.getElementById("questionInput").value;
  questions = [];

  const lines = text.split("\n");
  let currentQuestion = null;

  lines.forEach((line) => {
    line = line.trim();
    if (line.startsWith("Câu ")) {
      if (currentQuestion) {
        questions.push(currentQuestion);
      }
      currentQuestion = { text: line, answers: [] };
    } else if (/^[A-D]\./.test(line)) {
      let correct = false;
      let answerText = line.trim();
      if (answerText[3] === "*") {
        correct = true;
        answerText = removeCharAt(answerText, 3);
      }
      if (currentQuestion) {
        currentQuestion.answers.push({
          text: answerText,
          correct: correct,
        });
      }
    }
  });

  if (currentQuestion) {
    questions.push(currentQuestion);
  }
  displayQuestions();
}

function displayQuestions() {
  const container = document.getElementById("section-listQuestions__list-questions");
  container.innerHTML = "";
  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "questions";
    questionDiv.innerHTML = `
      <p>${question.text}</p>
      ${question.answers
        .map(
          (answer, i) => `
          <input type="radio" id="answer${index}-${i}" name="question${index}" class="custom-radio">
          <label for="answer${index}-${i}">${answer.text}</label><br>
        `
        )
        .join("")}
    `;
    container.appendChild(questionDiv);
    //xet animate cho phan tu
    window.addEventListener("scroll", function() {
      // tra ve khoang cach tu top cua phan tu toi viewport
     var elementTop = questionDiv.getBoundingClientRect().top;
     var windowHeight = window.innerHeight;
 
     if (elementTop < windowHeight * 0.85) {
         questionDiv.classList.add("slide-up");
     }
  });
});
}

function removeCharAt(str, position) {
  return str.slice(0, position) + str.slice(position + 1);
}

function submitQuiz() {
  const container = document.getElementById("section-listQuestions__list-questions");
  let score = 0;
  questions.forEach((question, index) => {
    const selected = container.querySelector(`input[name="question${index}"]:checked`);
    question.answers.forEach((answer, i) => {
      const label = container.querySelector(`label[for="answer${index}-${i}"]`);
      if (answer.correct) {
        label.style.color = "green";  // Đáp án đúng tô màu xanh
      } else {
        label.style.color = "red";  // Đáp án sai tô màu đỏ
      }
    });
    if (selected && question.answers[selected.id.split('-')[1]].correct) {
      score++;
    }
  });
  alert(`Your score is: ${score} out of ${questions.length}`);
}

// update exprience


