const quizMetadata = [
  {
    title: "Cloud & DevOps Quiz",
    icon: "https://img.icons8.com/fluency/96/cloud.png",
    url: "./cloud.html",
    tag: "Cloud",
    color: "#ff6b35"
  },
  {
    title: "C Language Quiz",
    icon: "https://img.icons8.com/fluency/144/c-programming.png",
    url: "./clanguage.html",
    tag: "C",
    color: "#00a6a6"
  },
  {
    title: "C++ Quiz",
    icon: "https://img.icons8.com/fluency/96/c-plus-plus-logo.png",
    url: "./cpp.html",
    tag: "C++",
    color: "#00599c"
  },
  {
    title: "Java Quiz",
    icon: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png",
    url: "./java.html",
    tag: "Java",
    color: "#f89820"
  },
  {
    title: "Python Quiz",
    icon: "https://img.icons8.com/color/96/python--v1.png",
    url: "./python.html",
    tag: "Python",
    color: "#ffc107"
  },
  {
    title: "JavaScript Quiz",
    icon: "https://img.icons8.com/color/96/javascript--v1.png",
    url: "./javascript.html",
    tag: "JS",
    color: "#f7df1e"
  },
  {
    title: "PHP Quiz",
    icon: "https://img.icons8.com/officel/80/php-logo.png",
    url: "./php.html",
    tag: "PHP",
    color: "#777bb4"
  },
  {
    title: "Data Structure Quiz",
    icon: "https://img.icons8.com/color/96/add-node.png",
    url: "./ds.html",
    tag: "DSA",
    color: "#8bc34a"
  },
  {
    title: "Operating System Quiz",
    icon: "https://img.icons8.com/fluency/96/operating-system.png",
    url: "./os.html",
    tag: "OS",
    color: "#673ab7"
  },
  {
    title: "Database Quiz",
    icon: "https://img.icons8.com/color/96/microsoft-access-2019.png",
    url: "./dbms.html",
    tag: "DBMS",
    color: "#f44336"
  },
  {
    title: "Machine Learning Quiz",
    icon: "https://img.icons8.com/color-glass/96/artificial-intelligence.png",
    url: "./ml.html",
    tag: "AI/ML",
    color: "#00bcd4"
  },
  {
    title: "Linux Quiz",
    icon: "https://img.icons8.com/color/96/linux--v1.png",
    url: "./linux.html",
    tag: "Linux",
    color: "#ff9800"
  },
  {
    title: "Computer Networks Quiz",
    icon: "https://img.icons8.com/external-filled-outline-design-circle/64/external-Computer-Network-network-and-communication-filled-outline-design-circle.png",
    url: "./cn.html",
    tag: "Networking",
    color: "#3f51b5"
  },
  {
    title: "Cyber Security Quiz",
    icon: "https://img.icons8.com/matisse/100/cyber-security--v2.png",
    url: "./cs.html",
    tag: "Security",
    color: "#9e9e9e"
  },
  {
    title: "Computer Architecture Quiz",
    icon: "https://img.icons8.com/stickers/100/my-computer.png",
    url: "./co.html",
    tag: "COA",
    color: "#795548"
  },
  {
    title: "Mega Technical Quiz",
    icon: "https://img.icons8.com/color/96/virtual-machine3.png",
    url: "./mega.html",
    tag: "Mixed",
    color: "#e91e63"
  },
  {
    title: "Rust Quiz",
    icon: "https://img.icons8.com/fluency/96/rust.png",
    url: "#",
    tag: "Rust",
    color: "#000000"
  }
];

async function fetchQuizCount(quizUrl, isPagesDir) {
  if(quizUrl === '#') return 0;
  
  let jsFileName = quizUrl.replace('./', '').replace('.html', 'quiz.js');
  
  const basePath = isPagesDir ? '../' : './';
  let jsPath = `${basePath}quizzes/${jsFileName}`;
  if (jsFileName === 'clanguagequiz.js') jsPath = `${basePath}quizzes/clanguagequiz.js`;
  if (quizUrl === './clanguage.html') jsPath = `${basePath}quizzes/clanguagequiz.js`;
  
  try {
     const res = await fetch(jsPath);
     if(!res.ok) return 0;
     const text = await res.text();
     const matches = text.match(/question\s*:/g);
     return matches ? matches.length : 0;
  } catch(e) {
     return 0;
  }
}

async function renderQuizCards(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const isPagesDir = window.location.pathname.includes('/pages/');
  const basePath = isPagesDir ? '../' : './';
  const aBasePath = isPagesDir ? './' : 'pages/';

  let html = '';
  // Resolve counts for all quizzes first
  const resolvedQuizzes = [];
  for (const quiz of quizMetadata) {
      const count = await fetchQuizCount(quiz.url, isPagesDir);
      if (count >= 5) {
          resolvedQuizzes.push({ ...quiz, questions: count });
      }
  }

  const quizzesToRender = limit ? resolvedQuizzes.slice(0, limit) : resolvedQuizzes;

  quizzesToRender.forEach(quiz => {
    const cardClass = 'quiz-card';
    
    // Convert relative URLs
    let destinationUrl = quiz.url;
    if (destinationUrl.startsWith('./')) {
       destinationUrl = destinationUrl.replace('./', aBasePath);
    }
    
    const buttonHtml = `<a href="${destinationUrl}" class="btn-start-quiz" style="z-index: 10; position: relative;">Start Quiz</a>`;

    html += `
      <div class="${cardClass}">
        <div class="card-glow" style="background: ${quiz.color}40"></div>
        <div class="card-header">
           <img src="${quiz.icon}" alt="${quiz.title} icon" loading="lazy"/>
           <span class="quiz-tag" style="background-color: ${quiz.color}20; color: ${quiz.color}">${quiz.tag}</span>
        </div>
        <div class="card-body">
           <h3>${quiz.title}</h3>
           <p>${quiz.questions} Questions • Beginner to Advanced</p>
        </div>
        <div class="card-footer">
           ${buttonHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
