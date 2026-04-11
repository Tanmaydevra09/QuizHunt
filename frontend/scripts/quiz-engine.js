document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("quiz-app-root");
  
  // Reusable Vanilla Component - Inject standard structure if appRoot is present
  if (appRoot) {
    appRoot.innerHTML = `
      <div class="quiz-container-wrapper">
        <div class="quiz-box">
          <div class="quiz-container" id="quiz">
            <div class="quiz-header">
               <h3 id="question">Question</h3>
               <ul class="unorderlist">
                 <li>
                   <input type="radio" name="answer" id="a" class="answer" />
                   <label for="a" id="a_text">Answer</label>
                 </li>
                 <li>
                   <input type="radio" name="answer" id="b" class="answer" />
                   <label for="b" id="b_text">Answer</label>
                 </li>
                 <li>
                   <input type="radio" name="answer" id="c" class="answer" />
                   <label for="c" id="c_text">Answer</label>
                 </li>
                 <li>
                   <input type="radio" name="answer" id="d" class="answer" />
                   <label for="d" id="d_text">Answer</label>
                 </li>
               </ul>
            </div>
            <button id="submit">Submit</button>
          </div>
        </div>
      </div>
    `;
  }

  const quiz = document.getElementById("quiz");
  if (!quiz) return;
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");

  // Create progress bar if it doesn't exist
  let progressContainer = document.getElementById("progress-container");
  if(!progressContainer) {
    progressContainer = document.createElement("div");
    progressContainer.id = "progress-container";
    progressContainer.className = "progress-container";
    const progressBar = document.createElement("div");
    progressBar.id = "progress-bar";
    progressBar.className = "progress-bar";
    const progressText = document.createElement("div");
    progressText.id = "progress-text";
    progressText.className = "progress-text";
    
    progressContainer.appendChild(progressText);
    progressContainer.appendChild(progressBar);
    quiz.insertBefore(progressContainer, quiz.firstChild);
  }
  
  // Create explanation block if it doesn't exist
  let feedbackContainer = document.getElementById("feedback-container");
  if(!feedbackContainer) {
    feedbackContainer = document.createElement("div");
    feedbackContainer.id = "feedback-container";
    feedbackContainer.className = "feedback-container";
    feedbackContainer.style.display = "none";
    
    const feedbackTitle = document.createElement("h4");
    feedbackTitle.id = "feedback-title";
    
    const explanationText = document.createElement("p");
    explanationText.id = "explanation-text";
    
    feedbackContainer.appendChild(feedbackTitle);
    feedbackContainer.appendChild(explanationText);
    
    // Insert before the submit button
    quiz.insertBefore(feedbackContainer, submitBtn);
  }

  let currentQuiz = 0;
  let score = 0;
  let isSubmitted = false;

  // Use the globally available quizData from the loaded quiz file
  if (typeof quizData === 'undefined' || quizData.length === 0) {
    quiz.innerHTML = `<h3>Quiz data is not available. Please try again later.</h3>`;
    return;
  }

  // Load all questions dynamically instead of randomly limiting
  const selectedQuizData = [...quizData];

  loadQuiz();

  function loadQuiz() {
    deselectAnswers();
    isSubmitted = false;
    submitBtn.innerText = "Submit";
    document.getElementById("feedback-container").style.display = "none";

    const currentQuizData = selectedQuizData[currentQuiz];

    // Update progress
    const progressText = document.getElementById("progress-text");
    const progressBar = document.getElementById("progress-bar");
    if (progressText && progressBar) {
       const percentage = Math.round((currentQuiz / selectedQuizData.length) * 100);
       progressBar.style.width = `${percentage}%`;
       progressBar.innerText = `${percentage}%`;
    }

    // Add animation class
    document.querySelector('.quiz-header').classList.remove('fade-in');
    void document.querySelector('.quiz-header').offsetWidth; // trigger reflow
    document.querySelector('.quiz-header').classList.add('fade-in');

    questionEl.innerText = currentQuizData.question;
    // Replace newline with br tags for code blocks
    questionEl.innerHTML = currentQuizData.question.replace(/\n/g, '<br>');

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }

  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
      answerEl.disabled = false;
      answerEl.parentElement.classList.remove('selected', 'correct-answer', 'wrong-answer');
    });
  }

  function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }

  // Add click listeners to li elements for better UX
  const listItems = document.querySelectorAll('.unorderlist li');
  listItems.forEach(li => {
    li.addEventListener('click', (e) => {
      if (isSubmitted) return;
      if (e.target.tagName !== 'INPUT') {
        const input = li.querySelector('input[type="radio"]');
        input.checked = true;
      }
      listItems.forEach(item => item.classList.remove('selected'));
      li.classList.add('selected');
    });
  });

  submitBtn.addEventListener("click", () => {
    const currentQuizData = selectedQuizData[currentQuiz];
    
    if (!isSubmitted) {
      const answer = getSelected();
      if (answer) {
        isSubmitted = true;
        answerEls.forEach(el => el.disabled = true);
        
        let feedbackTitle = document.getElementById("feedback-title");
        let explanationText = document.getElementById("explanation-text");
        let feedbackContainer = document.getElementById("feedback-container");

        if (answer === currentQuizData.correct) {
          score++;
          document.getElementById(answer).parentElement.classList.add('correct-answer');
          feedbackTitle.innerHTML = "✔ Correct Answer!";
          feedbackTitle.style.color = "#4caf50";
        } else {
          document.getElementById(answer).parentElement.classList.add('wrong-answer');
          document.getElementById(currentQuizData.correct).parentElement.classList.add('correct-answer');
          feedbackTitle.innerHTML = "❌ Incorrect Answer!";
          feedbackTitle.style.color = "#f44336";
        }
        
        explanationText.innerText = currentQuizData.explanation || "Explanation is not available.";
        feedbackContainer.style.display = "block";
        submitBtn.innerText = "Next Question";
      } else {
        // Highlight to pick an answer
        const ul = document.querySelector('.unorderlist');
        ul.classList.add('shake');
        setTimeout(() => ul.classList.remove('shake'), 400);
      }
    } else {
      currentQuiz++;

      if (currentQuiz < selectedQuizData.length) {
        loadQuiz();
      } else {
         const percentage = ((score / selectedQuizData.length) * 100).toFixed(0);
         const progressBar = document.getElementById("progress-bar");
         if (progressBar) { 
             progressBar.style.width = `100%`; 
             progressBar.innerText = `100%`; 
         }
         quiz.innerHTML = `
           <div class="result-container fade-in">
              <h2>Quiz Completed!</h2>
              <div class="score-circle">
                 <span>${percentage}%</span>
              </div>
              <h3>You answered ${score} out of ${selectedQuizData.length} questions correctly.</h3>
              <button id="submit" class="reload-btn" onclick="location.reload()" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; border: none; padding: 1.2rem; font-size: 1.1rem; font-weight: 600; border-radius: 12px; width: 100%; cursor: pointer; margin-top: 2rem;">Try Again</button>
              <br><br>
              <a href="./playquiz.html" class="btn btn-outline-light">Back to Quizzes</a>
           </div>
         `;
      }
    }
  });
});
